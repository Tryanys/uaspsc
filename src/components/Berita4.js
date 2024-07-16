import React from 'react';
import berita4 from '../assets/berita4.jpg';
import './Berita4.css';

function Berita4() {
  return (
    <article className="berita-container">
      <h4>Koordinasi dan Verifikasi Kegiatan IDRIP untuk Mitigasi dan Peringatan Dini 2024-2025</h4>
      <img src={berita4} className="mr-2" alt="Image" />
      <p style={{ textAlign: 'justify' }}>
        <span>Yogyakarta, 2 Juli 2024. Paradigma penanggulangan bencana telah bergeser yang sebelumnya besifat responsive menjadi bersifat preventif dan mitigatif. Dalam rangka mendukung upaya tersebut, BNPB melaksanakan Indonesia Disaster Resilience Initiatives Project (IDRIP) tahun 2024 khususnya kegiatan Rambu, Papan Evakuasi dan Informasi Bencana.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Dalam kesempatan ini, Drs. Noviar Rahmad, M.Si. menyapaikan bahwa salah satu upaya agar pemahaman informasi risiko dan peringatan dini masyarakat dapat meningkat perlu didukung dengan media penyampaian informasi yang memadai. Adapun salah satu media tersebut adalah berupa rambu, papan evakuasi dan informasi bencana.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Selain itu, dalam rangka membangun kesadaran dan kesiapsiagaan masyarakat yang ada di sekitar wilayah terdampak bencana, sirene menjadi salah satu moda diseminasi yang direkomendasikan. Karena sirene dapat membantu diseminasi informasi ketika masyarakat di wilayah terdampak tidak melihat informasi peringatan dari televisi, telepon seluler, ataupun radio, sedangkan ancaman bencana bersifat cepat.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Proses verifikasi IDRIP tahun 2024 khususnya kegiatan Rambu, Papan Evakuasi dan Informasi Bencana terhadap usulan daerah ke BNPB dilakukan di The Alana Hotel & Conference Center Malioboro Yogyakarta. Kegiatan ini dilaksanakan pada tanggal 1 – 4 Juli 2024.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Kegiatan ini diharapkan dapat memberikan dan melahirkan rumusan-rumusan yang dapat membawa kemajuan dan perbaikan di bidang pencegahan, khususnya mitigasi dan peringatan dini di Indonesia. Sehingga tujuan untuk mewujudkan masyarakat yang tangguh bencana akan dapat tercapai.</span>
      </p>
      <h9>
        <a href="https://www.instagram.com/explore/tags/idrip/">#idrip</a>
      </h9>
    </article>
  );
};

export default Berita4;
