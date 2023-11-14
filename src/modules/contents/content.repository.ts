import Content from "./content.schema";
import { IContent } from "./content.interface";

export default class ContentRepository {
  public async getAll(): Promise<IContent[]> {
    return await Content.find();
  }

  public async getById(id: string): Promise<IContent> {
    return await Content.findById(id);
  }

  public async create(content: IContent): Promise<IContent> {
    return await Content.create(content);
  }

  public async update(id: string, content: IContent): Promise<IContent> {
    return await Content.findByIdAndUpdate(id, content, { new: true });
  }

  public async delete(id: string): Promise<void> {
    await Content.findByIdAndDelete(id);
  }
}
