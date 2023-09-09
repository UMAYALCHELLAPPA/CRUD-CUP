import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import './AddOrder.css'; // Import your custom CSS files here
import Card from "react-bootstrap/Card";

function AddOrder() {
  const orderName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  
  const navigate = useNavigate();
 
  const addOrderHandler = () => {
    var payload = {
      name: orderName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
    };
    axios.post("http://localhost:4000/orders", payload).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="form-container">
      
      <Card>
      <Card.Body>
        <Card.Title>CREATE</Card.Title>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control className="form-input" type="text" ref={orderName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label className="form-label">Quantity(Litre Units)</Form.Label>
          <Form.Control className="form-input" type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label className="form-label">Price</Form.Label>
          <Form.Control className="form-input" type="number" ref={price} />
        </Form.Group>
        <Button className="custom-but" variant="primary" type="button" onClick={addOrderHandler}>
          Add
        </Button>
      </Form>
      </Card.Body>
      </Card>
    </div>
  );
}

export default AddOrder;
