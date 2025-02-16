import { Helmet } from "react-helmet-async";
import Banner from "../../Components/home/Banner";
import CallUs from "../../Components/home/CallUs";
import CategorySwiperJs from "../../Components/home/CategorySwiperJs";
import ChefRecommends from "../../Components/home/ChefRecommends";
import FromMenu from "../../Components/home/FromMenu";
import MenuBanner from "../../Components/home/MenuBanner";
import ReactSliderBanner from "../../Components/home/ReactSliderBanner";
import Testimonials from "../../Components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        {/* <link rel="canonical" href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" /> */}
      </Helmet>
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