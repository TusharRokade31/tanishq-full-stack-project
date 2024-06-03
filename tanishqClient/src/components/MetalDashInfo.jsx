import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import AddMetalForm from "./AddMetalForm";
import { deleteMetal, getMetals } from "../store/metal/action";
import EditMetalForm from "./EditMetalForm";


const MetalDashInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMetals());
  }, []);

  
  const data = useSelector((state) => state.metalss.metals);

  const [Metalshow, setMetalShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleMetalClose = () => setMetalShow(false);
  const handleMetalShow = () => setMetalShow(true);

  const [show, setShow] = useState(false);
  const [metal, setMetal] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const singleMetal = data.filter((item) => item._id == id);
    setMetal(singleMetal);
    setShow(true);
  };

  const handleEditShow = (id) => {
    const singleMetal = data.filter((item) => item._id == id);
    setMetal(singleMetal);
    setLgShow(true);
  };

  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center">
        <h4 className="border d-inline-block p-2 text-left">
          Total Metals {data.length}
        </h4>
        <button
          className="btn btn-primary ms-auto me-2"
          onClick={handleMetalShow}
        >
          <FaPlus /> Add Metal
        </button>
      </div>

      <div className="mt-2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td className="w-75">{item.description}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEditShow(item._id)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleShow(item._id)}
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {metal.map((item) => {
          return (
            <Modal show={show} className="productModal" onHide={handleClose}>
              <Modal.Body>
                <div className="d-flex align-items-center">
                  <h6 className="ms-2">{item.name}</h6>
                </div>
                Are you sure you want to delete this metal !!!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteMetal(item._id));
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          );
        })}

        <Modal show={Metalshow} size="lg" onHide={handleMetalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Metal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddMetalForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleMetalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Metal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditMetalForm OneMetal={metal} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MetalDashInfo;
