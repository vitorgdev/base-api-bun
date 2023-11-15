import { BaseController } from "../../shared/base.controller";
import { IContentPaginate } from "./content.interface";
import ContentService from "./content.service";

const contentService = new ContentService();

class ContentController extends BaseController {
  public async getAll(): Promise<IContentPaginate> {
    const contents = await contentService.getAll();
    return contents;
  }
}

export default ContentController;
