import React from 'react';
import Map from "./Map";
import { shallow } from 'enzyme';

import BackgroundMapService from '../../Service/BackgroundMapService'
import MapDataService from '../../Service/MapDataService'
import LocationDetails from "./LocationDetails/LocationDetails";

describe('Map component', () => {

  const mockData = [
    { position: [10, 10] },
    { position: [20, 20] }
  ];
  let mockMapGet;
  let mockMapDataGet;
  let wrapper;
  let component;

  beforeAll(() => {
    jest.mock('../../Service/BackgroundMapService');
    mockMapGet = jest.fn();
    mockMapGet.mockResolvedValue('mapImg.jpg');
    BackgroundMapService.get = mockMapGet.bind(BackgroundMapService);

    jest.mock('../../Service/MapDataService');
    mockMapDataGet = jest.fn();
    mockMapDataGet.mockResolvedValue(mockData);
    MapDataService.get = mockMapDataGet.bind(MapDataService);

    wrapper = shallow(<Map />)
  });

  it('loads map image', () => {
    expect(mockMapGet.mock.calls.length).toBe(1)
  });

  it('loads map location data', () => {
    expect(mockMapDataGet.mock.calls.length).toBe(1)

  });

  it('renders the map', () => {
    component = wrapper.find('.background-map');
    expect(component).toExist();
    expect(component).toHaveProp('alt', 'Map');
    expect(component).toHaveProp('src', 'mapImg.jpg');
  });

  it('renders location markers', () => {
    component = wrapper.find('img.marker');
    expect(component.length).toBe(2)
  });

  it('opens location details component when a marker is clicked', () => {
    wrapper.find('img.marker').first().simulate('click');
    component = wrapper.find(LocationDetails);
    expect(component).toExist();
  });

  it('closes location details component when map is clicked', () => {
    wrapper.find('img.marker').first().simulate('click');
    wrapper.find('img.background-map').simulate('click');
    component = wrapper.find(LocationDetails);
    expect(component).not.toExist();
  });
});