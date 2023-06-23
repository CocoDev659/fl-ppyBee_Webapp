import styled from "styled-components";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <StyledComponent>
      <TextTitle>Flappy Bee</TextTitle>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 120px 100px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 94.459px;
  -webkit-text-stroke: 3px #003d28;
  text-shadow: 5px 5px 0px rgb(0 115 75);
`;

export default Footer;
