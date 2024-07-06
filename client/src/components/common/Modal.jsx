import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const CustomModal=(props)=> {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Call for order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          01712-6554968
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CustomModal