import backgroundMap from '../Service/background-map.jpg';

export default class BackgroundMapService {

  static get() {
    return Promise.resolve(backgroundMap)
  }
}