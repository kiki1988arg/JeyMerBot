import TextHandler from "../Interfaces/textHandlers"
const got = require('got');

export class NasaHandler extends TextHandler{ 

public async handleRequest(message:string):Promise<any>{     
        if(message.startsWith('.nasa')){         
                    const response = await got('https://api.nasa.gov/planetary/apod?api_key='+process.env.NASA_KEY, { json: true });
                    return await response.body.url;          

        }
    }
}