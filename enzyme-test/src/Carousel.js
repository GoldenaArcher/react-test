import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarouselSlide from './CarouselSlide';
import CarouselButton from './CarouselButton';

const Carousel = props => {
  const { slides, ...rest } = props;

  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevClick = () => {
    setSlideIndex((slideIndex + slides.length - 1) % slides.length);
  };

  const handleNextClick = () => {
    setSlideIndex((slides.length + 1) % slides.length);
  };

  return (
    <div {...rest}>
      <CarouselSlide {...slides[slideIndex]} />
      <CarouselButton data-action="prev" onClick={handlePrevClick}>
        Prev
      </CarouselButton>
      <CarouselButton data-action="next" onClick={handleNextClick}>
        Next
      </CarouselButton>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes)).isRequired
};

export default Carousel;
