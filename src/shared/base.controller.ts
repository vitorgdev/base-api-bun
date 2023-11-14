import { IReadable } from "./interfaces/IReadable";
import { IWritable } from "./interfaces/IWritable";

export abstract class BaseController implements IReadable, IWritable {
  async getAll(): Promise<object[]> {
    return await [{}];
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
