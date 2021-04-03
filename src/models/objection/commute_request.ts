import { Model, BaseModel } from "./base";
import {
  Commute_request,
  Commute_requestModelInterface,
} from "../interfaces/commute_request";
import { Coordinates } from "../interfaces/coordinates";

export class Commute_requestObjectionModel
  extends Model
  implements Commute_request {
  id: number;
  source: Coordinates;
  destination: Coordinates;
  timestamp: Date;
  status: "waiting" | "pickedup" | "cancelled" | "enroute";
  user_id: number;
  driver_id: number;

  static tableName = "commute_requests";
  static jsonSchema = {
    type: "object",
    attributes: {
      id: { type: "number" },
      source: {
        type: "object",
        attributes: { longitude: "number", latitude: "number" },
      },
      destination: {
        type: "object",
        attributes: { longitude: "number", latitude: "number" },
      },
      timestamp: { type: "string", format: "datetime" },
      status: { type: "string" },
      user_id: { type: "number" },
      driver_id: { type: "number" },
    },
  };
  static relationMappings = {
    minidriver: {
      relation: Model.BelongsToOneRelation,
      modelClass: "minidriver", // file name with objection model class (e.g src/models/objection/minidriver_details.ts)
      join: {
        // map the relation keys [tablename].[column]
        from: "minidriver.id",
        to: "commute_request.driver_id",
      },
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: "user", // file name with objection model class (e.g src/models/objection/minidriver_details.ts)
      join: {
        // map the relation keys [tablename].[column]
        from: "user.id",
        to: "commute_request.user_id",
      },
    },
  };
}

export class CommuteRequestModel extends BaseModel<Commute_request> implements Commute_requestModelInterface {
  model = Commute_requestObjectionModel;
}
