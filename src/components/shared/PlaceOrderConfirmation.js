import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function PlaceOrderConfirmation({ showModal, hideConfirmationModal, order }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const confirmOrderHandler = () => {
    // Simulate placing the order
    // You can replace this with your actual order placement logic.

    // For this simplified example, we'll just set orderPlaced to true.
    setOrderPlaced(true);
  };

  // Reset the orderPlaced state when the modal is hidden
  const handleModalHide = () => {
    setOrderPlaced(false);
    hideConfirmationModal();
  };

  return (
    <Modal show={showModal} onHide={handleModalHide}>
      <Modal.Header closeButton>
        <Modal.Title>Place Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display order details here */}
        <p>Product Name: {order.name}</p>
        <p>Quantity: {order.quantity} Litre unit</p>
        <p>Price: {order.price}</p>
        {/* Add more details as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={confirmOrderHandler}>
          Confirm Order
        </Button>
      </Modal.Footer>

      {/* Display the success message as a separate card when orderPlaced is true */}
      {orderPlaced && (
        <Modal show={orderPlaced} onHide={handleModalHide}>
          <Modal.Header closeButton>
            <Modal.Title>Order Placed Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your order has been placed successfully!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModalHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Modal>
  );
}

export default PlaceOrderConfirmation;

