/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/logo_lab.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="7" md="6">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <h5>CentrumLab</h5>
              <div>
                <p>
                  CentrumLab: Layanan access peminjaman Lab.  <br />
                   Layanan Online
                </p>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6">
            <div className="footer__column">
              <h5 style={{ color: '#FFFF', fontSize: '23px'}} className="footer__title">Website</h5>
              <ListGroup className="footer__list">
                  <a style={{ color: '#FFFF' }} href="#">Syarat & Ketentuan</a>
                  <a style={{ color: '#FFFF' }} href="#">Help Center</a>
                  <a style={{ color: '#FFFF' }} href="#">About Us</a>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="6">
            <div className="footer__column">
              <h5 style={{ color: '#FFFF', fontSize: '23px'}} className="footer__title">Kontak</h5>
              <ListGroup className="footer__list">
                  <span>+12 2345 2345 67</span>
                  <a style={{ color: '#FFFF' }} href="mailto:labaccess@wc.com">centrumlab@gmail.com</a>
                  <span>Jl. Nagri Kaler,<br />Kec. Nagri Kaler, Purwakarta,<br /> Jawa Barat</span>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <hr className="garis-ftr" />
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright © CentrumLab. All rights Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="copyright d-flex align-items-center justify-content-end">
              <a style={{ color: '#FFFF' }} href="#">User Terms & Conditions</a>
              <span>|</span>
              <a style={{ color: '#FFFF' }} href="#">Privacy Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
