import styled from "styled-components";
import { Box } from "@mui/material";
import imgHomeBack from "../../assets/images/background/imgHome.png";
import imgHomeBackSmall from "../../assets/images/background/imgHome_small.png";
import imgButtonWide from "../../assets/images/button/wide.png";
import imgFlyingBee from "../../assets/images/icon/flyingbeeanimation.gif";
import useProgressiveImg from "../../components/Image/ImageLoadEffect";
import PDFBEETPaper from "../../assets/pdf/FLAPPYBEE.pdf";

const Home = () => {
  const [src, { blur }] = useProgressiveImg(imgHomeBackSmall, imgHomeBack);
  const handleOpenPDF = () => {
    window.open(PDFBEETPaper);
  };

  return (
    <StyledComponent>
      <SectionImageHome>
        <img
          src={src}
          style={{
            width: "100%",
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.5s ease-out",
          }}
          loading="lazy"
          alt=""
        />
        <SectionTitle>
          <TextTitle>Flappy Bee</TextTitle>
        </SectionTitle>

        <SectionButtonPlay>
          <a
            // href="http://127.0.0.1:3000/play"
            // href="https://flappybee-game-dapp.netlify.app/play"
            href="https://app.flappybee.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ButtonPlay>Launch App</ButtonPlay>
          </a>
          {/* <a
            // href="http://127.0.0.1:3000/play"
            // href="https://flappybee-game-dapp.netlify.app/play"
            // href={PDFBEETPaper}
            // target="_blank"
            // rel="noopener noreferrer"
            // style={{ textDecoration: "none" }}
          > */}
          <ButtonPlay
            onClick={() => {
              handleOpenPDF();
            }}
          >
            BEET Paper
          </ButtonPlay>
          {/* </a> */}
        </SectionButtonPlay>
        <IconFlyingBee01>
          <img src={imgFlyingBee} width={"100%"} alt="" />
        </IconFlyingBee01>
        <IconFlyingBee02>
          <img src={imgFlyingBee} width={"100%"} alt="" />
        </IconFlyingBee02>
        <IconFlyingBee03>
          <img src={imgFlyingBee} width={"100%"} alt="" />
        </IconFlyingBee03>
      </SectionImageHome>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionImageHome = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;

  > img {
    @media (max-width: 600px) {
      height: 600px;
      object-fit: cover;
      object-position: left;
    }
    @media (max-width: 390px) {
      height: 844px;
      object-fit: cover;
      object-position: left;
    }
  }
`;

const SectionTitle = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 35px;
  filter: drop-shadow(7px 5px 0px #003d28);
  transition: 0.3s;
  @media (max-width: 1440px) {
    filter: drop-shadow(7px 5px 0px #003d28);
  }
  @media (max-width: 1024px) {
    filter: drop-shadow(6px 4px 0px #003d28);
  }
  @media (max-width: 768px) {
    filter: drop-shadow(5px 3px 0px #003d28);
  }
  @media (max-width: 390px) {
    filter: drop-shadow(3px 1px 0px #003d28);
  }
`;

const TextTitle = styled(Box)`
  color: #a9d100;
  text-align: center;
  font-size: 13em;
  font-family: Rowdies;

  background: -webkit-linear-gradient(
    rgba(225, 255, 202, 1),
    rgba(169, 209, 0, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-stroke: 3px #003d28;
  -webkit-text-fill-color: transparent;

  transition: 0.3s;
  @media (max-width: 1024px) {
    font-size: 80px;
  }
  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #003d28;
    font-size: 53px;
  }
  @media (max-width: 390px) {
    -webkit-text-stroke: 1px #003d28;
    font-size: 45px;
  }
`;

const SectionButtonPlay = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);

  transition: 0.3s;
  @media (max-width: 1024px) {
    bottom: 70px;
  }
  @media (max-width: 900px) {
    bottom: 50px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    bottom: 10px;
  }
  @media (max-width: 390px) {
    bottom: 50px;
  }
`;

const ButtonPlay = styled(Box)`
  display: flex;
  width: 450px;
  height: 130px;
  align-items: center;
  justify-content: center;
  background-image: url(${imgButtonWide});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0px 30px;

  color: #511900;
  text-align: center;
  font-size: 6em;
  font-family: Rowdies;
  font-weight: 300;
  line-height: 90px;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    color: white;
  }
  &:active {
    transform: scale(0.9);
  }

  transition: 0.3s;
  @media (max-width: 1600px) {
    width: 400px;
    height: 115px;
  }
  @media (max-width: 1440px) {
    width: 360px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 80px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 55px;
    font-size: 5em;
    margin: 0px 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 10px 0px;
  }
`;

const IconFlyingBee01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: scaleX(-1);
  width: 140px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 95px;
  }
  @media (max-width: 1024px) {
    width: 80px;
  }
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 500px) {
    left: 75%;
    top: 60%;
  }
  @media (max-width: 390px) {
    width: 80px;
  }
`;

const IconFlyingBee02 = styled(Box)`
  display: flex;
  position: absolute;
  left: 40%;
  top: 40%;
  transform: scaleX(-1);
  width: 110px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 75px;
  }
  @media (max-width: 1024px) {
    width: 60px;
  }
  @media (max-width: 768px) {
    width: 45px;
  }
  @media (max-width: 500px) {
    left: 50%;
    top: 50%;
  }
  @media (max-width: 390px) {
    width: 60px;
  }
`;

const IconFlyingBee03 = styled(Box)`
  display: flex;
  position: absolute;
  left: 30%;
  top: 50%;
  transform: scaleX(-1);
  width: 180px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 110px;
  }
  @media (max-width: 1024px) {
    width: 90px;
  }
  @media (max-width: 768px) {
    width: 70px;
  }
  @media (max-width: 500px) {
    left: 25%;
    top: 60%;
  }
  @media (max-width: 390px) {
    width: 90px;
  }
`;

export default Home;
