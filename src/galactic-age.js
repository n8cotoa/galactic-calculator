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

  mercuryAge() {
    const mercuryYear = 0.24;
    let ageOnMercury = Math.floor(((this.age / (365 * 24 * 60 * 60 )) * mercuryYear));
    return ageOnMercury;
  }
}
