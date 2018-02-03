import TextHandler from "../Interfaces/textHandlers"
var imageSearch = require('node-google-image-search');
 
export class GiHandler extends TextHandler{ 

    public async handleRequest(message:string):Promise<any>{      
        if(message.startsWith('.imagen')){  
            return await this.getImage(message.slice(7));            
        }
        else{
            return this.successor.handleRequest(message);
        }
        
    }   
   
    //Funcion que transforma en promesa la api de google image
    private  async getImage(x:string):Promise<any> {
        return new Promise(resolve => {         

            imageSearch(x,(res:any)=>{                                         
                        resolve(res);              
                
            }, 0, 1);         
           
        });
      }
  

}

