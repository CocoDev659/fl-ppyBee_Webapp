import styled from "styled-components";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Utilities from "./pages/Utilities/Utilities";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import Roadmap from "./pages/Roadmap/Roadmap";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <StyledComponent>
      <Home />
      <AboutUs />
      <Utilities />
      <Tokenomics />
      <Roadmap />
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
