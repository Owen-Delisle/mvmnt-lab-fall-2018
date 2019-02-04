import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";

interface WorkoutSession {
  id: string;
}

interface EventData {
  day: number;
  poses: [string];
}

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const { day, poses } = event.data;

    const workoutSession = await createGraphcoolWorkoutSession(api, day, poses);

    return { data: { workoutSession } };
  } catch (e) {
    return { error: e };
  }
};

async function createGraphcoolWorkoutSession(
  api: GraphQLClient,
  day: number,
  poses: [string]
): Promise<string> {
  const mutation = `
      mutation createGraphcoolWorkoutSession($day: Int!, $poses: [Pose!]!) {
        createPose(
          day: $day,
          poses: $poses
        ) {
          id
        }
      }
    `;

  const variables = {
    day,
    poses
  };

  return api
    .request<{ createWorkoutSession: WorkoutSession }>(mutation, variables)
    .then(r => r.createWorkoutSession.id);
}
