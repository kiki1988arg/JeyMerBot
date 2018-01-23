import {expect} from 'chai'
import {jey} from '../Dev/index'



describe('mongo jeymerbot', () => { 
    it('should return probando', async () => { 
        console.log(await jey.getMessage());       
        console.log(await jey.getHola());
       
        
 
    });  
  });