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
import { Suspense } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <StyledComponent>
      <Suspense fallback={<Loading />}>
        <Home />
        <AboutUs />
        <Utilities />
        <Tokenomics />
        <Roadmap />
        <ComingSoon />
        <Footer />
      </Suspense>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #003d28;
  overflow: hidden;
`;

export default App;
