import { Document } from "mongoose";

export default interface ICompany extends Document {
    name: string,
    tags: string[],
    articleLink: string
}