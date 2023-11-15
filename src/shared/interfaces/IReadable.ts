import { PaginateResult } from "mongoose";

export interface IReadable {
    getAll(): Promise<PaginateResult<Object>>;
    getOne(): string;
  }
  