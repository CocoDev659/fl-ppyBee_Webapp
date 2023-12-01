import styled from "styled-components";
import { Box } from "@mui/material";
import imgTokenomics from "../../assets/images/background/backTokenomics.svg";

const Tokenomics = () => {
  return (
    <StyledComponent>
      <TextSubject data-aos="zoom-in" data-aos-duration="1000">
        Tokenomics
      </TextSubject>
      <TextSubjectDescription data-aos="zoom-in" data-aos-duration="1000">
        No Taxes, No Bullshit, and contract ownership is renounced at the
        launch.
      </TextSubjectDescription>
      <ImageBackground>
        {/* <img src={imgTokenomics} width={"100%"} alt="" /> */}
        {/* <SectionReward>Fair-Launch: 39%</SectionReward>
        <SectionSupply>Game Reward: 20%</SectionSupply>
        <SectionLiquidity>Liquidity Pool: 21%</SectionLiquidity>
        <SectionFarming>Farming: 15%</SectionFarming>
        <SectionEcosystem>Ecosystem: 5%</SectionEcosystem> */}

        <SectionInfo>
          <TextInfo>Fair-Launch: 67%</TextInfo>
        </SectionInfo>
        <SectionInfo>
          <TextInfo>Fair-Launch: 67%</TextInfo>
        </SectionInfo>
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
  padding-bottom: 50px;
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

const TextSubjectDescription = styled(Box)`
  width: 80%;
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

const ImageBackground = styled(Box)`
  display: grid;
  width: 100%;
  height: 500px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-image: url(${imgTokenomics});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  > :nth-child(1) {
  }
  > :nth-child(2) {
  }
  > :nth-child(3) {
    grid-column: 1/4;
  }

  @media (max-width: 1440px) {
    height: 450px;
  }
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 390px) {
    height: 250px;
  }
`;

const SectionInfo = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInfo = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 25px 100px;
  border-radius: 12px;
  border: 2px solid #95b2a8;
  background: rgba(7, 49, 34, 0.6);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 3.5em;
  font-family: Lato;
  line-height: 40px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px white;
  }

  @media (max-width: 1440px) {
    padding: 25px 70px;
  }
  @media (max-width: 1024px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 10px 30px;
  }
  @media (max-width: 500px) {
    padding: 5px 15px;
  }
  @media (max-width: 390px) {
    padding: 0px 10px;
  }
`;

const TextInfo01 = styled(Box)`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 4em;
  font-family: Lato;
  line-height: 40px;
  font-weight: 600;
  //
`;

// const SectionReward = styled(Box)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 700px;
//   height: 120px;
//   border-radius: 12px;
//   border: 2px solid #95b2a8;
//   background: rgba(7, 49, 34, 0.7);
//   backdrop-filter: blur(5px);
//   color: #fff;
//   text-align: center;
//   font-size: 3em;
//   font-family: Lato;
//   line-height: 40px;

//   left: 50%;
//   top: 10%;
//   transform: translateX(-50%);
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     box-shadow: 0px 0px 20px white;
//   }

//   transition: 0.3s;
//   @media (max-width: 1600px) {
//     width: 600px;
//     height: 100px;
//   }
//   @media (max-width: 1440px) {
//     width: 530px;
//     height: 90px;
//   }
//   @media (max-width: 1024px) {
//     width: 400px;
//     height: 70px;
//   }
//   @media (max-width: 768px) {
//     width: 290px;
//     height: 50px;
//   }
//   @media (max-width: 600px) {
//     width: 230px;
//     height: 40px;
//   }
//   @media (max-width: 500px) {
//     width: 150px;
//     height: 30px;
//     top: 8%;
//   }
//   @media (max-width: 350px) {
//     width: 120px;
//     height: 20px;
//   }
// `;

// const SectionSupply = styled(Box)`
//   display: flex;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   width: 550px;
//   height: 120px;
//   border-radius: 12px;
//   border: 2px solid #95b2a8;
//   background: rgba(7, 49, 34, 0.7);
//   backdrop-filter: blur(5px);
//   color: #fff;
//   text-align: center;
//   font-size: 3em;
//   font-family: Lato;
//   line-height: 40px;

//   right: 60%;
//   top: 32%;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     box-shadow: 0px 0px 20px white;
//   }

//   transition: 0.3s;
//   @media (max-width: 1600px) {
//     width: 450px;
//     height: 100px;
//   }
//   @media (max-width: 1440px) {
//     width: 420px;
//     height: 90px;
//   }
//   @media (max-width: 1024px) {
//     width: 300px;
//     height: 70px;
//   }
//   @media (max-width: 768px) {
//     width: 230px;
//     height: 50px;
//   }
//   @media (max-width: 600px) {
//     width: 180px;
//     height: 40px;
//   }
//   @media (max-width: 500px) {
//     width: 130px;
//     height: 30px;
//   }
//   @media (max-width: 350px) {
//     width: 110px;
//     height: 20px;
//   }
// `;

// const SectionLiquidity = styled(Box)`
//   display: flex;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   width: 550px;
//   height: 120px;
//   border-radius: 12px;
//   border: 2px solid #95b2a8;
//   background: rgba(7, 49, 34, 0.7);
//   backdrop-filter: blur(5px);
//   color: #fff;
//   text-align: center;
//   font-size: 3em;
//   font-family: Lato;
//   line-height: 40px;
//   left: 60%;
//   top: 32%;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     box-shadow: 0px 0px 20px white;
//   }

//   transition: 0.3s;
//   @media (max-width: 1600px) {
//     width: 450px;
//     height: 100px;
//   }
//   @media (max-width: 1440px) {
//     width: 420px;
//     height: 90px;
//   }
//   @media (max-width: 1024px) {
//     width: 300px;
//     height: 70px;
//   }
//   @media (max-width: 768px) {
//     width: 230px;
//     height: 50px;
//   }
//   @media (max-width: 600px) {
//     width: 180px;
//     height: 40px;
//   }
//   @media (max-width: 500px) {
//     width: 130px;
//     height: 30px;
//   }
//   @media (max-width: 350px) {
//     width: 110px;
//     height: 20px;
//   }
// `;

// const SectionFarming = styled(Box)`
//   display: flex;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   width: 500px;
//   height: 120px;
//   border-radius: 12px;
//   border: 2px solid #95b2a8;
//   background: rgba(7, 49, 34, 0.7);
//   backdrop-filter: blur(5px);
//   color: #fff;
//   text-align: center;
//   font-size: 3em;
//   font-family: Lato;
//   line-height: 40px;

//   right: 63%;
//   top: 55%;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     box-shadow: 0px 0px 20px white;
//   }

//   transition: 0.3s;
//   @media (max-width: 1600px) {
//     width: 450px;
//     height: 100px;
//   }
//   @media (max-width: 1440px) {
//     width: 375px;
//     height: 90px;
//   }
//   @media (max-width: 1024px) {
//     width: 300px;
//     height: 70px;
//   }
//   @media (max-width: 768px) {
//     width: 200px;
//     height: 50px;
//   }
//   @media (max-width: 600px) {
//     width: 150px;
//     height: 40px;
//   }
//   @media (max-width: 500px) {
//     width: 120px;
//     height: 30px;
//     top: 53%;
//   }
//   @media (max-width: 350px) {
//     width: 100px;
//     height: 20px;
//   }
// `;

// const SectionEcosystem = styled(Box)`
//   display: flex;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   width: 500px;
//   height: 120px;
//   border-radius: 12px;
//   border: 2px solid #95b2a8;
//   background: rgba(7, 49, 34, 0.7);
//   backdrop-filter: blur(5px);
//   color: #fff;
//   text-align: center;
//   font-size: 3em;
//   font-family: Lato;
//   line-height: 40px;

//   left: 63%;
//   top: 55%;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     box-shadow: 0px 0px 20px white;
//   }

//   transition: 0.3s;
//   @media (max-width: 1600px) {
//     width: 450px;
//     height: 100px;
//   }
//   @media (max-width: 1440px) {
//     width: 375px;
//     height: 90px;
//   }
//   @media (max-width: 1024px) {
//     width: 300px;
//     height: 70px;
//   }
//   @media (max-width: 768px) {
//     width: 200px;
//     height: 50px;
//   }
//   @media (max-width: 600px) {
//     width: 150px;
//     height: 40px;
//   }
//   @media (max-width: 500px) {
//     width: 120px;
//     height: 30px;
//     top: 53%;
//   }
//   @media (max-width: 350px) {
//     width: 100px;
//     height: 20px;
//   }
// `;

export default Tokenomics;
