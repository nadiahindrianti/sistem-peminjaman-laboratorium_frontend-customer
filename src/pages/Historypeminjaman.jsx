import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Konselinglangsung from "../components/Konseling/konselinglangsung";
import '../styles/historypeminjaman.css';

const HistoryPeminjaman = () => {
  const [peminjamanData, setPeminjamanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeminjamanData = async () => {
      try {
        const response = await axios.get('https://sistem-peminjaman-centrumlab.onrender.com/api/v1/user/peminjaman', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.status === 200) {
          setPeminjamanData(response.data.data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeminjamanData();
  }, []);

  return (
    <section>
    <Konselinglangsung />
    <Container className="history-container">
      <Row className="justify-content-center">
        <Col lg="10">
          <div className="history-header">
            <h1>History Peminjaman</h1>
            <hr />
          </div>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <Table className="custom-table" bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Lab</th>
                  <th>Tanggal Peminjaman</th>
                  <th>Jam Peminjaman</th>
                  <th>Deskripsi</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {peminjamanData.map((peminjaman, index) => (
                  <tr key={peminjaman.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{peminjaman.lab.name}</td>
                    <td>{peminjaman.tanggal_peminjaman}</td>
                    <td>{peminjaman.jam_peminjaman}</td>
                    <td>{peminjaman.description}</td>
                    <td>{peminjaman.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <div className="history-footer">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/home')}
            >
              Kembali
            </button>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default HistoryPeminjaman;
