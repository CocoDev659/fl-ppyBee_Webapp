import styled from "styled-components";
import { Box } from "@mui/material";
import { dataRoadmap } from "../../data/Roadmap";
import SectionEachRoadMap from "../../components/Roadmap/EachRoadmap";

const Roadmap = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Roadmap
      </TextSubject>
      <SectionRoadmap data-aos="fade-up" data-aos-duration="2000">
        {dataRoadmap?.map((each, index) => {
          return (
            <SectionEachRoadMap
              data={each}
              key={index}
              flagDirect={dataRoadmap.length - 1 === index ? false : true}
            />
          );
        })}
      </SectionRoadmap>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 120px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 90px;
  }
  @media (max-width: 390px) {
    margin-top: 80px;
  }
  @media (max-width: 350px) {
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

const SectionRoadmap = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 90px;
  }
  @media (max-width: 768px) {
    margin-top: 90px;
  }
  @media (max-width: 500px) {
    margin-top: 60px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
  }
  @media (max-width: 350px) {
    margin-top: 40px;
  }
`;

export default Roadmap;
