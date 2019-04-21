import mapData from '../Service/map-data.json';

export default class MapDataService {

  static get() {
    return Promise.resolve(mapData)
  }
}
