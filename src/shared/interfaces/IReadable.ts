export interface IReadable {
    getAll(): Promise<object[]>;
    getOne(): string;
  }
  