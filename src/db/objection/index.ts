import { Model } from "objection";
import Knex from "knex";

const environment = process.env.NODE_ENV || 'development';
const config = require('../../../knexfile')[environment];
const knex = Knex(config)

Model.knex(knex);

export default Model;