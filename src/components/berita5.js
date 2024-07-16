import React from 'react';
import berita5 from '../assets/berita5.jpeg';
import './Berita3.css';

function Berita5() {
  return (
    <article className="berita-container">
      <h4>DWP BPBD DIY Memperdalam Pengetahuan Sejarah DI Yogyakarta di Diorama DPAD DIY</h4>
      <img src={berita5} height="400" className="mr-2" alt="Image" />
      <p>DWP BPBD DIY kunjungan ke Diorama Arsip Jogja (21/06/2024)</p>
      <p style={{ textAlign: 'justify' }}>
        <span>Pada hari Jumat, 21 Juni 2024, anggota Dharma Wanita Persatuan (DWP) BPBD DIY mengadakan kunjungan istimewa ke Diorama DPAD DIY guna memperdalam pengetahuan tentang sejarah Daerah Istimewa Yogyakarta. Kunjungan ini bertujuan untuk mengenal lebih dekat perjalanan sejarah dan budaya yang yang ada di DIY.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Kegiatan dimulai pukul 09.00 WIB di Diorama DPAD DIY. Acara ini dihadiri oleh anggota dari Dharma Wanita BPBD DIY yang dipimpin oleh Ibu Sri Yudawaty, ketua DWP BPBD DIY. Mereka disambut hangat oleh staf DPAD DIY yang siap untuk memandu kunjungan ini.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Selama kunjungan, para anggota DWP BPBD DIY diajak untuk melihat berbagai pameran diorama yang menggambarkan peristiwa-peristiwa penting dalam sejarah DI Yogyakarta. Masing-masing diorama dilengkapi dengan penjelasan mendetail yang memudahkan para pengunjung untuk memahami konteks sejarah setiap periode.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Menurut Ibu Sri Yudawaty, kunjungan ini sangat berarti karena memberikan pemahaman yang lebih mendalam tentang asal-usul serta nilai-nilai budaya yang terkandung dalam sejarah Yogyakarta. "Kami berharap dengan memahami sejarah lebih baik, kami dapat lebih menghargai dan melestarikan warisan budaya yang kita miliki," ujarnya.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Kunjungan ini tidak hanya berfungsi sebagai acara edukasi tetapi juga memperkuat solidaritas antaranggota DWP BPBD DIY dalam memperluas wawasan budaya dan sejarah yang merupakan bagian tak terpisahkan dari identitas masyarakat DI Yogyakarta.</span>
      </p>
      <h9>
        <a href="https://www.instagram.com/explore/tags/dharmawanitapersatuan/">#dharmawanitapersatuan</a>
        <a href="https://www.instagram.com/explore/tags/bpbddiy/">#bpbddiy</a>
      </h9>
    </article>
  );
};

export default Berita5;
