import { TwitterHandlerModule } from './Handlers/twitterHandler'

// import * as mongoose from 'mongoose';
// import {message , ImessageModel} from "./Models/message";

 export class JeyMerBot {
      public sendMessage(message:any)
      {
        TwitterHandlerModule.handleRequest(message);
      }
      // private msgResponse: ImessageModel | null; // Puede devolver ImessageModel o null
      // private connection:string;   
    
      // public async getMessage() {  
      // mongoose.connect('mongodb://localhost/JeyMerBot');    
      // this.msgResponse = await message.findOne({ 'request': 'ezequiel1' }, 'response').exec();
      // if( this.msgResponse)
      // return await this.msgResponse.response;
      // else
      // return "not found";
      // }  

      // public async getHola() {  
      //   return await "Hola";
      // }
      
  }

  export const jmb = new JeyMerBot();



