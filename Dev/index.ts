import { TwitterHandler } from './Handlers/twitterHandler'
import { GiHandler } from './Handlers/giHandler'
import { FlickrHandler } from './Handlers/flickrHandler'
import { MemeHandler } from './Handlers/MemeHandler'
import { NasaHandler } from './Handlers/nasaHandler'
import { GifHandler } from './Handlers/gifHandler'
require('dotenv').config()

// import * as mongoose from 'mongoose';
// import {message , ImessageModel} from "./Models/message";

 export class JeyMerBot {
      private twitterHandler:any;
      private giHandler:any;
      private flickrHandler:any;
      private memeHandler:any;
      private nasaHandler:any;
      private gifHandler:any;

      constructor()
      {
          this.twitterHandler = new TwitterHandler();  
          this.giHandler = new GiHandler(); 
          this.flickrHandler = new FlickrHandler();
          this.memeHandler = new MemeHandler();
          this.nasaHandler = new NasaHandler();
          this.gifHandler = new GifHandler();
          
          this.twitterHandler.successor = this.giHandler;  
          this.giHandler.successor = this.flickrHandler;  
          this.flickrHandler.successor = this.memeHandler; 
          this.memeHandler.successor = this.nasaHandler;  
          this.nasaHandler.successor = this.gifHandler;  
      }
      public async sendMessage(message:any):Promise<any>
      {
         return this.twitterHandler.handleRequest(message);
      }     
      
  }





