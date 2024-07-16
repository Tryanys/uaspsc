import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Berita1 from './Berita1';
import Berita2 from './Berita2';
import Berita3 from './Berita3';
import Berita4 from './Berita4';
import Berita5 from './berita5';
import Berita6 from './berita6';
import berita1 from '../assets/berita1.JPG'
import berita2 from '../assets/berita2.jpeg'
import berita3 from '../assets/berita3.JPG'
import berita4 from '../assets/berita4.jpg'
import berita5 from '../assets/berita5.jpeg'
import berita6 from '../assets/artikel1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './informasi.css';


function Informasi() {
  return (
    <div>
      <div className="container">
        <Routes>         
          <Route path="/berita1" element={<Berita1 />} />
          <Route path="/berita2" element={<Berita2 />} />
          <Route path="/berita3" element={<Berita3 />} />
          <Route path="/berita4" element={<Berita4 />} />
          <Route path="/berita5" element={<Berita5 />} />
          <Route path="/berita6" element={<Berita6 />} />
        </Routes>
      </div>
      <div className="container">
        <h2 className="text-center">Berita Terkini</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={berita1} className="card-img-top" alt="Berita 1" />
              <div className="card-body">
                <Link to="/berita1">Geladi Posko Tanggap Darurat di Lingkungan Karaton</Link>
                <p className="card-text">Jul, 10 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={berita2} className="card-img-top" alt="Berita 2" />
              <div className="card-body">
                <Link to="/berita2">Pendampingan Petugas Jitupasna dan Penyusunan R3P</Link>
                <p className="card-text">Jul, 05 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={berita3} className="card-img-top" alt="Berita 3" />
              <div className="card-body">
                <Link to="/berita3">Pemetaan Area Potensi Rawan Bencana dan Prosedur Evakuasi di Lingkungan Karaton</Link>
                <p className="card-text">Jul, 03 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={berita4} className="card-img-top" alt="Berita 4" />
              <div className="card-body">
                <Link to="/berita4">Koordinasi dan Verifikasi Kegiatan IDRIP untuk Mitigasi dan Peringatan Dini 2024-2025</Link>
                <p className="card-text">Jul, 02 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={berita6} className="card-img-top" alt="Berita 5" />
              <div className="card-body">
                <Link to="/berita6">Waspadai Potensi Kebakaran Lahan di Area Gunung dan Perbukitan</Link>
                <p className="card-text">Jul, 03 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={berita5} className="card-img-top" alt="Berita 6" />
              <div className="card-body">
                <Link to="/berita5">DWP BPBD DIY Memperdalam Pengetahuan Sejarah DI Yogyakarta di Diorama DPAD DIY</Link>
                <p className="card-text">Jul, 02 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informasi;
