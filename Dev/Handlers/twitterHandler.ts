import TextHandler from "../Interfaces/textHandlers"
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
            "consumerKey": process.env.TWITTER_CONSUMERKEY,
            "consumerSecret": process.env.TWITTER_CONSUMERSECRET,
            "accessToken": process.env.TWITTER_ACCESTOKEN,
            "accessTokenSecret": process.env.TWITTER_ACCESTOKENSECRET,
            "callBackUrl": process.env.TWITTER_CALLBACKURL
        });
        this.re = new RegExp("(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)");
      
    }

    public async handleRequest(message:string): Promise<any> {       
        if(message.startsWith('.twit'))
        {             
           this.twitter.postTweet({'status':message.slice(5)},this.error,this.succes);                         
           return "tweet enviado";         
           
        }
        else if(this.re.test(message))
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
        else {
            return this.successor.handleRequest(message);
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

