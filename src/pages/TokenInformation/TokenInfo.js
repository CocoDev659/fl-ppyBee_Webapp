import styled from "styled-components";
import { Box } from "@mui/material";
import imgSolidproof from "../../assets/images/icon/solidproof.png";
// import imgBlockSafu from "../../assets/images/icon/blocksafu.png";
// import { NotificationManager } from "react-notifications";

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
            Total Supply : 100,000,000,000,000
          </TextDescriptionEach>
          <TextDescriptionEach>Holder Count : 1</TextDescriptionEach>
          <TextDescriptionEach>
            Contract Address : {"\u00a0"}
            <a
              href="https://bscscan.com/address/0x684eAfeb7E5be043842D892980695C68e15152b7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              0x684e...52b7
            </a>
          </TextDescriptionEach>
          <TextDescriptionEach>Contract Verified : Yes</TextDescriptionEach>
          <TextDescriptionEach>Contract Type : BEP20</TextDescriptionEach>
        </SectionCenter>
      </SectionCard>
      <SectionAudit>
        {/* <Box display={"flex"} data-aos="fade-right" data-aos-duration="2000">
          <ButtonBlockSAFUAudit
            onClick={() => {
              // window.open(
              //   "https://blocksafu.com/audit/0x9E1f90970D6cbDdf193F418281612B7aF563985A"
              //   // "_self"
              // );
            }}
          >
            <IconAudit>
              <img src={imgBlockSafu} width={"100%"} height={"100%"} alt="" />
            </IconAudit>
            <TextBlockSAFUAudit>BlockSAFU Audit</TextBlockSAFUAudit>
          </ButtonBlockSAFUAudit>
        </Box> */}

        <Box display={"flex"} data-aos="fade-up" data-aos-duration="2000">
          <ButtonAudit
            onClick={() => {
              // return NotificationManager.warning("Comming soon.", "", 3000);
              window.open(
                "https://app.solidproof.io/projects/flappy-bee?audit_id=815"
              );
            }}
          >
            <IconAudit>
              <img src={imgSolidproof} width={"100%"} height={"100%"} alt="" />
            </IconAudit>
            <TextAudit>Solidproof Audit</TextAudit>
          </ButtonAudit>
        </Box>
      </SectionAudit>
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

const SectionAudit = styled(Box)`
  display: flex;
  align-items: center;
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
    margin-top: 50px;
    /* flex-direction: column; */
  }
  @media (max-width: 390px) {
    margin-top: 40px;
  }
`;

const ButtonAudit = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 35px;
  background-color: #2b6acf;
  color: #003d28;
  cursor: pointer;
  user-select: none;
  font-size: 2.5rem;

  &:hover {
    box-shadow: 0px 0px 20px #2b6acf;
  }
  &:active {
    transform: scale(0.95);
  }
  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 8px 25px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 6px 20px;
  }
  @media (max-width: 600px) {
    padding: unset;
    width: 250px;
    height: 50px;
    margin-left: 0px;
  }
`;

// const ButtonBlockSAFUAudit = styled(Box)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: bold;
//   padding: 10px 30px;
//   border-radius: 35px;
//   background-color: white;
//   color: #003d28;
//   cursor: pointer;
//   user-select: none;
//   font-size: 2.5rem;
//   transition: 0.3s;

//   &:hover {
//     box-shadow: 0px 0px 15px white;
//   }
//   &:active {
//     transform: scale(0.95);
//   }
//   @media (max-width: 1440px) {
//     font-size: 2rem;
//   }
//   @media (max-width: 1024px) {
//     font-size: 1.5rem;
//     padding: 8px 25px;
//   }
//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//     padding: 6px 20px;
//   }
//   @media (max-width: 600px) {
//     padding: unset;
//     width: 200px;
//     height: 40px;
//     margin-top: 15px;
//   }
// `;

const IconAudit = styled(Box)`
  display: flex;
  width: 30px;
  margin-right: 10px;

  transition: 0.3s;

  @media (max-width: 1024px) {
    width: 25px;
    margin-right: 8px;
  }
  @media (max-width: 768px) {
    width: 20px;
    margin-right: 8px;
  }
  @media (max-width: 500px) {
    width: 18px;
    margin-right: 6px;
  }
`;

// const TextBlockSAFUAudit = styled(Box)`
//   font-weight: bold;
//   color: #0c325f;
//   cursor: pointer;
//   user-select: none;
//   font-size: 2.5rem;
//   transition: 0.3s;
//   @media (max-width: 1440px) {
//     font-size: 2rem;
//   }
//   @media (max-width: 1024px) {
//     font-size: 1.5rem;
//   }
//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
//   @media (max-width: 500px) {
//   }
// `;

const TextAudit = styled(Box)`
  font-weight: bold;
  color: white;
  cursor: pointer;
  user-select: none;
  font-size: 2.5rem;
  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
  }
`;

export default TokenInfo;
