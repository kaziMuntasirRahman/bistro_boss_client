// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionHeading from './SectionHeading';

const images = [
  {
    link: "assets/home/slide1.jpg",
    text: "Salad"
  },
  {
    link: "assets/home/slide2.jpg",
    text: "Pizza"
  },
  {
    link: "assets/home/slide3.jpg",
    text: "Soup"
  },
  {
    link: "assets/home/slide4.jpg",
    text: "Cake"
  },
  {
    link: "assets/home/slide5.jpg",
    text: "Desert"
  }
];


const CategorySwiperJs = () => {
  return (
    <div className='my-20'>
      <SectionHeading
        title="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[1320px] mx-auto"
      >
        {
          images.map((image, index) =>
            <SwiperSlide>
              <div className='w-[312px] h-[500px]'>
                <div className='relative'>
                  <img className="w-full h-[450px]" src={image.link} key={index} alt={"Slide " + index + 1} />
                  <h1 className="text-white text-[32px] font-normal font-['Cinzel'] absolute left-1/2 -translate-x-1/2 bottom-6 ">{image.text}</h1>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default CategorySwiperJs;