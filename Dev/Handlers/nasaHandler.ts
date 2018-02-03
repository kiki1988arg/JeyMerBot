import TextHandler from "../Interfaces/textHandlers"
const got = require('got');

export class NasaHandler extends TextHandler{ 

    public async handleRequest(message:string):Promise<any>{     
            if(message.startsWith('.nasa')){  
                 
                        let randomDate = await this.formatDate(this.getRandomDate());                        
                        const response = await got('https://api.nasa.gov/planetary/apod?api_key='+process.env.NASA_KEY+'&date='+randomDate, { json: true });
                        return await response.body.url;       

            }        
        }
          
    private  getRandomDate():Date {
            
          let start = new Date(1995, 6, 16);     
          let to = new Date();       
          return new Date(start.getTime() + Math.random() * (to.getTime() - start.getTime()));

        }

    private  formatDate(date:Date){

        let d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let    day = '' + d.getDate();
        let year = d.getFullYear();        

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }


}