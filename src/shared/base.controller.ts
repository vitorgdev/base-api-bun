import { PaginateResult } from "mongoose";
import { IReadable } from "./interfaces/IReadable";
import { IWritable } from "./interfaces/IWritable";

export abstract class BaseController implements IReadable, IWritable {
  async getAll(): Promise<PaginateResult<Object>> {
    return {} as PaginateResult<Object>;
  }

  getOne(): string {
    return "getOne base implementation";
  }

  create(): string {
    return "create base implementation";
  }

  update(): string {
    return "update base implementation";
  }

  delete(): string {
    return "delete base implementation";
  }
}
