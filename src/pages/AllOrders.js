import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";
import PlaceOrderConfirmation from "../components/shared/PlaceOrderConfirmation";
import './index.css';

function AllOrders() {
  const [allOrders, setAllOrders] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);
  const [showPlaceOrderModal, setShowPlaceOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/orders").then((response) => {
      setAllOrders(response.data);
    });
  }, []);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };

  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:4000/orders/${itemToDeleteId}`)
      .then((response) => {
        setAllOrders((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  const openPlaceOrderModalHandler = (order) => {
    // Set the selected order before opening the modal
    setSelectedOrder(order);
    setShowPlaceOrderModal(true);
  };

  const hidePlaceOrderModalHandler = () => {
    setShowPlaceOrderModal(false);
  };

  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Do you want to delete this item?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>

      <Row xs={1} md={3} className="g-2">
        {allOrders.map((item) => (
          <Col key={item.id}>
             
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Quantity(Litre Units) - {item.quantity}</Card.Text>
                <Card.Text>Price - {item.price}</Card.Text>
                <Button className="custom-button"
                  variant="primary"
                  onClick={() => navigate(`/update-order/${item.id}`)} 
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => openConfirmDeleteModalHandler(item.id)} className="custom-button1"
                >
                  Delete
                </Button>

                {/* Place Order button */}
                <Button onClick={() => openPlaceOrderModalHandler(item)} className="custom-button2">
                  Place Order
                </Button>
              </Card.Body>
            </Card>
            
          </Col>
        ))}
      </Row>
      <Row className="mt-2">
        <Col md={{ span: 5, offset: 5 }}>
          <Button className = "custom-button3" variant="primary" onClick={() => navigate("/add-order")}>
            Add New Order
          </Button>
        </Col>
      </Row>

      {/* Render Place Order Confirmation Modal */}
      {selectedOrder && (
        <PlaceOrderConfirmation
          showModal={showPlaceOrderModal}
          hideConfirmationModal={hidePlaceOrderModalHandler}
          order={selectedOrder}
        />
      )}
    </>
  );
}

export default AllOrders;