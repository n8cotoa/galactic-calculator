import { GalacticAge } from './../src/galactic-age';

describe('GalacticAge', function(){
  let currentDate;
  let testUser;
  beforeEach(function(){
    currentDate = Date.now();
    let birthDate = new Date(1993, 11, 27);
    testUser = new GalacticAge(birthDate, currentDate);
  });

  it('will take the users age and convert it into seconds', function(){
    expect(testUser.age).toEqual(756979200)
  });

  it('will return the users age in mercury years', function(){
    expect(testUser.mercuryAge()).toEqual(5)
  });
});
