import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ModalPeminjaman from '../Fitur/modalpeminjaman';
import "../../styles/fiturdata.css";

function FiturData() {
  const [labData, setLabData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://sistem-peminjaman-centrumlab.onrender.com/api/v1/public/lab') 
      .then(response => response.json())
      .then(data => {
        if (data.status_code === 200) {
          const mappedData = data.data.map(lab => ({
            lab_id: lab.lab_id,
            src: lab.lab_image[0]?.image_url || getDefaultImage(lab.name),
            title: lab.name,
            text: lab.description
          }));
          setLabData(mappedData);
        } else {
          console.error('Error fetching data:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const getDefaultImage = (title) => {
    switch(title) {
      case 'Laboratorium Elektronika':
        return 'https://res.cloudinary.com/dwh00k4um/image/upload/v1714718823/sistem-cloudinary/kmceoztychkwjzsleltp.jpg';
      case 'Laboratorium Jaringan':
        return 'https://res.cloudinary.com/dwh00k4um/image/upload/v1714721695/sistem-cloudinary/r7ysnfa7vhxaltmsyxlp.jpg';
      case 'Laboratorium Transmisi':
        return 'https://res.cloudinary.com/dwh00k4um/image/upload/v1714721286/sistem-cloudinary/adldmegksrh6fisdtzw2.jpg';
      default:
        return 'default-image-path'; // Ganti dengan jalur gambar default jika ada
    }
  };

  return (
    <section id="tentang">
      <div className="container">
        <div className="card-container">
          {labData.map((lab, index) => (
            <Card key={index} className="custom-card">
              <Card.Img variant="top" src={lab.src} className="custom-card-img" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>
                  <h1 className="title-fitur">{lab.title}</h1>
                </Card.Title>
                <Card.Subtitle>
                  <p className="text-fitur">{lab.text}</p>
                </Card.Subtitle>
                <div className="d-flex justify-content-center mt-auto">
                  <ModalPeminjaman labId={lab.lab_id} />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FiturData;
