import * as mongoose from 'mongoose';
import {message , ImessageModel} from "./Models/message";



export default class JeyMerBot {
    private msgResponse: ImessageModel | null; // Puede devolver ImessageModel o null
    private connection:string;
    constructor(){
      
    }

    public async getMessage() {  
    mongoose.connect('mongodb://localhost/JeyMerBot');    
      this.msgResponse = await message.findOne({ 'request': 'ezequiel' }, 'response').exec();
      if( this.msgResponse)
      return await this.msgResponse.response;
      else
      return "not found";
    }

    // public async  getMessage():Promise<any> {  
    // mongoose.connect('mongodb://localhost/JeyMerBot');
    // this.response = await message.findOne({ 'request': 'asdasd' }, 'response').exec();
    // return this.response;
    // }
      
  }




