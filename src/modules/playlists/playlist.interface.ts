import { IContent } from "../contents/content.interface";
import { ITerminal } from "../terminals/terminal.interface";
import { BrazilStates } from "../../shared/enums/states.enum";

export interface IPlaylist {
  _id?: string;
  name: string;
  contents: IContent[];
  initialDate: string;
  finalDate: string;
  subPlaylist: ISubPlaylist[];
  terminals: ITerminal[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISubPlaylist {
  afterContents: number;
  contents: ISubPlaylistContent[];
}

export interface ISubPlaylistContent {
  content: IContent;
  location?: IContentLocation;
}

export interface IContentLocation {
  states: BrazilStates[];
  cities: string[];
  terminals: ITerminal[];
}
