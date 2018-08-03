export class GalacticAge {
  constructor(birthDate, currentDate) {
    this.currentDate = currentDate;
    this.birthDate = birthDate;
    this.age = this.ageToSeconds();
  }

  ageToSeconds() {
    let birthDate = this.birthDate;
    let ageInSeconds = Math.floor((this.currentDate - birthDate.getTime())/1000);
    return ageInSeconds;
  }

  diffPlanetAge(input) {
    let planet = input.toLowerCase();
    const planets = {mercury: 0.24, venus: 0.62, mars: 1.88, jupiter: 11.86, earth: 1};
    let ageOnOtherPlanet = Math.floor(((this.age / (365 * 24 * 60 * 60 )) * planets[planet]));
    return ageOnOtherPlanet;
  }

  leftToLive(inputSex, inputPlanet) {
    let planetAge = this.diffPlanetAge(inputPlanet);
    const planets = {mercury: 0.24, venus: 0.62, mars: 1.88, jupiter: 11.86, earth: 1};
    const sex = {male: 76, female: 81};
    let lifeExpectancy = (sex[inputSex] * planets[inputPlanet]);
    let yearsLeft = Math.floor(lifeExpectancy - planetAge);
    if (yearsLeft >= 0) {
      return `You have around ${yearsLeft} years left to live!`
    } else {
      return `You have lived ${Math.abs(yearsLeft)} years past the average life expectancy!`
    }
  }
}
