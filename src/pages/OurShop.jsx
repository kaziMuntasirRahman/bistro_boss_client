import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import PageCover from "../Components/shared/PageCover";
import useMenu from "../hooks/useMenu";
import Cart from "../Components/shop/ShopCart";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const categories = [
  {
    "index": 0,
    "name": "Salad",
    "category": "salad"
  },
  {
    "index": 1,
    "name": "Pizza",
    "category": "pizza"
  },
  {
    "index": 2,
    "name": "Soups",
    "category": "soup"
  },
  {
    "index": 3,
    "name": "Desserts",
    "category": "dessert"
  },
  {
    "index": 4,
    "name": "Drinks",
    "category": "drinks"
  },
  {
    "index": 5,
    "name": "Popular",
    "category": "popular"
  },
  {
    "index": 6,
    "name": "Offered",
    "category": "offered"
  }
]

const OurShop = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState(0)
  const [menu, loading] = useMenu()
  const [currentMenu, setCurrentMenu] = useState(menu.filter(item => item.category === categories[tab].category))

  const itemsPerPage = 6;

  useEffect(() => {
    if (!category) {
      navigate(`/shop/${categories[0].category}`);
    }
  }, [category, navigate]);

  useEffect(() => {
    setCurrentMenu(menu.filter(item => item.category === categories[tab].category))
  }, [tab, menu])

  const renderSlides = () => {
    let slides = [];
    const menuLength = currentMenu.length;
    for (let i = 0; i < menuLength; i += itemsPerPage) {
      slides.push(
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-6 px-[300px] pt-14 pb-9">
            {
              currentMenu.slice(i, i + itemsPerPage).map(item =>
                <Cart key={item._id} img={item.image} name={item.name} recipe={item.recipe} price={item.price} />
              )
            }
          </div>
        </SwiperSlide>
      )
    }
    return slides;
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>{"Shop | " + categories[tab].name}</title>
      </Helmet>
      <PageCover
        img="/assets/shop/banner2.jpg"
        head="Our Shop"
        subHead="Would you like to try a dish?"
      />
      {/* tabs */}
      <div role="tablist" className="flex justify-center items-start my-10 gap-14 mx-auto tabs">
        {
          categories.map((category, index) =>
            <a
              key={index}
              role="tab"
              onClick={() => setTab(category.index)}
              className={`tab ${tab === category.index ? "tab-active" : ""} transition duration-150 min-h-max`}>
              {category.name}
            </a>
          )
        }
      </div>
      <p className="text-center">Total item in the {categories[tab].name} category: {currentMenu.length}</p>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper text-center"
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
};

export default OurShop;


