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
    expect(testUser.diffPlanetAge('mercury')).toEqual(5)
  });

  it('will return the users age in venus years', function(){
    expect(testUser.diffPlanetAge('venus')).toEqual(14)
  });

  it('will return the users age in mars years', function(){
    expect(testUser.diffPlanetAge('mars')).toEqual(45)
  });
});
