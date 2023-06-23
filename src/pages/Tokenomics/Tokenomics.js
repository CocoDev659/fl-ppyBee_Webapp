import styled from "styled-components";
import { Box } from "@mui/material";
import imgTokenomics from "../../assets/images/background/backTokenomics.svg";

const Tokenomics = () => {
  return (
    <StyledComponent>
      <TextSubject>Tokenomics</TextSubject>
      <ImageBackground>
        <img src={imgTokenomics} width={"100%"} alt="" />
      </ImageBackground>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  background-image: linear-gradient(
    to bottom,
    rgba(1, 73, 48, 0),
    rgba(1, 73, 48, 1)
  );
  padding-bottom: 120px;
  box-sizing: border-box;
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 110px;
`;

const ImageBackground = styled(Box)`
  display: flex;
  width: 100%;
`;

export default Tokenomics;
