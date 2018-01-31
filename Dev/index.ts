import { TwitterHandler } from './Handlers/twitterHandler';
import { GiHandler } from './Handlers/giHandler';
// import * as mongoose from 'mongoose';
// import {message , ImessageModel} from "./Models/message";

 export class JeyMerBot {
      private twitterHandler:any;
      private giHandler:any;
      constructor()
      {
          this.twitterHandler = new TwitterHandler();  
          this.giHandler = new GiHandler(); 
          this.twitterHandler.successor = this.giHandler;         
      }
      public async sendMessage(message:any):Promise<any>
      {
         return this.twitterHandler.handleRequest(message);
      }     
      
  }





