import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";
import * as bcrypt from "bcryptjs";

interface Coach {
  id: string;
  password: string;
}

interface EventData {
  email: string;
  password: string;
}

const SALT_ROUNDS = 10;

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const { email, password } = event.data;

    // get coach by email
    const coach: Coach = await getCoachByEmail(api, email).then(r => r.Coach);

    // no coach with this email
    if (!coach) {
      return { error: "Invalid credentials!" };
    }

    // check password
    const passwordIsCorrect = await bcrypt.compare(password, coach.password);
    if (!passwordIsCorrect) {
      return { error: "Invalid credentials!" };
    }

    // generate node token for existing Coach node
    const token = await graphcool.generateNodeToken(coach.id, "Coach");

    return { data: { id: coach.id, token } };
  } catch (e) {
    return { error: "An unexpected error occured during authentication." };
  }
};

async function getCoachByEmail(
  api: GraphQLClient,
  email: string
): Promise<{ Coach }> {
  const query = `
    query getCoachByEmail($email: String!) {
      Coach(email: $email) {
        id
        password
      }
    }
  `;

  const variables = {
    email
  };

  return api.request<{ Coach }>(query, variables);
}
