import Content from "./content.schema";
import { IContent } from "./content.interface";
import { PaginateResult } from "mongoose";

export default class ContentRepository {
  public async getAll(): Promise<PaginateResult<IContent>> {
    const contents = await Content.paginate();
    return contents;
  }

  public async getById(id: string): Promise<IContent | null> {
    return await Content.findById(id) ?? null;
  }

  public async create(content: IContent): Promise<IContent> {
    return await Content.create(content);
  }

  public async update(id: string, content: IContent): Promise<IContent | null> {
    const updatedContent = await Content.findByIdAndUpdate(id, content, { new: true });
    return updatedContent ?? null;
  }

  public async delete(id: string): Promise<void> {
    await Content.findByIdAndDelete(id);
  }
}
