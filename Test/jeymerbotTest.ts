import {JeyMerBot} from '../Dev/index'
import {expect} from 'chai'

var jmb = new JeyMerBot();
describe('twitter deberia twittear', () => { 
    it('should return thank you for tweeting <3',async function() { 
      this.timeout(5000);
      let response = await jmb.sendMessage("!twit: test222");
      expect(response).to.equal('tweet enviado');  
    });  
  });  


describe('twitter deberia subir una imagen', () => { 
    it('should return thank you for tweeting <3',async function() {
      this.timeout(5000);
      let response = await jmb.sendMessage("https://am-a.akamaihd.net/image?f=https://news-a.akamaihd.net/public/images/pages/2017/march/god-fist/img/god-fist-lee-sin-skin.jpg");
      expect(response).to.equal('imagen subida');        
    });  
  });

  describe('twitter deberia devolver un json con un link', () => { 
    it('should return a link',async function() { 
    this.timeout(5000); 
    let response = await  jmb.sendMessage("foto de:"); 
    expect(response[0].link).to.equal('https://media.deseretdigital.com/file/b490ee5241.png?crop=top_0~left_0~width_958~height_869&resize=width_630~height_572&c=9&a=725ff78c');        
      
    });  
  });