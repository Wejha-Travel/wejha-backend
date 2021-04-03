process.env.NODE_ENV="testing";

import objection from "../../../db/objection/index";

import app from "../../../application/express/index";
import req from "supertest";


// let token: string;
let agent = req.agent(app);

beforeAll(async () => {
    await objection.knex().migrate.rollback({}, true);
    await objection.knex().migrate.latest();
    // await objection.knex().seed.run();
})

afterAll(async () => {
    await objection.knex().migrate.rollback({}, true);
    await objection.knex().destroy();
})

import userTests from "./user";

describe("express integration testing", () => {
    userTests(agent);
})