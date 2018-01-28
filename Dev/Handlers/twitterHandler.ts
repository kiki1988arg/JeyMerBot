import TextHandler from "../Interfaces/textHandlers"
import textHandlers from "../Interfaces/textHandlers"
var rp = require('request-promise')

var Twitter:any = require('twitter-node-client').Twitter;


export class TwitterHandler extends TextHandler{  

    private twitter:any;
    private re:RegExp; 
    private imgBase64:any; 
    
    constructor()
    {     
        super();
        	//Example calls
            this.twitter = new Twitter({
            "consumerKey": "V3306sFiIpNNQHz4tyFzzcVBJ",
            "consumerSecret": "BX2uL4AjEk1qonljncVsB42RByVIFmq6vcprMc4ctawZnPXqOY",
            "accessToken": "954484250140729344-c5ACzNKJ3RX6beWqXvn1qvrW6Gv5I2w",
            "accessTokenSecret": "UktqHVNUCMRCEeMEIZAyAhyMI3in63ouBNZqq4jx6DRqE",
            "callBackUrl": "XXX"
        });
        this.re = new RegExp("(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)");
        
    }

    public async handleRequest(message:string): Promise<any> {       
        if(message.startsWith('!twit:'))
        {     
            
           this.twitter.postTweet({'status':message.split(':')[1]},this.error,this.succes);                         
           return "tweet enviado";
            
           
        }
        if(this.re.test(message))
        {
            const options = {
                url: message,
                encoding: 'Base64'
              };
            //Set imageBase64  
            this.imgBase64 = await rp.get(options)
                .then(function (res:string) {
                  return res;
                });  
            //upload del image si es succes lo envio a la
            // funcion mediaUpload para que lo twittee
            this.twitter.postMedia({'media':this.imgBase64},this.error,this.mediaUpload);              
            return "imagen subida";                     
           
        }

       
    }

    private error = (err:any, response:any, body:any) => {      
    	 console.log(err);
	};
	private succes = (data:any) => {       
         console.log(data);
    };
    private mediaUpload = (data:any) => { 
        this.twitter.postTweet({'media_ids':JSON.parse(data).media_id_string},this.error,this.succes);                           
    };		
     


} 

export const TwitterHandlerModule = new TwitterHandler();