import {expect} from 'chai'
import jmb from '../Dev/index'

describe('mongo jeymerbot', () => { 
    it('should return probando', async () => {  
        var mi = new jmb();     
        var res = await (mi.getMessage());
        await expect(res).to.equal('probando');
    });  
  });