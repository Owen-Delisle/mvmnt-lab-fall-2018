import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";
import * as bcrypt from "bcryptjs";
import * as validator from "validator";

interface Coach {
  id: string;
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

    if (!validator.isEmail(email)) {
      return { error: "Not a valid email" };
    }

    // check if coach exists already
    const coachExists: boolean = await getCoach(api, email).then(
      r => r.Coach !== null
    );
    if (coachExists) {
      return { error: "Email already in use" };
    }

    // create password hash
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    // create new coach
    const coachId = await createGraphcoolCoach(api, email, hash);

    // generate node token for new Coach node
    const token = await graphcool.generateNodeToken(coachId, "Coach");

    return { data: { id: coachId, token } };
  } catch (e) {
    return { error: e };
  }
};

async function getCoach(api: GraphQLClient, email: string): Promise<{ Coach }> {
  const query = `
    query getCoach($email: String!) {
      Coach(email: $email) {
        id
      }
    }
  `;

  const variables = {
    email
  };

  return api.request<{ Coach }>(query, variables);
}

async function createGraphcoolCoach(
  api: GraphQLClient,
  email: string,
  password: string
): Promise<string> {
  const mutation = `
    mutation createGraphcoolCoach($email: String!, $password: String!) {
      createCoach(
        email: $email,
        password: $password,
      ) {
        id
      }
    }
  `;

  const variables = {
    email,
    password: password
  };

  return api
    .request<{ createCoach: Coach }>(mutation, variables)
    .then(r => r.createCoach.id);
}
