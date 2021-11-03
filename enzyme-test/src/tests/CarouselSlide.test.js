import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';
import styled from 'styled-components';

describe('CarouselSlide', () => {
  let wrapper, styledImage;
  const imgUrl = 'https://example.com/image.png';

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide imgUrl={imgUrl} description="Default test image" />
    );
    styledImage = styled.img;
  });

  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure');
  });

  it('renders an <img> and a <figcaption> as children', () => {
    // expect(wrapper.childAt(0).type()).toBeInstanceOf(styledImage);
    expect(wrapper.childAt(1).type()).toBe('figcaption');
  });

  it('pases `imgUrl` through to the <img>', () => {
    // wrapper.setProps({ imgUrl });

    // const img = wrapper.find(styledImage);
    // expect(img.prop('src')).toBe(imgUrl);
  });

  it('uses `description` and `attribution` as the <figcaption>', () => {
    const description = 'A jaw-droppingly spectacular image';
    const attribution = 'Trevor Burnham';

    wrapper.setProps({ description, attribution });
    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find('figcaption strong').text()).toBe(description);
  });

  it('passes other props through to the <figure>', () => {
    const style = {};
    const onClick = () => {};
    const className = 'my-carousel-slide';
    wrapper.setProps({ style, onClick, className });

    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
  });
});
