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
import { useState } from "react";
import NFTs from "./pages/NFTs/NFTs";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  useEffect(() => {
    console.log(isLoading);
    someRequest().then(() => {
      const loaderElement = document.querySelector(".content_ring");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

  return (
    <StyledComponent>
      <Home />
      <AboutUs />
      <Utilities />
      <NFTs />
      <Tokenomics />
      <Roadmap />
      <ComingSoon />
      <Footer />
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
