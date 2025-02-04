import Banner from "../Components/home/Banner";
import CallUs from "../Components/home/CallUs";
import CategorySwiper from "../Components/home/CategorySwiper";
import CategorySwiperJs from "../Components/home/CategorySwiperJs";
import ChefRecommends from "../Components/home/ChefRecommends";
import FromMenu from "../Components/home/FromMenu";
import HomeBanner from "../Components/home/HomeBanner";
import MenuBanner from "../Components/home/MenuBanner";
import ReactSliderBanner from "../Components/home/ReactSliderBanner";
import Testimonials from "../Components/home/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <HomeBanner /> */}
      <ReactSliderBanner />
      {/* <CategorySwiper /> */}
      <CategorySwiperJs />
      <Banner />
      <FromMenu />
      <CallUs />
      <ChefRecommends />
      <MenuBanner />
      <Testimonials />
    </div>
  );
};

export default Home;