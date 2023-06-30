import styled from "styled-components";
import { Box } from "@mui/material";
import imgIconGoogle from "../../assets/images/icon/GooglePlay.svg";
import imgIconApple from "../../assets/images/icon/Apple.svg";

const ComingSoon = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Coming Soon
      </TextSubject>
      <SectionComingSoon>
        <SectionButtonAPP data-aos="fade-right" data-aos-duration="1000">
          <SectionAppIcon>
            <img src={imgIconGoogle} width={"100%"} alt="" />
          </SectionAppIcon>
          <SectionTextGroup>
            <TextUp>GET IT ON</TextUp>
            <TextDown>Google Play</TextDown>
          </SectionTextGroup>
        </SectionButtonAPP>
        <SectionButtonAPP data-aos="fade-left" data-aos-duration="1000">
          <SectionAppIcon>
            <img src={imgIconApple} width={"100%"} alt="" />
          </SectionAppIcon>
          <SectionTextGroup>
            <TextUp>Download on the</TextUp>
            <TextDown>App Store</TextDown>
          </SectionTextGroup>
        </SectionButtonAPP>
      </SectionComingSoon>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 180px;
  }
  @media (max-width: 1024px) {
    margin-top: 160px;
  }
  @media (max-width: 768px) {
    margin-top: 150px;
  }
  @media (max-width: 500px) {
    margin-top: 120px;
  }
  @media (max-width: 390px) {
    margin-top: 100px;
  }
  @media (max-width: 350px) {
    margin-top: 80px;
  }
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  /* line-height: 110px; */
`;

const SectionComingSoon = styled(Box)`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 80px;
  }
  @media (max-width: 1024px) {
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
  }
  @media (max-width: 390px) {
    grid-row-gap: 16px;
    margin-top: 40px;
  }
  @media (max-width: 350px) {
    margin-top: 30px;
  }
`;

const SectionButtonAPP = styled(Box)`
  display: flex;
  align-items: center;
  width: 410px;
  height: 120px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;
  background: #000;
  padding: 0px 30px;
  box-sizing: border-box;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px white;
  }

  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 1440px) {
    width: 340px;
    height: 100px;
    padding: 0px 25px;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 70px;
    padding: 0px 18px;
  }
`;

const SectionAppIcon = styled(Box)`
  display: flex;
  width: 55px;
  margin-right: 15px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 45px;
    margin-right: 12px;
  }
  @media (max-width: 768px) {
    width: 32px;
    margin-right: 10px;
  }
`;

const SectionTextGroup = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextUp = styled(Box)`
  color: #fff;
  font-size: 24px;
  font-family: "Segoe UI";
  letter-spacing: 1px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TextDown = styled(Box)`
  color: #fff;
  font-size: 38px;
  font-weight: 500;
  font-family: "Segoe UI";
  letter-spacing: 3px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default ComingSoon;
