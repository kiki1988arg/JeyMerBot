import {expect} from 'chai'
import {TwitterHandlerModule} from '../Dev/Handlers/twitterHandler'


describe('twitter deberia twittear', () => { 
    it('should return thank you for tweeting <3',async (done) => { 
    
    let response = await  TwitterHandlerModule.handleRequest("!twit: test3");    
    expect(response).to.equal('tweet enviado');  
       
 
    });  
  });

describe('twitter deberia subir una imagen', () => { 
    it('should return thank you for tweeting <3',async (done) => { 
   
    let response = await TwitterHandlerModule.handleRequest("https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/pages/2017/march/god-fist/img/god-fist-lee-sin-skin.jpg");
    expect(response).to.equal('imagen subida');   
        
 
    });  
  });