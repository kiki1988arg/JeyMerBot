import TextHandler from "../Interfaces/textHandlers"
var GphApiClient = require('giphy-js-sdk-core')


export class GifHandler extends TextHandler{ 
    private client:any;
    constructor()
    {
        super();
        
        this.client = GphApiClient(process.env.GIPHY_KEY);
    }
    public async handleRequest(message:string):Promise<any>{     
            if(message.startsWith('.gif')){  
                if (message.slice(5)=='top')
                {
                    return await this.client.trending("gifs", {'limit':'5','rating':'R'})
                    .then((res:any) => {
                        return res.data;
    
                    })
                    .catch((err:any) => {
                        return err;
                    })    
                }
                else
                {
                    return await this.client.random('gifs', {"q": message.slice(4),"rating":'r'})
                    .then((res:any) => {
                        return res.data.images.original.gif_url;
                    })
                    .catch((err:any) => {
                        err;
                    });         
                }
            }        

           
           
        } 
}