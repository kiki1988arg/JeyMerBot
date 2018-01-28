import {jmb} from '../Dev/index'
import {expect} from 'chai'

describe('twitter deberia twittear', () => { 
    it('should return thank you for tweeting <3',async (done) => { 
    
    let ja = await  jmb.sendMessage("!twit: test4");    
    let jaa = await  jmb.sendMessage("https://vignette.wikia.nocookie.net/sonic/images/4/4e/Shadow_-_Sonic_Forces_Artwork.png/revision/latest?cb=20171104094212&path-prefix=es");          
 
    });  
  });