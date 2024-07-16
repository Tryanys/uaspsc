import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ExampleCarouselImage from './components/ExampleCarouselImage';
import Berita1 from './components/Berita1';
import Berita2 from './components/Berita2';
import Berita3 from './components/Berita3';
import Berita4 from './components/Berita4';
import Berita5 from './components/berita5';
import Berita6 from './components/berita6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Informasi from './components/Informasi';
import Contact from './components/Contact';
import './App.css';
import firstSlideImage from './assets/gambar1.jpg';
import secondSlideImage from './assets/gambar2.jpg';
import thirdSlideImage from './assets/gambar3.jpg';
import imgBerita1 from './assets/berita1.JPG';
import imgBerita2 from './assets/berita2.jpeg';
import imgBerita3 from './assets/berita3.JPG';

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage src={firstSlideImage} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage src={secondSlideImage} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={thirdSlideImage} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Container className="mt-5">
        <Row>
          <Tujuan
            title="Tujuan"
            deskripsi="Tanggap Darurat Masyarakat bertujuan untuk meningkatkan kesadaran dan kesiapsiagaan masyarakat dalam menghadapi berbagai situasi darurat. Website ini menyediakan informasi terstruktur dan terpercaya, serta memberikan panduan praktis dan langkah-langkah preventif agar pengguna dapat mengatasi bencana alam, kecelakaan, dan situasi darurat lainnya dengan lebih siap dan efektif."
          />
          <Misi
            title="Misi"
            deskripsi="Misi Tanggap Darurat Masyarakat adalah membangun komunitas yang tanggap terhadap keadaan darurat. Kami berkomitmen untuk mengedukasi tentang pentingnya persiapan sebelumnya, serta mempromosikan kepedulian dan keterlibatan aktif dalam upaya mitigasi risiko di tingkat lokal maupun nasional."
          />
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgBerita1} />
              <Card.Body>
                <Card.Title>Geladi Posko Tanggap Darurat di Lingkungan Karaton</Card.Title>
                <Link to="/berita1">More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgBerita2} />
              <Card.Body>
                <Card.Title>Pendampingan Petugas Jitupasna dan Penyusunan R3P</Card.Title>
                <Link to="/berita2">More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgBerita3} />
              <Card.Body>
                <Card.Title>Pemetaan Area Potensi Rawan Bencana dan Prosedur Evakuasi di Lingkungan Karaton</Card.Title>
                <Link to="/berita3">More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <Router>
        <Navbar expand="lg" className={isDarkMode ? 'dark-navbar' : 'light-navbar'}>
          <Container>
            <Navbar.Brand as={Link} to="/">Tanggap Darurat Masyarakat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/informasi">Informasi</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              <button className="btn btn-outline-light ms-2" onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={isDarkMode ? 'icon-sun icon' : 'icon-moon icon'} />
              </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita1" element={<Berita1 />} />
          <Route path="/berita2" element={<Berita2 />} />
          <Route path="/berita3" element={<Berita3 />} />
          <Route path="/berita4" element={<Berita4 />} />
          <Route path="/berita5" element={<Berita5 />} />
          <Route path="/berita6" element={<Berita6 />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

function Tujuan(props) {
  return (
    <Col>
      <h2 className="text-center">{props.title}</h2>
      <p className="text-justify">
        {props.deskripsi}
      </p>
    </Col>
  );
}

function Misi(props) {
  return (
    <Col className="text-center">
      <h2>{props.title}</h2>
      <p className="text-justify">
        {props.deskripsi}
      </p>
    </Col>
  );
}

export default function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
