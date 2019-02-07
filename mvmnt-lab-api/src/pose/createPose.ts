import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";

interface Pose {
  id: string;
}

interface EventData {
  icon: string;
  title: string;
  duration: string;
  video: string;
  heavyVideo: string;
}

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const { icon, title, duration, video, heavyVideo } = event.data;

    const pose = await createGraphcoolPose(
      api,
      icon,
      title,
      duration,
      video,
      heavyVideo
    );

    return { data: { pose } };
  } catch (e) {
    return { error: e };
  }
};

async function createGraphcoolPose(
  api: GraphQLClient,
  icon: string,
  title: string,
  duration: string,
  video: string,
  heavyVideo: string
): Promise<string> {
  const mutation = `
      mutation createGraphcoolPose($icon: String!, $title: String!, $duration: String!, $video: String!, $heavyVideo: String!) {
        createPose(
          icon: $icon,
          title: $title,
          duration: $duration,
          video: $video,
          heavyVideo: $heavyVideo
        ) {
          id
        }
      }
    `;

  const variables = {
    icon,
    title,
    duration,
    video,
    heavyVideo
  };

  return api
    .request<{ createPose: Pose }>(mutation, variables)
    .then(r => r.createPose.id);
}
