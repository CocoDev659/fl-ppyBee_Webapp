import styled from "styled-components";
import { Box } from "@mui/material";

const SectionEachRoadMap = ({ data, flagDirect }) => {
  return (
    <StyledComponent>
      <SectionContent>
        <TextTitle>{data.title}</TextTitle>
        <SectionIcon flag={data.flagDone ? 1 : 0}>
          {data.icon}
          {flagDirect ? (
            <SectionDirect flag={data.flagDone ? 1 : 0}></SectionDirect>
          ) : (
            <></>
          )}
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
  flex-direction: column;
  margin-bottom: 140px;
`;

const SectionContent = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: right;
  font-size: 3em;
  font-family: Rowdies;
  line-height: 40px;
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
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;
`;

const SectionDirect = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  height: 200px;
  border: ${({ flag }) => (flag ? "2px dashed #0CFF50 " : "2px dashed white")};
`;

export default SectionEachRoadMap;
