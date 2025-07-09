import { Outlet } from "react-router-dom";
import MainHeader from "../components/headerFile/mainHeader";
import Home from "../components/home/home";
import { Service } from "../components/service/service";
import Footer from "../components/footerFile/footer";
import { About } from "../components/about/about";
import { Advantages } from "../components/advantages/advantages";
import ShippingSlider from "../components/swiper/swiper";
import Page from "../components/page/page";
import Text from "../components/text/text";
import Swiper2 from "../components/swiper/swiper2";
import Info from "../components/info/info";
import Brand from "../components/brand/brand";
import Section from "../components/textish/textish";
import Contact from "../components/contact/contact";
import Karta from "../components/karta/karta";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <Home />
      <Service />
      <About />
      <Advantages />
      <ShippingSlider />
      {/* <Page /> */}
      <Text />
      <Swiper2 />
      <Info />
      <Brand />
      <Section />
      <Contact />
      <Karta />
      <Footer />
    </div>
  );
};

export default MainLayout;
