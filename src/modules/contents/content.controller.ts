import { BaseController } from "../../shared/base.controller";
import { IContent } from "./content.interface";
import ContentService from "./content.service";

const contentService = new ContentService();

class ContentController extends BaseController {
  public async getAll(): Promise<IContent[]> {
    console.log("teste");

    return await contentService.getAll();
  }
}

export default ContentController;
