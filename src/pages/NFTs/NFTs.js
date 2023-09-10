import styled from "styled-components";
import { Box } from "@mui/material";
import imgButtonWide from "../../assets/images/button/wide.png";

const NFTs = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Flappy Bee NFTs
      </TextSubject>
      <SectionCard>
        {new Array(10).fill(0).map((each, index) => {
          return (
            <CartNFT data-aos="flip-left" data-aos-duration="2000">
              <img src={`/assets/images/NFTs/${index + 1}.jpg`} alt="" />
            </CartNFT>
          );
        })}
      </SectionCard>
      <SectionButtonPlay>
        <a
          // href="http://127.0.0.1:3000/play"
          // href="https://flappybee-game-dapp.netlify.app/play"
          href="https://app.flappybee.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ButtonPlay>Open</ButtonPlay>
        </a>
      </SectionButtonPlay>
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 45px;
  grid-row-gap: 45px;
  margin-top: 60px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 50px;
  }
  @media (max-width: 1024px) {
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 30px;

    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

const CartNFT = styled(Box)`
  display: flex;
  user-select: none;
  cursor: pointer;
  flex: 1;
  > img {
    border-radius: 4px;
    width: 100%;  transition: 0.3s;
  }
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    > img {
      box-shadow: 0px 0px 12px white;
    }
  }
`;

const SectionButtonPlay = styled(Box)`
  display: flex;
  margin-top: 80px;
  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  @media (max-width: 390px) {
    margin-top: 50px;
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

  color: #511900;
  text-align: center;
  font-size: 7em;
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
  }
`;

export default NFTs;
