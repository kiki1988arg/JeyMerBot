import TextHandler from "../Interfaces/textHandlers"
var Imgflipper = require("imgflipper");

export class MemeHandler extends TextHandler{ 

    public async handleRequest(message:string):Promise<any>{      
        if(message.startsWith('.meme')){  
            return await this.getMeme(message.slice(6));            
        }  
        else 
            return this.successor.handleRequest(message);
        
    }   
   
    //Funcion que transforma en promesa la api de google image
    private  async getMeme(msg:string):Promise<any> {
        return new Promise(resolve => {         

            var cb = function (err:any,res:any) 
            {
                if(res!=null)
                resolve(res);
                else
                new Error(err);
            }
            let memeString = msg.split(',');
            var imgflipper = new Imgflipper(process.env.MEME_USERNAME,process.env.MEME_PASS);
            imgflipper.generateMeme(memeString[0], memeString[1], memeString[2], cb);
           
        });
    }
  

}





