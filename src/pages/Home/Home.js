import styled from "styled-components";
import { Box } from "@mui/material";
import imgHomeBack from "../../assets/images/background/imgHomewithBee.svg";
import imgButtonWide from "../../assets/images/button/wide.png";

const Home = () => {
  return (
    <StyledComponent>
      <SectionImageHome>
        <img src={imgHomeBack} width={"100%"} alt="" />
        <TextTitle>Flappy Bee</TextTitle>
        <SectionButtonPlay>
          <ButtonPlay>Play</ButtonPlay>
        </SectionButtonPlay>
      </SectionImageHome>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionImageHome = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
`;

const TextTitle = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 35px;
  transform: translateX(-50%);

  color: #a9d100;
  text-align: center;
  font-size: 13em;
  font-family: Rowdies;
  line-height: 152.971px;
  -webkit-text-stroke: 3px #003d28;
  text-shadow: 10px 7px 0px #003d28;
`;

const SectionButtonPlay = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);
`;

const ButtonPlay = styled(Box)`
  display: flex;
  width: 450px;
  height: 125px;
  align-items: center;
  justify-content: center;
  background-image: url(${imgButtonWide});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  color: #511900;
  text-align: center;
  font-size: 7em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 90px;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default Home;
