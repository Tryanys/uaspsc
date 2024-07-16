import React from 'react';
import berita6 from '../assets/artikel1.jpg';
import './Berita3.css';

function Berita6() {
  return (
    <article className="berita-container">
      <h4>Waspadai Potensi Kebakaran Lahan di Area Gunung dan Perbukitan</h4>
      <img src={berita6} height="400" className="mr-2" alt="Image" />
      <p>Proses pemadaman kebakaran area perkebunan jati di Jatirejo, Lendah, Kulon Progo (21/06/2024)</p>
      <p style={{ textAlign: 'justify' }}>
        <span>Yogyakarta, 26 Juni 2024. Di musim kemarau ini, dimana curah hujan sudah jauh berkurang diantaranya menyebabkan selain berkurangnya ketersediaan sumber air bersih dibeberapa wilayah, juga membuat vegetasi area ladang, lahan maupun hutan menjadi kering. Mengeringnya vegetasi seperti pada semak-semak ini menjadi rentan menyebabkan fenomena kebakaran lahan terutama di perbukitan dan pegunungan.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
      <span>BPBD DIY menghimbau kepada masyarakat yang tinggal di area pegunungan atau perbukitan untuk mewaspadai potensi munculnya kebakaran lahan dan hutan (Karhutla) di musim kemarau ini. Kepala Pelaksana BPBD DIY Drs. Noviar Rahmad, M. Si. mengatakan bahwa wilayah DIY saat kemarau sekarang memang rentan terjadi kebakaran lahan saat musim kemarau seperti yang tejadi di Kab. Kulon Progo belum lama ini. Oleh karenanya beliau meminta masyarakat agar tidak membakar sampah di area lahan kering. Selain membakar sampah, pembukaan lahan baru dengan cara dibakar juga tidak dibenarkan. terutama di hutan atau di tempat yang mudah terbakar.</span>
      </p>
      <p style={{ textAlign: 'justify' }}>
        <span>Terlepas dari upaya pencegahan terjadinya kebakaran hutan dan lahan dengan sosialisasi meningkatkan kesadaran masyarakat akan bahaya Karhutla, BPBD DIY juga telah berkoordinasi dengan BPBD maupun Damkarmat ditingkat Kabupaten/Kota untuk selalu siaga jika ditemukan kejadian kebakaran baik itu kebakaran bangunan maupun juga kebakaran hutan dan lahan yang kasusnya mulai ditemui pada pertengahan musim kemarau ini.</span>
      </p>
      <p>Dikutip melalui Jogja Politan Harian Jogja (24/06)</p>
      <h9>
        <a href="https://www.instagram.com/explore/tags/kebakaranhutanlahan/">#KebakaranHutanLahan</a>
        <a href="https://www.instagram.com/explore/tags/bpbddiy/">#BPBDDIY</a>
        <a href="https://www.instagram.com/explore/tags/damkarmat/">#Damkarmat</a>
      </h9>
    </article>
  );
};

export default Berita6;
