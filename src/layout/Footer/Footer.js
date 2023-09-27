import styled from "styled-components";
import { Box } from "@mui/material";
import { dataSocialLink } from "../../data/Link";

const Footer = () => {
  return (
    <StyledComponent>
      <TextTitle
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Flappy Bee
      </TextTitle>
      <SectionLink>
        <TextUpdate>Join our growing community!</TextUpdate>
        <SectionLinkButtonGroup>
          {dataSocialLink?.map((each, index) => {
            return (
              <a
                href={each.linkUrl}
                key={index}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <ButtonSocialLink>{each.icon}</ButtonSocialLink>
              </a>
            );
          })}
        </SectionLinkButtonGroup>
      </SectionLink>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 120px 100px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s;
  @media (max-width: 1440px) {
    padding: 100px 90px;
  }
  @media (max-width: 1024px) {
    padding: 90px 60px;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 80px 40px;
  }
  @media (max-width: 500px) {
    padding: 70px 30px;
  }
  @media (max-width: 390px) {
    padding: 80px 20px;
  }
  @media (max-width: 350px) {
    padding: 60px 10px;
  }
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 94.459px;
  -webkit-text-stroke: 3px #003d28;
  text-shadow: 5px 5px 0px #00583a;

  cursor: pointer;

  transition: 0.3s;
  @media (max-width: 1440px) {
    font-size: 6em;
  }
  @media (max-width: 900px) {
    font-size: 6em;
    text-shadow: 3px 3px 0px #00583a;
  }
  @media (max-width: 768px) {
    font-size: 7em;
    text-shadow: 3px 3px 0px #00583a;
  }
  @media (max-width: 500px) {
    font-size: 6em;
    -webkit-text-stroke: 1px #003d28;
    text-shadow: 3px 3px 0px #00583a;
  }
  @media (max-width: 390px) {
    font-size: 7em;
    -webkit-text-stroke: 1px #003d28;
    text-shadow: 2px 2px 0px #00583a;
  }
  @media (max-width: 350px) {
    font-size: 6em;
  }
`;

const SectionLink = styled(Box)`
  display: flex;
  align-items: center;
  transition: 0.3s;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const TextUpdate = styled(Box)`
  color: #fff;
  font-size: 4em;
  font-family: Rowdies;
  line-height: 60px;
  margin-right: 35px;

  transition: 0.3s;
  @media (max-width: 1440px) {
    margin-right: 20px;
    font-size: 30px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

const SectionLinkButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonSocialLink = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: white;
  color: #003d28;
  cursor: pointer;
  user-select: none;
  font-size: 2.5rem;
  margin-left: 20px;
  transition: 0.3s;
  &:hover {
    color: #a9d100;
  }

  @media (max-width: 1440px) {
    font-size: 2rem;
    width: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    width: 40px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 30px;
  }
  @media (max-width: 390px) {
    width: 30px;
  }
`;

export default Footer;
