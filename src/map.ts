import { Location } from "./types";

class Map {
  private googleMap: google.maps.Map;

  constructor() {}

  public async initialize(divId: string) {
    const { Map: GoogleMap } = (await google.maps.importLibrary(
      "maps"
    )) as google.maps.MapsLibrary;

    this.googleMap = new GoogleMap(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
        mapId: "DEMO_MAP_ID",
      }
    );
  }

  public async addMarker(position: Location) {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    new AdvancedMarkerElement({
      map: this.googleMap,
      position,
    });
  }
}

export default Map;
