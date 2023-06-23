import styled from "styled-components";
import { Box } from "@mui/material";
import { dataSocialLink } from "../../data/Link";

const Footer = () => {
  return (
    <StyledComponent>
      <TextTitle>Flappy Bee</TextTitle>
      <SectionLink>
        <TextUpdate>Stay tuned for more updates</TextUpdate>
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
`;

const TextTitle = styled(Box)`
  color: #fff;
  text-align: center;
  font-size: 8em;
  font-family: Rowdies;
  line-height: 94.459px;
  -webkit-text-stroke: 3px #003d28;
  text-shadow: 5px 5px 0px rgb(0 115 75);
`;

const SectionLink = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextUpdate = styled(Box)`
  color: #fff;
  font-size: 4em;
  font-family: Rowdies;
  line-height: 60px;
  margin-right: 35px;
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
`;

export default Footer;
