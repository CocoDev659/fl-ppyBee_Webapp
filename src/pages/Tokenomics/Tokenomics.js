import styled from "styled-components";
import { Box } from "@mui/material";
import imgTokenomics from "../../assets/images/background/backTokenomics.svg";

const Tokenomics = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Tokenomics
      </TextSubject>
      <ImageBackground data-aos="fade-up" data-aos-duration="2000">
        <img src={imgTokenomics} width={"100%"} alt="" />
        <SectionReward>Fair-Launch: 30%</SectionReward>
        <SectionSupply>Game Reward: 25%</SectionSupply>
        <SectionLiquidity>Liquidity Pool: 16%</SectionLiquidity>
        <SectionFarming>Farming: 15%</SectionFarming>
        <SectionEcosystem>Ecosystem: 14%</SectionEcosystem>
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

  transition: 0.3s;
  @media (max-width: 1600px) {
    margin-top: 180px;
  }
  @media (max-width: 1440px) {
    margin-top: 160px;
  }
  @media (max-width: 1024px) {
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

const ImageBackground = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
`;

const SectionReward = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 120px;
  border-radius: 12px;
  border: 2px solid #95b2a8;
  background: rgba(7, 49, 34, 0.7);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;

  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px white;
  }

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 600px;
    height: 100px;
  }
  @media (max-width: 1440px) {
    width: 530px;
    height: 90px;
  }
  @media (max-width: 1024px) {
    width: 400px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 290px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 230px;
    height: 40px;
  }
  @media (max-width: 390px) {
    width: 150px;
    height: 30px;
    top: 8%;
  }
  @media (max-width: 350px) {
    width: 120px;
    height: 20px;
  }
`;

const SectionSupply = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 120px;
  border-radius: 12px;
  border: 2px solid #95b2a8;
  background: rgba(7, 49, 34, 0.7);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;

  right: 60%;
  top: 32%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px white;
  }

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 450px; 
    height: 100px;
  }
  @media (max-width: 1440px) {
    width: 420px;
    height: 90px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 230px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 180px;
    height: 40px;
  }
  @media (max-width: 390px) {
    width: 130px;
    height: 30px;
  }
  @media (max-width: 350px) {
    width: 110px;
    height: 20px;
  }
`;

const SectionLiquidity = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 120px;
  border-radius: 12px;
  border: 2px solid #95b2a8;
  background: rgba(7, 49, 34, 0.7);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;
  left: 60%;
  top: 32%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px white;
  }

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 450px;
    height: 100px;
  }
  @media (max-width: 1440px) {
    width: 420px;
    height: 90px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 230px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 180px;
    height: 40px;
  }
  @media (max-width: 390px) {
    width: 130px;
    height: 30px;
  }
  @media (max-width: 350px) {
    width: 110px;
    height: 20px;
  }
`;

const SectionFarming = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 120px;
  border-radius: 12px;
  border: 2px solid #95b2a8;
  background: rgba(7, 49, 34, 0.7);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;

  right: 63%;
  top: 55%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px white;
  }

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 450px;
    height: 100px;
  }
  @media (max-width: 1440px) {
    width: 375px;
    height: 90px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 40px;
  }
  @media (max-width: 390px) {
    width: 120px;
    height: 30px;
    top:53%;
  }
  @media (max-width: 350px) {
    width: 100px;
    height: 20px;
  }
`;

const SectionEcosystem = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 120px;
  border-radius: 12px;
  border: 2px solid #95b2a8;
  background: rgba(7, 49, 34, 0.7);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;

  left: 63%;
  top: 55%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px white;
  }

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 450px;
    height: 100px;
  }
  @media (max-width: 1440px) {
    width: 375px;
    height: 90px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 70px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 40px;
  }
  @media (max-width: 390px) {
    width: 120px;
    height: 30px;
    top: 53%;
  }
  @media (max-width: 350px) {
    width: 100px;
    height: 20px;
  }
`;

export default Tokenomics;
