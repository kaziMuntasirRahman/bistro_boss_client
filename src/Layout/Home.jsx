import Banner from "../Components/home/Banner";
import CallUs from "../Components/home/CallUs";
import CategorySwiper from "../Components/home/CategorySwiper";
import CategorySwiperJs from "../Components/home/CategorySwiperJs";
import ChefRecommends from "../Components/home/ChefRecommends";
import HomeBanner from "../Components/home/HomeBanner";
import ReactSliderBanner from "../Components/home/ReactSliderBanner";

const Home = () => {
  return (
    <div>
      {/* <HomeBanner /> */}
      <ReactSliderBanner />
      {/* <CategorySwiper /> */}
      <CategorySwiperJs />
      <Banner />
      <CallUs />
      <ChefRecommends />
    </div>
  );
};

export default Home;