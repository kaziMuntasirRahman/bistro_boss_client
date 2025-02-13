import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import '../../ReactSliderBanner.css';

const images = [
  {
    link: "/assets/home/01.jpg",
    text: "Explore the Beauty of Nature"
  },
  {
    link: "/assets/home/02.jpg",
    text: "Discover New Horizons"
  },
  {
    link: "/assets/home/03.png",
    text: "Innovate with Technology"
  },
  {
    link: "/assets/home/04.jpg",
    text: "Experience Adventure"
  },
  {
    link: "/assets/home/05.png",
    text: "Unleash Your Creativity"
  },
  {
    link: "/assets/home/06.png",
    text: "Achieve Your Dreams"
  },
];

const ReactSliderBanner = () => {
  const onChange = (index) => {
    console.log(`Slide changed to ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Clicked on item ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumb ${index}`);
  };

  return (
    <Carousel
      showArrows={true}
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
      autoPlay={true}
      // centerMode={true}
      // centerSlidePercentage={95}
      emulateTouch={true}
      infiniteLoop={true}
      interval={5000}
      selectedItem={1}
      showStatus={false}
      showIndicators={true}
      showThumbs={true}
      // stopOnHover={true}
      swipeable={true}
      thumbWidth={80}
      transitionTime={1200}
      useKeyboardArrows={true}
    >
      {
        images.map((image, index) =>
          <div>
            <img src={image.link} key={index} alt={"Slide " + index + 1} />
            {/* <p className="legend">{image.text}</p> */}
          </div>
        )
      }
    </Carousel>
  );
};

export default ReactSliderBanner;