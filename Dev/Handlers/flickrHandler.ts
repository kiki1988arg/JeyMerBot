import TextHandler from "../Interfaces/textHandlers"
require('dotenv').config()

export class FlickrHandler extends TextHandler{ 
    
    private Flickr:any;
    private flickrOptions:any;

    constructor(){        
        super();
        this.Flickr = require("flickrapi"), 
        this.flickrOptions = {
        api_key: process.env.FLICKR_API_KEY,  
        secret: process.env.FLICKR_SECRET,         
        user_id: process.env.FLICKR_USER_ID,
        access_token:process.env.FLICKR_ACCESS_TOKEN,
        access_token_secret: process.env.FLICKR_ACCESS_TOKEN_SECRET
        };    
    } 
    
    public async handleRequest(message:string):Promise<any>{
        if(message.startsWith('.pic')){   
            return new Promise((resolve,error)=> this.Flickr.tokenOnly(this.flickrOptions, function(error:any, flickr:any) {
                flickr.photos.search({                   
                    text:message.slice(5),
                    page: 1,
                    per_page: 100,
                    safe_search: 3,
                    authenticated: true,
                    tags: 'erotic',
                    content_type: 1    
               
            }, async (err:any, result:any) =>{
                let arrayPhotos = result.photos.photo;
                let respuesta = arrayPhotos[Math.floor(Math.random() * arrayPhotos.length)];
                let farm = respuesta.farm;
                let server = respuesta.server;
                let id = respuesta.id;
                let secret = respuesta.secret;
                let url = "https://farm"+farm+".staticflickr.com/"+server+"/"+id+"_"+secret+".jpg"
                    resolve(url);
                });
            })
            );
        }
        else{
            return this.successor.handleRequest(message);
        }
    }
}

     

  

