import mongoose, { Schema, Document } from "mongoose";
import { IContent } from "./content.interface";
import paginate from "mongoose-paginate-v2";

const ContentSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    file: { type: String },
    fileSize: { type: Number },
    thumbnail: { type: String },
    initialDate: { type: String },
    finalDate: { type: String },
    url: { type: String },
    duration: { type: Number },
    logo: { type: String },
    status: { type: Boolean, default: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    rss: [
      {
        title: { type: [String] },
        description: { type: [String] },
        link: { type: [String] },
        pubDate: { type: [String] },
        category: { type: [String] },
        "media:content": { type: [String] },
        "content:encoded": { type: [String] },
        guid: { type: [String] },
      },
    ],
    type: {
      type: String,
      enum: ["RSS", "VIDEO", "INSTAGRAM"],
      default: "VIDEO",
    },
  },
  {
    timestamps: true,
  }
);

ContentSchema.plugin(paginate);

export default mongoose.model<IContent, mongoose.PaginateModel<IContent>>(
  "Content",
  ContentSchema
);
