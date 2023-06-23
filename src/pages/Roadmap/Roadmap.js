import styled from "styled-components";
import { Box } from "@mui/material";

const Roadmap = () => {
  return (
    <StyledComponent>
      <TextSubject>Roadmap</TextSubject>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 110px;
`;

export default Roadmap;
