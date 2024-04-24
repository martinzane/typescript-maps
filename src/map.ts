import { Location } from "./types";

export interface Mappable {
  location: Location;
  markerContent(): string;
}

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

  public async addMarker(mappable: Mappable) {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: mappable.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default Map;
