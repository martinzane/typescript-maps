import { faker } from "@faker-js/faker";
import { Location } from "./types";

class Company {
  name: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}

export default Company;
