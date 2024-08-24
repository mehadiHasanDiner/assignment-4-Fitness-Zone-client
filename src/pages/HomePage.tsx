import Banner from "../components/ui/homepage/Banner/Banner";
import FeaturedProduct from "../components/ui/homepage/FeaturedProduct";
import Gallery from "../components/ui/homepage/Gallery";
import OurBenefits from "../components/ui/homepage/OurBenefits";
import ProductByCategory from "../components/ui/homepage/ProductByCategory";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <Banner></Banner>
      <ProductByCategory></ProductByCategory>
      <FeaturedProduct></FeaturedProduct>
      <OurBenefits></OurBenefits>
      <Gallery></Gallery>
      
    </div>
  );
};

export default HomePage;
