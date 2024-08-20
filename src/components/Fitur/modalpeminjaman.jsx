import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditKonselingButton from '../Atom/button/PeminjamanButton';
import CloseButton from '../Atom/button/Closebutton';
import Modal from 'react-bootstrap/Modal';
import '../../styles/Peminjaman.css';
import ButtonPeminjaman from '../Atom/button/buttonpeminjaman';
//import Berhasil from '../Fitur/modalberhasil'

const FormGroup = ({ label, children, error }) => (
  <div className="form-group-Peminjaman" style={{ gap: '3px' }}>
    <label>{label}</label>
    {children}
    {error && <span className='error-message text-danger'>{error}</span>}
  </div>
);

const ModalPeminjaman = ({ labId, authToken }) => {
  const [show, setShow] = useState(false);
  const [jamPeminjaman, setJamPeminjaman] = useState('');
  const [jamPeminjamanError, setJamPeminjamanError] = useState(false);
  const [waktuKegiatan, setWaktuKegiatan] = useState('');
  const [waktuKegiatanError, setWaktuKegiatanError] = useState(false);
  const [suratRekomendasiError, setSuratRekomendasiError] = useState(false);
  const [deskripsiAlasanError, setDeskripsiAlasanError] = useState(false);
  const [deskripsiAlasan, setDeskripsiAlasan] = useState('');
  const [suratRekomendasiUrl, setSuratRekomendasiUrl] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseBerhasil = () => setSuccess(false);

  const handleFileUpload = async () => {
    const fileInput = document.getElementById('uploadFile');
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('https://sistem-peminjaman-centrumlab.onrender.com/api/v1/public/cloudinary/file-upload', formData, { 
          headers: { 
              'Content-Type': 'multipart/form-data' 
      
          } 
        });

        if (response.status === 200) {
          setSuratRekomendasiUrl(response.data.data.url);
          setUploadSuccess(true);
        } else {
          setSuratRekomendasiError(true);
          console.error('File upload failed:', response.statusText);
        }
      } catch (error) {
        setSuratRekomendasiError(true);
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleDeskripsiAlasan = (e) => {
    const value = e.target.value;
    setDeskripsiAlasan(value);
    setDeskripsiAlasanError(value === '');
  };

  const handleWaktuKegiatan = (e) => {
    const value = e.target.value;
    setWaktuKegiatan(value);
    setWaktuKegiatanError(value === '');
  };

  const handleJamPeminjaman = (e) => {
    const value = e.target.value;
    setJamPeminjaman(value);
    setJamPeminjamanError(value === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!waktuKegiatan || !jamPeminjaman || !suratRekomendasiUrl || !deskripsiAlasan) {
      setWaktuKegiatanError(!waktuKegiatan);
      setJamPeminjamanError(!jamPeminjaman);
      setSuratRekomendasiError(!suratRekomendasiUrl);
      setDeskripsiAlasanError(!deskripsiAlasan);
      return;
    }

    setIsLoading(true);

    const newPeminjaman = {
      lab_id: labId,
      tanggal_peminjaman: waktuKegiatan,
      jam_peminjaman: jamPeminjaman,
      suratrekomendasi_image: [
        {
          suratrekomendasi_image_url: suratRekomendasiUrl,
        },
      ],
      description: deskripsiAlasan,
      status: 'request',
    };

    try {
      const response = await axios.post('https://sistem-peminjaman-centrumlab.onrender.com/api/v1/user/peminjaman', newPeminjaman, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        console.log('Peminjaman berhasil:', response.data);
        setWaktuKegiatan('');
        setJamPeminjaman('');
        setSuratRekomendasiUrl('');
        setDeskripsiAlasan('');
        setUploadSuccess(false);
        setSuccess(true);
        setUploadMessage('Berhasil melakukan peminjaman. Untuk melihat status dapat mengakses history peminjaman');
        handleClose();
        navigate('/historypeminjaman');
      } else {
        console.error('Peminjaman failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting peminjaman:', error);
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>}
      <ButtonPeminjaman onClick={handleShow} variant="link" label="Peminjaman"></ButtonPeminjaman>
      <div id='modal-tambahPeminjaman'>
        <Modal show={show} onHide={handleClose} size='lg'>
          <div className="modal-Peminjaman">
            <div className="modal-content-Peminjaman">
              <div className='d-flex justify-content-between align-items-center'>
                <h1>Peminjaman</h1>
                <CloseButton id='btn-closePeminjaman' handleClose={handleClose} />
              </div>
              <form className="form-container-Peminjaman">
                <FormGroup label="Tanggal Peminjaman" error={waktuKegiatanError && "Tanggal harus diisi"}>
                  <input type="date" id="waktuKegiatan" name="waktuKegiatan" style={{ width: "150px", height: "35px", borderRadius: '5px' }} value={waktuKegiatan} onChange={handleWaktuKegiatan} />
                </FormGroup>
                <FormGroup label="Jam Peminjaman" error={jamPeminjamanError && "Jam harus diisi"}>
                  <select id="jamPeminjaman" name="jamPeminjaman" style={{ width: "230px", height: "35px", borderRadius: '5px' }} value={jamPeminjaman} onChange={handleJamPeminjaman}>
                    <option value="">Pilih Jam</option>
                    <option value="09:00">09:00 - 11.30</option>
                    <option value="12:00">12:00 - 14.30</option>
                    <option value="15:00">15:00 - 17.30</option>
                  </select>
                </FormGroup>
                <FormGroup label="Surat Rekomendasi" error={suratRekomendasiError && "File harus diunggah"}>
                  <input type="file" id="uploadFile" style={{ height: "35px", borderRadius: '5px' }} className={suratRekomendasiError ? "form-control border border-danger" : "form-control"} />
                  <button type="button" onClick={handleFileUpload} style={{ marginTop: '10px' }}>Upload File</button>
                  {uploadSuccess && <span className='success-message text-success'>File berhasil diunggah <i className="bi bi-check-circle"></i></span>}
                </FormGroup>
                <FormGroup label="Deskripsi Alasan Peminjaman" error={deskripsiAlasanError && "Deskripsi harus diisi"}>
                  <textarea value={deskripsiAlasan} onChange={handleDeskripsiAlasan} style={{ width: "460px", height: "50px", borderRadius: '5px' }} className={deskripsiAlasanError ? "form-control border border-danger" : "form-control"} id="addDesc" />
                </FormGroup>
                <EditKonselingButton handleCancel={handleClose} handleSubmit={handleSubmit} />
              </form>
            </div>
          </div>
        </Modal>
      </div>
      {/*<div>
        <Berhasil label='Data berhasil di tambahkan'Berhasil={success} Close={handleCloseBerhasil}/>
    </div>*/}
    </>
  );
};

export default ModalPeminjaman;
