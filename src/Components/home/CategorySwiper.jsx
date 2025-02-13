import { Carousel } from "react-responsive-carousel";

const images = [
  {
    link: "/assets/home/slide1.jpg",
    text: "Salad"
  },
  {
    link: "/assets/home/slide2.jpg",
    text: "Pizza"
  },
  {
    link: "/assets/home/slide3.jpg",
    text: "Soup"
  },
  {
    link: "/assets/home/slide4.jpg",
    text: "Cake"
  },
  {
    link: "/assets/home/slide5.jpg",
    text: "Curry"
  }
];


const CategorySwiper = () => {

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
    <div className="my-20">
      <section className="w-full flex flex-col items-center mb-12">
        <div className="text-center text-[#d99904] text-xl font-normal font-['Inter']">---From 11:00am to 10:00pm---</div>
        <div className="w-[424px] h-1 bg-[#e8e8e8]" />
        <div className="text-center text-[#151515] text-[40px] font-normal font-['Inter']">ORDER ONLINE</div>
        <div className="w-[424px] h-1 bg-[#e8e8e8]" />
      </section>
      <Carousel
        className="w-min mx-auto"
        showArrows={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
        autoPlay={false}
        centerMode={true}
        centerSlidePercentage={25}
        emulateTouch={true}
        // infiniteLoop={true}
        interval={5000}
        // selectedItem={1}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        // stopOnHover={true}
        swipeable={true}
        thumbWidth={80}
        transitionTime={600}
        useKeyboardArrows={true}
        width={312}

      >
        {
          images.map((image, index) =>
            <div>
              <img className="h-[450px]" src={image.link} key={index} alt={"Slide " + index + 1} />
              {/* <p className="legend">{image.text}</p> */}
            </div>
          )
        }
      </Carousel>
    </div>
  );
};

export default CategorySwiper;