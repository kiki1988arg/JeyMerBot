import { Document, Schema, Model, model} from "mongoose";
import { Imessage } from "@Interfaces/Imessage" ;

export interface ImessageModel extends Imessage, Document {
  
}

export var messageSchema: Schema = new Schema({
    request: String,
    response:String
});

messageSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};

export const message: Model<ImessageModel> = model<ImessageModel>("User", messageSchema,'actions');







// import {Mongoose, MongooseDocument, Model} from 'mongoose';

// class message extends Model {
//     req: string;
//     res: string;  
// }

// export default message;


