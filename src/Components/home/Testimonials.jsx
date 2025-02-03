import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import SectionHeading from "./SectionHeading";
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    details: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The design is elegant and captures attention effortlessly.",
    name: "Jane Doe",
    rating: 4,
  },
  {
    id: 2,
    details: "This is another testimonial. The product is amazing and I highly recommend it to everyone! The ease of use, combined with exceptional functionality, makes it a standout in its category. I'm incredibly satisfied with my purchase and I couldn't be happier with the overall experience.",
    name: "John Smith",
    rating: 5,
  },
  {
    id: 3,
    details: "I was skeptical at first, but this product exceeded my expectations. Great job! The attention to detail in both design and functionality is remarkable. It has proven to be reliable, and I can confidently say that it’s worth every penny. I’ll definitely be recommending this to others.",
    name: "Alice Johnson",
    rating: 5,
  },
  {
    id: 4,
    details: "Fantastic service and excellent quality. I will definitely be a returning customer. The team went above and beyond to ensure everything met my expectations. From start to finish, the entire process was seamless, and the product itself exceeded my expectations in terms of quality and durability.",
    name: "Bob Brown",
    rating: 4,
  },
  {
    id: 5,
    details: "Absolutely love this product! It has made my life so much easier. The intuitive design and exceptional performance make it a joy to use daily. It's rare to find something that consistently delivers on its promises, but this product does just that. Highly recommended for anyone looking for top quality.",
    name: "Eva Green",
    rating: 5,
  },
];


const Testimonials = () => {

const [reviews, setReviews] = useState([]);

useEffect(()=>{
  fetch('data/reviews.json')
  .then(res=>res.json())
  .then(data=>setReviews(data))
}, [])

  return (
    <div className="w-[1320px] mx-auto flex flex-col items-center mb-[130px]">
      <SectionHeading heading="Testimonials" title="What Our Client Say" />
      <Slider array={reviews} />
    </div>
  );
};

export default Testimonials;

const Slider = ({ array }) => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiper w-full">
      {
        array.map((critic) =>
          <SwiperSlide key={critic.id}>
            <div className='flex flex-col items-center'>
              <section className="flex gap-[5px] items-center justify-center mx-auto">
                {
                  Array(critic.rating).fill().map((index) =>
                    <img src="assets/icons/filled_star.png" key={index} />
                  )
                }
                {
                  Array(5 - critic.rating).fill().map((index) =>
                    <img src="assets/icons/empty_star.png" key={index} />
                  )
                }
              </section>
              <img className="mt-12 mb-10" src="assets/icons/quote-left 1.png" />
              <p className="w-[1096px] text-center text-[#444444] text-xl font-normal font-['Inter'] leading-[35px] mb-2">{critic.details}</p>
              <div className="text-center text-[#cd9002] text-[32px] font-medium font-['Inter'] uppercase">{critic.name}</div>
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}