/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header/header";
import Fitur from "../components/Fitur/fitur";
import Fiturdata from "../components/Fitur/fiturdata";
import Konselinglangsung from "../components/Konseling/konselinglangsung";
import JadwalData from "../components/Jadwal/jadwaldata";
import { Container, Row, Col,} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";



const Home = () => {
  return (
      <section>
        <Header />
        <Fitur />
        <Fiturdata />
        <Konselinglangsung />
        <Container>
          <Row>
            <Col lg='12'>
              <div className="Download">
                <h6 style={{ fontSize: '20px', color: '#4CAF50' }} className="Title_dwn">Jadwal</h6>
                <h1 className="txt_unduh">Daftar Jadwal Acces Lab</h1>
                <hr  className="garis"/>
                <p className="subt_unduh">Perhatikan jadwal lab sebelum melakukan peminjaman access! <br /></p>
                <JadwalData/>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
  );
};

export default Home;