import React from 'react';
import { shallow } from 'enzyme';
import LocationDetails from './LocationDetails';

const locationDetails = {
  name: 'dummyName',
  type: 'dummyType',
  population: '90',
  wealth: '44',
  authority: 'sheriff',
  numGuards: '50',
  position: '184738'
}
const props = { locationDetails }

describe('LocationDetails component', () => {

  let wrapper;
  let component;

  beforeAll(() => {
    wrapper = shallow(<LocationDetails {...props} />);
  });

  it('renders all details', () => {
    component = wrapper.find('dd');
    [...Array(7).keys()].forEach(index => {
      expect(component.at(index)).toHaveText(locationDetails[Object.keys(locationDetails)[index]]);
    });
  });
});