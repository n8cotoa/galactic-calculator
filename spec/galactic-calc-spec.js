import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', function(){
  let testUser;
  beforeEach(function(){
    testUser = new GalacticAge(24);
  });

  it('will instaniate an object with the users age as an attribute', function(){
    expect(testUser.age).toEqual(24)
  });
});
