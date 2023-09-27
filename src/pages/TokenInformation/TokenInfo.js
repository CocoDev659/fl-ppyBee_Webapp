import styled from "styled-components";
import { Box } from "@mui/material";

const TokenInfo = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Token Information
      </TextSubject>
      <SectionCard data-aos="fade-up" data-aos-duration="2000">
        <SectionCenter>
          <TextDescriptionEach>Token Name : FlappyBee</TextDescriptionEach>
          <TextDescriptionEach>Token Symbol : BEET</TextDescriptionEach>
          <TextDescriptionEach>Token Decimal : 18</TextDescriptionEach>
          <TextDescriptionEach>
            Total Supply : 100,000,000,000
          </TextDescriptionEach>
          <TextDescriptionEach>Holder Count : 1</TextDescriptionEach>
          <TextDescriptionEach>
            Contract Address : {"\u00a0"}
            <a
              href="https://etherscan.io/token/0x9E1f90970D6cbDdf193F418281612B7aF563985A"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              0x9E1f...985A
            </a>
          </TextDescriptionEach>
          <TextDescriptionEach>Contract Verified? : Yes</TextDescriptionEach>
          <TextDescriptionEach>Contract Type : ERC20</TextDescriptionEach>
        </SectionCenter>
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
  display: flex;
  width: 100%;
  justify-content: center;
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

const SectionCenter = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextDescriptionEach = styled(Box)`
  display: flex;
  color: #fff;
  font-size: 4em;
  font-family: Lato;
  line-height: 40px;
  margin-top: 40px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    line-height: 20px;
  }
  @media (max-width: 390px) {
    margin-top: 16px;
    line-height: 20px;
  }
  @media (max-width: 390px) {
    margin-top: 10px;
  }
`;

export default TokenInfo;
