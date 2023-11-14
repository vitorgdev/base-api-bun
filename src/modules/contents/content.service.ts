import { IContent } from './content.interface'
import ContentRepository from './content.repository'

const contentRepository = new ContentRepository()

export default class ContentService {
  public async getAll(): Promise<IContent[]> {
    return await contentRepository.getAll()
  }

  public async getById(id: string): Promise<IContent> {
    return await contentRepository.getById(id)
  }

  public async create(content: IContent): Promise<IContent> {
    return await contentRepository.create(content)
  }

  public async update(id: string, content: IContent): Promise<IContent> {
    return await contentRepository.update(id, content)
  }

  public async delete(id: string): Promise<void> {
    await contentRepository.delete(id)
  }
}