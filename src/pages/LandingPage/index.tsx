import Header from "../../components/Header";
import { StyledBackGround } from "./styles";
import Footer from "../../components/Footer";
import TopSection from "./TopSection";

const LandingPage = () => {
  return (
    <StyledBackGround>
      <div>
        <Header />
        <TopSection />
      </div>

      <Footer />
    </StyledBackGround>
  );
};

export default LandingPage;
