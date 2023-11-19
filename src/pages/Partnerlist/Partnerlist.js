import styled from "styled-components";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import CustomPartnerLogo from "../../components/Image/CustomPartnerLogo";
import imgLogoCoinTiger from "../../assets/images/partner/Cointiger.png";
import imgLogoCMC from "../../assets/images/partner/coinmarketcap-logo.png";
import imgLogoCoinGecko from "../../assets/images/partner/Coingecko.png";
import imgLogoHyperPay from "../../assets/images/partner/Hyperpay.png";
import imgLogoONTO from "../../assets/images/partner/onto-logo.png";
import imgLogoSafePal from "../../assets/images/partner/safepal-logo.png";
import imgLogoPinksale from "../../assets/images/partner/Pinksale logo.png";
import imgLogoDexview from "../../assets/images/partner/DEXView.png";
import imgLogoBlockSAFU from "../../assets/images/partner1/blockSAFU.svg";
import imgLogoSolidProof from "../../assets/images/partner1/solidproof.png";
import imgLogoEtherscan from "../../assets/images/partner/etherscan-logo.png";

const Partnerlist = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Flappybee Partners
      </TextSubject>
      <TextSubjectDescription data-aos="zoom-in" data-aos-duration="1000">
        We partnered with leaders in the crypto industry
      </TextSubjectDescription>
      <SectionRoadmap>
        <CustomMarquee
          // className="rfm-overlay"
          gradient={true}
          gradientWidth={"100px"}
          speed={"60"}
        >
          <CustomPartnerLogo image={imgLogoCoinTiger} link="" />
          <CustomPartnerLogo image={imgLogoCMC} link="" />
          <CustomPartnerLogo image={imgLogoCoinGecko} link="" />
          <CustomPartnerLogo image={imgLogoHyperPay} link="" />
          <CustomPartnerLogo image={imgLogoONTO} link="" />
          <CustomPartnerLogo image={imgLogoSafePal} link="" />
          <CustomPartnerLogo
            image={imgLogoPinksale}
            link="https://www.pinksale.finance"
          />
          <CustomPartnerLogo
            image={imgLogoDexview}
            link="https://www.dexview.com"
          />
          <CustomPartnerLogo image={imgLogoBlockSAFU} link="" />
          <CustomPartnerLogo image={imgLogoSolidProof} link="" />
          <CustomPartnerLogo image={imgLogoEtherscan} link="" />
        </CustomMarquee>
      </SectionRoadmap>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  /* @media (max-width: 1440px) {
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
  } */
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  /* line-height: 110px; */
`;

const TextSubjectDescription = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 3em;
  font-weight: 300;
  font-family: Rowdies;
  /* line-height: 110px; */
  margin-top: 30px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 25px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

const SectionRoadmap = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 150px;

  transition: 0.3s;
  @media (max-width: 1024px) {
    margin-top: 120px;
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

const CustomMarquee = styled(Marquee)`
  padding: 10px 0px;
  overflow: hidden !important;
  .rfm-overlay {
    --gradient-color: rgb(0, 61, 40) !important;
    --gradient-width: 150px !important;
  }

  @media (max-width: 500px) {
    .rfm-overlay {
      --gradient-width: 50px !important;
    }
  }
  @media (max-width: 390px) {
    .rfm-overlay {
      --gradient-width: 30px !important;
    }
  }
`;

export default Partnerlist;
