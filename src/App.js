import styled from "styled-components";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Utilities from "./pages/Utilities/Utilities";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import Roadmap from "./pages/Roadmap/Roadmap";
import Footer from "./layout/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <StyledComponent>
      <Home />
      {/* <AboutUs /> */}
      <Utilities />
      <Tokenomics />
      <Roadmap />
      <ComingSoon />
      <Footer />
    </StyledComponent>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #003d28;
`;

export default App;
