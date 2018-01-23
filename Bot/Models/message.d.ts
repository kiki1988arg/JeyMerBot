/// <reference types="mongoose" />
import { Document, Schema, Model } from "mongoose";
import { Imessage } from "@Interfaces/Imessage";
export interface ImessageModel extends Imessage, Document {
}
export declare var messageSchema: Schema;
export declare const message: Model<ImessageModel>;
