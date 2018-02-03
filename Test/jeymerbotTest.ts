import {JeyMerBot} from '../Dev/index'
import {expect} from 'chai'

var jmb = new JeyMerBot();
describe('twitter deberia twittear', () => { 
    it('should return thank you for tweeting <3',async function() { 
      this.timeout(5000);
      let response = await jmb.sendMessage(".twit test222");
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

  // describe('twitter deberia devolver un json con un link', () => { 
  //   it('should return a link',async function() { 
  //   this.timeout(5000); 
  //   let response = await  jmb.sendMessage(".imagen perro"); 
  //   expect(response[0].link).to.equal("http://contextodiario.com/wp-content/uploads/2017/12/que-comen-los-perros.jpg");        
      
  //   });  
  // });

  describe('link con una imágen', () => { 
    it('should return a link',async function() { 
    this.timeout(5000); 
    let response = await  jmb.sendMessage(".pic maria__"); 
    expect(response).to.equal("https://farm1.staticflickr.com/507/19740064399_62ba6f45bf.jpg");        
      
    });  
  });


  
  describe('link con un meme', () => { 
    it('should return a link',async function() { 
    this.timeout(5000); 
    let response = await  jmb.sendMessage(".meme 61546, Brace yourselves, the sprint planning session is coming"); 
    expect(response).to.equal("http://i.imgflip.com/23vfko.jpg");        
      
    });  
  });