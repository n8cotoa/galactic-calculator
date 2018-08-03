export class GalacticAge {
  constructor(age) {
    this.age = parseInt(age);
    this.seconds = this.ageToSeconds();
  }

  ageToSeconds() {
    let ageInSeconds = (this.age * (365 * 24 * 60 * 60));
    return ageInSeconds;
  }
}
