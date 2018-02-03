import TextHandler from "../Interfaces/textHandlers"
var Imgflipper = require("imgflipper");
require('dotenv').config({path: 'meme.env'})

export class MemeHandler extends TextHandler{ 

    public async handleRequest(message:string):Promise<any>{      
        if(message.startsWith('.meme')){  
            return await this.getMeme(message.slice(6));            
        }  
        
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
            var imgflipper = new Imgflipper(process.env.MEMEUSERNAME,process.env.MEMEPASS);
            imgflipper.generateMeme(memeString[0], memeString[1], memeString[2], cb);
           
        });
    }
  

}





