import styled from "styled-components";
import { Box } from "@mui/material";

const CardUtility = ({ data }) => {
  return (
    <StyledComponent data-aos="flip-left" data-aos-duration="1000">
      <SectionIcon>
        <img src={data.icon} alt="" />
      </SectionIcon>
      <TextSubject>{data.textSubject}</TextSubject>
      <TextContent>{data.textContent}</TextContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 40px 60px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #00583a;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.06);
  }
`;

const SectionIcon = styled(Box)`
  display: flex;
  width: 120px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: #008f5f;
  justify-content: center;
  align-items: center;
  > img {
    width: 70%;
  }
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 4em;
  font-family: Rowdies;
  font-weight: 700;
  line-height: 50px;
  margin-top: 40px;
`;

const TextContent = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 2.4em;
  font-family: Lato;
  line-height: 40px;
  margin-top: 20px;
`;

export default CardUtility;
