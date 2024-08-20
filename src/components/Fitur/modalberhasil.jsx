import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Buttons from '../Atom/button/button';
import '../../styles/modalberhasil.css';
import berhasil from '../../assets/berhasil.png';

function Modalberhasil ({ Berhasil, Close, label }) {
  const history = useHistory();

  const handleOKClick = () => {
    history.push('/historypeminjaman'); 
    Close(); 
  };

  return (
    <Modal show={Berhasil} onHide={Close} size="sm">
      <div id='modalAlertberhasil'>
        <img src={berhasil} alt="berhasil-data"/>
        <h5>Anda berhasil melakukan peminjaman, cek secara berkala status peminjaman anda</h5>
        <p>{label}</p>
        <Buttons label='OK' onClick={handleOKClick}/>
      </div>
    </Modal>
  );
}

export default Modalberhasil;
