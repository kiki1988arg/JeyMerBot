import { TwitterHandler } from './Handlers/twitterHandler'
import { GiHandler } from './Handlers/giHandler'
import { FlickrHandler } from './Handlers/flickrHandler'
import { MemeHandler } from './Handlers/MemeHandler'
// import * as mongoose from 'mongoose';
// import {message , ImessageModel} from "./Models/message";

 export class JeyMerBot {
      private twitterHandler:any;
      private giHandler:any;
      private flickrHandler:any;
      private memeHandler:any;

      constructor()
      {
          this.twitterHandler = new TwitterHandler();  
          this.giHandler = new GiHandler(); 
          this.flickrHandler = new FlickrHandler();
          this.memeHandler = new MemeHandler();
          
          this.twitterHandler.successor = this.giHandler;  
          this.giHandler.successor = this.flickrHandler;  
          this.flickrHandler.successor = this.memeHandler;     
      }
      public async sendMessage(message:any):Promise<any>
      {
         return this.twitterHandler.handleRequest(message);
      }     
      
  }





