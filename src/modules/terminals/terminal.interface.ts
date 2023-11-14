import { IContent } from "../contents/content.interface";
import { ILocation } from "../../shared/interfaces/ILocation";

export interface ITerminal {
  _id?: number;
  name: string;
  categories: string[];
  description: string;
  status: string;
  location: ILocation;
  socialClass: string[];
  operationDate: string[];
  proportion: string[];
  startHour: string;
  endHour: string;
  refreshTime: string;
  specialty: string[];
  displays: string;
  file: string;
  flow: string;
  contents: IContent[];
  playlists: string[];
  appVersion: string;
  updated: boolean;
  lastViewedContent: IContent;
  createdAt?: Date;
  updatedAt?: Date;
}