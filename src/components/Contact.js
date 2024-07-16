import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import './Contact.css';
import image1 from '../assets/ryan.jpeg';
import image2 from '../assets/haekal.jpeg';
import image3 from '../assets/akhmad.jpg';

const fetchData = () => { 
  return [
    { name: 'Trian Yuka Sulistya Jati', nim: 'A11.2021.13469', phone: '08990756429', image: image1 },
    { name: 'Haekal Akmal Ramadhan', nim: 'A11.2021.13719', phone: '085866144468', image: image2 },
    { name: 'Akhmad Rifqun Nabil', nim: 'A11.2022.14813', phone: '0895361212036', image: image3 }
  ]; 
};

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const data = fetchData();
    setContacts(data);
  }, []);

  return (
    <div className="App">
      <div className='cardContainer'>
        {contacts.map((contact, index) => (
          <div className='card' key={index}>
            <img src={contact.image} alt="Profile Icon" className='profileImage' />
            <div className='profile'>Front Dev</div>
            <div className='name'>NAMA : {contact.name}</div>
            <div className='desc'>NIM : {contact.nim}</div>
            <div className='desc'>No. Telp : {contact.phone}</div>
          </div>
        ))}
      </div>
      
      <CommentForm />
    </div>
  );
};

export default Contact;
