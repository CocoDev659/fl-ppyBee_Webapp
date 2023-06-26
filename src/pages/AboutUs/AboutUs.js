import styled from "styled-components";
import { Box } from "@mui/material";
import imgBackSky from "../../assets/images/background/backSky.png";
import imgBee from "../../assets/images/icon/Bee01.png";

const AboutUs = () => {
  return (
    <StyledComponent>
      <SectionLeft data-aos="fade-right" data-aos-duration="2000">
        <TextAboutUs>About us</TextAboutUs>
        <TextDescriptionEach>
          Velociraptor Athena, the Lord of Memes, is not just an iconic symbol
          of prehistoric power and intelligence, but it also brings along a
          range of innovative features to the world of cryptocurrencies on
          ERC20.
        </TextDescriptionEach>
        <TextDescriptionEach>
          With its powerful combination of Staking, NFTs, and the Trading BOT,
          Velociraptor Athena offers a comprehensive suite of tools and features
          for cryptocurrency enthusiasts.
        </TextDescriptionEach>
        <TextDescriptionEach>
          Velociraptor Athena leverages its vast knowledge and unwavering
          strength to drive innovation and progress and empowers users to
          navigate the crypto landscape with confidence and success.
        </TextDescriptionEach>
        <TextDescriptionEach>
          CA: 0x68b3A846C00A3d97B5090B2Aefe62611A0B4A9f1
          <br />
          Contact: owner@veathena.xyz
        </TextDescriptionEach>
      </SectionLeft>
      <SectionRight data-aos="fade-left" data-aos-duration="2000">
        <SectionImageBee>
          <ImageBee>
            <img src={imgBee} width={"100%"} alt="" />
          </ImageBee>
        </SectionImageBee>
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 120px;
  box-sizing: border-box;
  margin-top: 170px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 0px 90px;
  }
  @media (max-width: 1024px) {
    padding: 0px 60px;
  }
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
  @media (max-width: 390px) {
    padding: 0px 20px;
  }
  @media (max-width: 350px) {
    padding: 0px 10px;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-right: 150px;
`;

const TextAboutUs = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 110px;
`;

const TextDescriptionEach = styled(Box)`
  display: flex;
  width: 100%;
  color: #fff;
  font-size: 3em;
  font-family: Lato;
  line-height: 40px;
  margin-top: 40px;
`;

const SectionRight = styled(Box)`
  display: flex;
  width: 600px;
  min-width: 600px;
`;

const SectionImageBee = styled(Box)`
  display: flex;
  width: 100%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-image: url(${imgBackSky});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageBee = styled(Box)`
  /* width: 304px; */
  width: 70%;
`;

export default AboutUs;
