/* eslint-disable no-unused-vars */
import React from "react";
import Konselinglangsung from "../components/Konseling/konselinglangsung";
import { Container, Row, Col,} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/syaratketentuan.css";



const Syaratketentuan = () => {
  return (
      <section>
        <Konselinglangsung />
        <Container>
          <Row>
            <Col lg='12'>
              <div className="Syaratketentuan">
                <h6 style={{ fontSize: '20px', color: '#4CAF50' }} className="Title_dwn">Syarat dan Ketentuan</h6>
                <h1 className="txt_syaratketentuan">Terdapat syarat dan ketentuan yang berlaku</h1>
                <hr  className="garis"/>
                <p className="subt_syaratketentuan">Baca dan taatilah! <br /></p>
                <div className="box-container">
                    <p className="subt">1. Pengguna CentrumLab adalah Mahasiswa dan Dosen dari Program Studi Sistem Telekomunikasi <br /></p>
                    <p className="subt">2. Mahasiswa Program Studi Sistem Telekomunikasi yang memanfaatkan laboratorium untuk kegiatan praktikum mata kuliah tertentu, harus sepengetahuan Kepala Lab.SISTEL dan dosen pengampu dengan mengupload file  <br /></p>
                    <p className="subt">3. Pelaksanaan praktikum mengikuti jadwal dan durasi yang ditentukan  <br /></p>
                    <p className="subt">4. Pengajuan Peminjaman akses laboratorium harus dilakukan dalam rentang waktu 1-3 minggu sebelum menggunakan laboratorium   <br /></p>
                    <p className="subt">5. Semua penguna atau pengunjung laboratorium wajib menjaga kebersihan  <br /></p>
                    <p className="subt">6. Dilarang makan, minum, dan merokok di dalam ruang laboraotium <br /></p>
                    <p className="subt_2">7. Bila ada kehilangan, kerusakan yang disebabkan oleh kecelakaan, kecerobohan, dan ketidakdisiplinan pengguna, maka pengguna harus bersedia mengganti dengan perangkat yang sama atau perbaikan secara mandiri, serta tidak diperkenankan melakukan peminjaman kembali  <br /></p>
                </div>

              </div>
            </Col>

          </Row>
        </Container>
      </section>
  );
};

export default Syaratketentuan;