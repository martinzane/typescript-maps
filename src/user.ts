import { faker } from "@faker-js/faker";
import { Location } from "./types";
import { Mappable } from "./map";

class User implements Mappable {
  public name: string;
  public location: Location;

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent(): string {
    return `
      <div>
        <h1>User name: ${this.name}</h1>
      </div>
    `;
  }
}

export default User;
