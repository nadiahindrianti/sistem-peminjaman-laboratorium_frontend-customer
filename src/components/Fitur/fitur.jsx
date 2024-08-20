import React from "react";
import "../../styles/fitur.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from "reactstrap";



const fitur = () => {
  return (
    <section>
    <Container>
      <Row>
      <div className="fitur">
      <Col lg='12'>
        <div className="fiturs">
        <h6 style={{ fontSize: '20px', color: '#4CAF50' }}className="head-fitur">Ruangan Lab</h6>
        <h1 className="body-fitur">Tersedia Ruangan Laboratorium</h1>
        <hr  className="garis"/>
        <p className="text-fitur2">Temukan ruangan laboratorium yang sesuai dengan kebutuhan.</p>
        </div>          
      </Col>
      </div>
      </Row>
    </Container>
  </section>
    )
}

export default fitur;