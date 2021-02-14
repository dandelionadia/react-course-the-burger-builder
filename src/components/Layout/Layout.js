import React from "react";
import styled from "styled-components";

const StyledLayout = styled.main`
  margin-top: 16px;
`;

export const Layout = (props) => (
  <>
    <div>Toolbar, SideDrawr, Backdrop</div>
    <StyledLayout>{props.children}</StyledLayout>
  </>
);
