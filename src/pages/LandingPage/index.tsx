import Header from "../../components/Header";
import { StyledBackGround } from "./styles";
import Footer from "../../components/Footer";
import TopSection from "./TopSection";
import TopMainSectionContent from "./TopMainSectionContent";
import BottonSection from "./BottonSection";
import InfoCardsSection from "./InfoCardsSection";

const LandingPage = () => {
  return (
    <StyledBackGround>
      <div>
        <Header />
        <TopSection />
      </div>
      <main>
        <section>
          <TopMainSectionContent />
        </section>
        <InfoCardsSection />
        <BottonSection />
      </main>
      <Footer />
    </StyledBackGround>
  );
};

export default LandingPage;
