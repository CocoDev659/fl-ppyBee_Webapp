import styled from "styled-components";
import { Box } from "@mui/material";
// import imgButtonWide from "../../assets/images/button/wide.png";

const CardUtility = ({ data }) => {
  return (
    <StyledComponent
      data-aos="flip-left"
      data-aos-duration="500"
      // data-aos-delay="300"
    >
      <SectionIcon>
        <img src={data.icon} alt="" />
      </SectionIcon>
      <TextSubject>{data.textSubject}</TextSubject>
      <TextContent>{data.textContent}</TextContent>
      {/* <SectionButtonPlay>
        <a
          // href="http://127.0.0.1:3000/play"
          // href="https://flappybee-game-dapp.netlify.app/play"
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: " flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ButtonPlay>{data.button}</ButtonPlay>
        </a>
      </SectionButtonPlay> */}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 40px 60px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #00583a;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 1440px) {
    padding: 30px 40px;
  }
  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`;

const SectionIcon = styled(Box)`
  display: flex;
  width: 120px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: #008f5f;
  justify-content: center;
  align-items: center;
  > img {
    width: 70%;
  }

  transition: 0.3s;
  @media (max-width: 1440px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 80px;
  }
`;

const TextSubject = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 4em;
  font-family: Rowdies;
  font-weight: 700;
  /* line-height: 50px; */
  margin-top: 40px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 16px;
  }
`;

const TextContent = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 2.4em;
  font-family: Lato;
  line-height: 40px;
  margin-top: 20px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

// const SectionButtonPlay = styled(Box)`
//   display: flex;
//   margin-top: 40px;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// `;

// const ButtonPlay = styled(Box)`
//   display: flex;
//   width: 80%;
//   height: 90px;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${imgButtonWide});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 100% 100%;

//   color: #511900;
//   text-align: center;
//   font-size: 4em;
//   font-family: Rowdies;
//   font-weight: 300;
//   line-height: 90px;

//   cursor: pointer;
//   user-select: none;
//   transition: 0.3s;
//   &:hover {
//     color: white;
//   }
//   &:active {
//     transform: scale(0.9);
//   }

//   transition: 0.3s;

//   @media (max-width: 1440px) {
//     height: 80px;
//   }
//   @media (max-width: 1024px) {
//     height: 70px;
//   }
//   @media (max-width: 768px) {
//     height: 60px;
//     font-size: 3em;
//   }
// `;

export default CardUtility;
