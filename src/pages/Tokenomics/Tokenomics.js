import styled from "styled-components";
import { Box } from "@mui/material";
import imgTokenomics from "../../assets/images/background/backTokenomics.svg";

const Tokenomics = () => {
  return (
    <StyledComponent>
      <TextSubject>Tokenomics</TextSubject>
      <ImageBackground>
        <img src={imgTokenomics} width={"100%"} alt="" />
        <SectionReward>Game Reward: 30%</SectionReward>
        <SectionSupply>Circulating Supply: 25%</SectionSupply>
        <SectionLiquidity>Liquidity Pool: 14%</SectionLiquidity>
        <SectionFarming>Farming: 11%</SectionFarming>
        <SectionEcosystem>Ecosystem: 20%</SectionEcosystem>
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
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 110px;
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
  top: 150px;
  transform: translateX(-50%);
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
  top: 370px;
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
  top: 370px;
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

  right:63%;
  top: 630px;
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

  left:63%;
  top: 630px;
`;

export default Tokenomics;
