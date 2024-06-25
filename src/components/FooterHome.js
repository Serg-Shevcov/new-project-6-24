import React from "react";
import { CDBSidebarFooter, CDBLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";

export const Footer = () => {
  return (
    <CDBSidebarFooter className="shadow colorFootr">
      <CDBBox
        display="flex"
        flex="column"
        className=" mx-auto py-5"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ms-3 h5 font-weight-bold" style={{color:"white" }}>Название проекта</span>
            </a>
          </CDBBox>
          <CDBBox
            display="flex"
            style={{ width: "50%" }}
            justifyContent="between"
          >
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600", color:"white" }}>
                Company
              </p>
              <CDBBox
              className="lincFooterTop"
                flex="column"
                display="flex"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBLink href="/">About Us</CDBLink>
                <CDBLink href="/">Principles</CDBLink>
                <CDBLink href="/">Careers</CDBLink>
                <CDBLink href="/">Educators</CDBLink>
                <CDBLink href="/">Press</CDBLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600", color:"white" }}>
                Products
              </p>
              <CDBBox
              className="lincFooterTop"
                display="flex"
                flex="column"
                style={{ cursor: "pointer", padding: "0" }}
              >
                <CDBLink href="/">Courses</CDBLink>
                <CDBLink href="/">Today</CDBLink>
                <CDBLink href="/">Pricing</CDBLink>
                <CDBLink href="/">Testimonials</CDBLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4 icFooter">
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
        <hr className="traitFooter" />

        <CDBBox
        className="lincFooterBottom"
          display="flex"
          justifyContent="between"
        >
          <CDBBox
            display="flex"
            flex="column"
            style={{ cursor: "pointer", padding: "0" }}
          >
            <CDBLink href="/">Help</CDBLink>
          </CDBBox>
          <CDBBox
            display="flex"
            flex="column"
            style={{ cursor: "pointer", padding: "0" }}
          >
            <CDBLink href="/">Terms of</CDBLink>
            <CDBLink href="/">Servise</CDBLink>
          </CDBBox>
          <CDBBox
            display="flex"
            flex="column"
            style={{ cursor: "pointer", padding: "0" }}
          >
            <CDBLink href="/">Privacy</CDBLink>
            <CDBLink href="/">Policy</CDBLink>
          </CDBBox>
          <CDBBox
            display="flex"
            flex="column"
            style={{ cursor: "pointer", padding: "0" }}
          >
            <CDBLink href="/">California Privacy</CDBLink>
            <CDBLink href="/">Policy</CDBLink>
          </CDBBox>
          <small className="ms-2 lincFooterBottom">
            &copy; 2021 Brilliant Worldwide, Inc., Brilliant and the Brilliant
            Logo are trademarks of Brilliant Worldwide, Inc.
          </small>
        </CDBBox>
      </CDBBox>
    </CDBSidebarFooter>
  );
};
