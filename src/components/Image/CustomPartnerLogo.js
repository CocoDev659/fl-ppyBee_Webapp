import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
const CustomPartnerLogo = ({ image, link }) => {
  return (
    <StyledComponent
      onClick={() => {
        if (link === "") {
          return;
        }
        window.open(link);
      }}
    >
      <img src={image} width={"100%"} alt="" />
    </StyledComponent>
  );
};
const StyledComponent = styled(Box)`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-right: 150px;
  transition: 0.2s;

  cursor: pointer;

  @media (max-width: 1440px) {
    margin-right: 120px;
    width: 270px;
  }
  @media (max-width: 1024px) {
    margin-right: 100px;
    width: 250px;
  }
  @media (max-width: 768px) {
    margin-right: 80px;
    width: 200px;
  }
  @media (max-width: 500px) {
    margin-right: 50px;
    width: 180px;
  }
  @media (max-width: 390px) {
    width: 150px;
  }

  &:hover {
    transform: scale(1.25);
  }

`;
export default CustomPartnerLogo;
