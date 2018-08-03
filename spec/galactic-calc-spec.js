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
    expect(testUser.age).toEqual(jasmine.any(Number));
  });

  it('will return the users age in mercury years', function(){
    expect(testUser.diffPlanetAge('mercury')).toEqual(5)
  });

  it('will return the users age in venus years', function(){
    expect(testUser.diffPlanetAge('venus')).toEqual(15)
  });

  it('will return the users age in mars years', function(){
    expect(testUser.diffPlanetAge('mars')).toEqual(46)
  });

  it('will return the users age in jupiter years', function(){
    expect(testUser.diffPlanetAge('jupiter')).toEqual(291)
  });

  it('will return how many years the user has left to live on a chosen planet based on avg life expectancy in US for male and females', function(){
    expect(testUser.leftToLive('male', 'mars')).toEqual(jasmine.stringMatching('You have around'))
  });
  it('will return how many years the user has lived past the avg life expectancy in US for male and females on a chosen planet', function(){
    let birthDate = new Date(1934, 1, 1);
    let oldUser = new GalacticAge(birthDate, currentDate);
    expect(oldUser.leftToLive('male', 'mars')).toEqual(jasmine.stringMatching('You have lived'))
  });
});
