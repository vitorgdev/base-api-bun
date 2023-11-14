import mongoose, { Document } from "mongoose";

export enum ContentType {
  RSS = "RSS",
  VIDEO = "VIDEO",
  INSTAGRAM = "INSTAGRAM",
}

export interface IRss {
  title: string[];
  description: string[];
  link: string[];
  pubDate: string[];
  category: string[];
  "media:content": string[];
  "content:encoded": string[];
  guid: string[];
}
export interface IContent extends Document {
  name: string;
  file: string;
  fileSize: number;
  thumbnail: string;
  initialDate?: string;
  finalDate?: string;
  url?: string;
  duration?: number;
  logo?: string;
  status?: boolean;
  customer?: mongoose.Schema.Types.ObjectId;
  rss?: IRss[];
  type?: ContentType;
  createdAt?: Date;
  updatedAt?: Date;
}
