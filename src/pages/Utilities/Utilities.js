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
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 110px;
`;

const SectionCard = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  margin-top: 60px;
`;

export default Utilities;
