import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import PageCover from "../../Components/shared/PageCover"
import useMenu from "../../hooks/useMenu";
import Cart from "../../Components/shop/ShopCart";

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
  const [originPath, setOriginPath] = useState(useParams().category || categories[0].category);
  const navigate = useNavigate()
  const [menu, loading] = useMenu()
  const itemsPerPage = 6;
  const [currentMenu, setCurrentMenu] = useState(menu.filter(item => item.category === originPath))

  useEffect(() => {
    if (!originPath) {
      setOriginPath(categories[0].category)
      navigate(`/shop/${categories[0].category}`)
    } else {
      navigate(`/shop/${originPath}`)
    }
    setCurrentMenu(menu.filter(item => item.category === originPath))
  }, [menu]);

  const handleTabChange = (category) => {
    setOriginPath(category)
    setCurrentMenu(menu.filter(item => item.category === category))
    navigate(`/shop/${category}`)
  }

  const renderSlides = () => {
    let slides = [];
    const menuLength = currentMenu.length;
    for (let i = 0; i < menuLength; i += itemsPerPage) {
      slides.push(
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 max-w-fit  pt-14 pb-9  mx-auto">
            {
              currentMenu.slice(i, i + itemsPerPage).map(item =>
                <Cart key={item._id} item={item} />
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
        <title>{"Shop | " + categories.find(category=>category.category===originPath).name}</title>
      </Helmet>
      <PageCover
        img="/assets/shop/banner2.jpg"
        head="Our Shop"
        subHead="Would you like to try a dish?"
      />
      {/* tabs */}
      <div role="tablist" className="flex justify-center items-start my-10 gap-6 lg:gap-14 mx-auto tabs">
        {
          categories.map((category, index) =>
            <a
              key={index}
              role="tab"
              onClick={() => handleTabChange(category.category)}
              className={`tab ${category.category === originPath ? "tab-active" : ""} transition duration-150 min-h-max`}>
              {category.name}
            </a>
          )
        }
      </div>
      <p className="text-center">Total item in the {categories.find(category=>category.category===originPath).name} category: {currentMenu.length}</p>

        {/* items  */}
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper text-center my-6"
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
};

export default OurShop;