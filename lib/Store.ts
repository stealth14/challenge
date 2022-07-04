import { getRandomLocation } from "./utilities";

import { LocationObject } from "expo-location";

const stores = [
  {
    id: "1",
    latitude: 41.3997999,
    longitude: 2.1909796,
    color: "#2F3136",
    name: "Reboot Studio",
    direction: "Carrer de Pujades, 100",
    distance: 3,
    schedule: "24 horas",
  },
  {
    id: "2",
    latitude: 41.3995445,
    longitude: 2.1915268,
    color: "#A3EAD8",
    name: "Cravy",
    direction: "Carrer de Pujades, 101",
    distance: 3,
    schedule: "24 horas",
  },
  {
    id: "3",
    latitude: 41.4009999,
    longitude: 2.1919999,
    color: "#E990BB",
    name: "Dribbble",
    direction: "Carrer de Pujades, 102",
    distance: 3,
    schedule: "24 horas",
  },
  {
    id: "4",
    latitude: 41.4001999,
    longitude: 2.1900096,
    color: "#EFD080",
    name: "Basecamp",
    direction: "Carrer de Pujades, 103",
    schedule: "24 horas",
  },
  {
    id: "5",
    latitude: 41.40009,
    longitude: 2.1909796,
    color: "#98AFE9",
    name: "Discord",
    direction: "Carrer de Pujades, 104",
    distance: 3,
    schedule: "24 horas",
  },
];
export default class Store {
  id: string;
  latitude: number;
  longitude: number;
  color: string;
  name: string;
  direction: string;
  distance: number;
  schedule: string;

  constructor(
    id: string,
    latitude: number,
    longitude: number,
    color: string,
    name: string,
    direction: string,
    distance: number,
    schedule: string
  ) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.color = color;
    this.name = name;
    this.direction = direction;
    this.distance = distance;
    this.schedule = schedule;
  }

  static get(location: LocationObject): Store[] {
    const storesNearby = stores.map((store) => {
      const { latitude, longitude } = location.coords;

      const [nLat, nLng] = getRandomLocation(latitude, longitude, 100);

      return { ...store, latitude: nLat, longitude: nLng } as Store;
    });

    return storesNearby;
  }
}
