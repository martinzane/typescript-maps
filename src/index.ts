import Company from "./company";
import Map from "./map";
import User from "./user";

const user = new User();
const company = new Company();
const map = new Map();

map.initialize("map");
map.addMarker(user);
map.addMarker(company);
