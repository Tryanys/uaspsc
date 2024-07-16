import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoChatboxEllipses } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newComment = { name, email, message };
    dispatch({ type: 'ADD_COMMENT', payload: newComment });
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Tinggalkan Komentar <IoChatboxEllipses /></h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

           <button className='button' type="submit">submit</button>
          </Form>
          <div className="mt-3">
            <h5>Total Komentar: {comments.length}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentForm;
