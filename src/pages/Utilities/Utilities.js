import styled from "styled-components";
import { Box } from "@mui/material";
import { dataUtilities } from "../../data/Utility";
import CardUtility from "../../components/Card/CardUtility";

const Utilities = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Utilities
      </TextSubject>
      <SectionCard>
        {dataUtilities?.map((each, index) => {
          return <CardUtility data={each} key={index} />;
        })}
      </SectionCard>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0px 120px;
  box-sizing: border-box;
  margin-top: 200px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 180px;
    padding: 0px 90px;
  }
  @media (max-width: 1024px) {
    padding: 0px 60px;
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    padding: 0px 40px;
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
  @media (max-width: 390px) {
    padding: 0px 20px;
    margin-top: 80px;
  }
  @media (max-width: 350px) {
    padding: 0px 10px;
    margin-top: 60px;
  }
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  /* line-height: 110px; */
`;

const SectionCard = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  margin-top: 60px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    grid-column-gap: 50px;
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
    grid-column-gap: 40px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export default Utilities;
