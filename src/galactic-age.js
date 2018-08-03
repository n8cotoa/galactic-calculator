export class GalacticAge {
  constructor(birthDate, currentDate) {
    this.currentDate = currentDate;
    this.birthDate = birthDate;
    this.age = this.ageToSeconds();
  }

  ageToSeconds() {
    let birthDate = this.birthDate;
    let ageInSeconds = (birthDate.getTime() / 1000);
    return ageInSeconds;
  }

  diffPlanetAge(input) {
    let planet = input.toLowerCase();
    const planets = {mercury: 0.24, venus: 0.62, mars: 1.88, jupiter: 11.86};
    let ageOnOtherPlanet = Math.floor(((this.age / (365 * 24 * 60 * 60 )) * planets[planet]));
    return ageOnOtherPlanet;
  }

}
