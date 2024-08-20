import "../../styles/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../assets/Hero-lab.jpg'

export default function header() {
    return (
        <>
        <header id="header" >
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Acces Mudah, Kegiatan Lancar </h1>
                            <h2>CentrumLab sebagai layanan online peminjaman access laboratorium yang tersedia untuk semua pengguna didalam lingkup wilayah tertentu dengan dilengkapi jadwal-jadwal penggunaan access serta informasi syarat maupun ketentuan yang berlaku.</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                    <img src={Image} style={{ width: "450px" }} className="img-fluid animated" alt="" />
                    </div>
                    </div>
                </div>
            </section>
            </header>
            
        </>
    )
}