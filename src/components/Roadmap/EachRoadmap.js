import styled from "styled-components";
import { Box } from "@mui/material";

const SectionEachRoadMap = ({ data, flagDirect }) => {
  return (
    <StyledComponent>
      <SectionContent>
        <SectionIcon flag={data.flagDone ? 1 : 0}>
          {data.icon}
          {flagDirect ? (
            <SectionDirect flag={data.flagDone ? 1 : 0}></SectionDirect>
          ) : (
            <></>
          )}
          <TextTitle>{data.title}</TextTitle>
        </SectionIcon>
        <SectionTextContent>
          {data.content.map((each, index) => {
            return (
              <SectionEachTextContent key={index}>
                <SectionPoint></SectionPoint>
                <TextEachContent>{each}</TextEachContent>
              </SectionEachTextContent>
            );
          })}
        </SectionTextContent>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  margin-bottom: 140px;
  margin-left: 200px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-bottom: 120px;
    margin-left: 100px;
  }

  @media (max-width: 768px) {
    margin-bottom: 110px;
  }
  @media (max-width: 500px) {
    margin-bottom: 95px;
    margin-left: 50px;
  }
  @media (max-width: 390px) {
    margin-bottom: 85px;
    margin-left: 50px;
  }
  @media (max-width: 350px) {
    margin-left: 30px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextTitle = styled(Box)`
  display: flex;
  position: absolute;
  color: #fff;
  /* text-align: right; */
  font-size: 30px;
  font-family: Rowdies;
  text-wrap: nowrap;
  top: 50%;
  transform: translateY(-50%);
  right: 180px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    font-size: 25px;
    right: 130px;
  }

  @media (max-width: 700px) {
    text-wrap: balance;
    font-size: 20px;
  }

  @media (max-width: 500px) {
    right: 100px;
  }
  @media (max-width: 390px) {
    right: 80px;
  }
`;

const SectionIcon = styled(Box)`
  display: flex;
  position: relative;
  width: 120px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: ${({ flag }) => (flag ? "4px solid #0cff50 " : "4px solid white")};
  background: ${({ flag }) => (flag ? "#0cff50" : "rgba(0,0,0,0)")};
  color: ${({ flag }) => (flag ? "black" : "white")};
  font-size: 3.5rem;
  margin: 0px 60px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    width: 100px;
    margin: 0px 50px;
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    width: 90px;
    margin: 0px 40px;
    font-size: 3rem;
  }
  @media (max-width: 500px) {
    width: 80px;
    margin: 0px 30px;
    font-size: 2.5rem;
  }
  @media (max-width: 390px) {
    font-size: 2rem;
    width: 70px;
    margin: 0px 20px;
  }
  @media (max-width: 350px) {
    margin-top: 60px;
  }
`;

const SectionTextContent = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

const SectionEachTextContent = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionPoint = styled(Box)`
  width: 10px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: white;
  margin-right: 20px;
`;

const TextEachContent = styled(Box)`
  color: #fff;
  font-size: 2.5em;
  font-family: Lato;
  line-height: 40px;
`;

const SectionDirect = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  height: 300px;
  border: ${({ flag }) => (flag ? "2px dashed #0CFF50 " : "2px dashed white")};
`;

export default SectionEachRoadMap;
