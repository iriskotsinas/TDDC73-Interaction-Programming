import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Carousel from '../components/Carousel';

configure({adapter: new Adapter()});

const onPressMock = jest.fn();

const items = [
  {
    title: 'Fight Club',
    year: '1999',
    poster:
      'MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX290_CR0,0,290,429_AL_.jpg',
    rating: '8.8',
    posterurl:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    poster:
      'MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    rating: '9.0',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
  },
];

describe('<Carousel />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Carousel onPress={() => {}} itemsPerSlide={2} items={items} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with default settings', (): void => {
    const wrapper = shallow(
      <Carousel onPress={() => {}} itemsPerSlide={2} items={items} />,
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all items in items', async () => {
    const wrapper = shallow(
      <Carousel onPress={() => {}} itemsPerSlide={2} items={items} />,
    );

    // Two items rendered
    const carousel = wrapper.find({testID: 'film'});
    expect(carousel.length).toBe(items.length);
  });

  it('should render correct titles', () => {
    const wrapper = shallow(
      <Carousel onPress={() => {}} itemsPerSlide={2} items={items} />,
    );

    wrapper.find({testID: 'film'}).forEach((node, index) => {
      expect(node.props().children).toBe(items[index].title);
    });
  });

  it('shows rating after film poster is pressed', async () => {
    let inst = renderer.create(
      <Carousel onPress={() => {}} itemsPerSlide={2} items={items} />,
    );

    await waitFor(() => {
      const button = inst.root.findAllByType(TouchableOpacity)[0];
      const text = inst.root.findAllByType(Text)[1];

      button.props.onPress();

      expect(text.props.children).toBe('IMDB-rating: ' + items[0].rating);
      // expect(button.props.children)
    });
  });

  it('shows same amount of film posters as items in the list', async () => {
    onPressMock.mockReturnValue(false);
    let inst = renderer.create(
      <Carousel onPress={() => {}} itemsPerSlide={2} items={items} />,
    );

    const sizeItems = inst.root.findAllByType(Image);
    expect(sizeItems.length).toEqual(items.length);
  });
  
});
