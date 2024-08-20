import React from 'react';
import Router from '../../routes/routers.jsx';
import { useAuth } from './AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import logo from '../../assets/logo_lab.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/navbar.css';
import '../../styles/footer.css';

function Layout() {

  return (
    <div>
      <header id="header" style={{ backgroundColor: '#FFFFFFCC' }}>
        <nav>
          <div className="nav-logo-container">
            <img src={logo} alt="" width="70" height="9,13" />
            <a
              style={{
                fontSize: '24px',
                fontWeight: '400',
                fontFamily: 'Raleway',
                textAlign: 'center',
                color: 'rgba(9, 78, 117, 1)',
              }}
            >
              CentrumLab
            </a>
          </div>
          <div className="navbar-links-container">
            <a href="/">Home</a>
            <a href="/ruanglab">Ruang Lab</a>
            <a href="/syaratketentuan">Syarat & Ketentuan</a>
            <a href="/historypeminjaman">History Peminjaman</a>
          </div>
          
        </nav>
      </header>

      <div>
        <Router />
      </div>

      <footer className="footer">
        <div className="container">
          {/* Konten footer */}
        </div>
      </footer>

    </div>
  );
}

export default Layout;
