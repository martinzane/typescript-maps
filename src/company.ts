import { faker } from "@faker-js/faker";
import { Location } from "./types";

class Company {
  public name: string;
  public catchPhrase: string;
  public location: Location;

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}

export default Company;
