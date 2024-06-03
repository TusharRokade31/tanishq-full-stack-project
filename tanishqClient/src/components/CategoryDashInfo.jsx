import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import { deleteCategory, getCategories } from "../store/categories/action";
import AddCategoryForm from "./AddCategoryForm";
import EditCategoryForm from "./EditCategoryForm";


const CategoryDashInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  
  const data = useSelector((state) => state.categoriess.categoires);

  const [Categoryshow, setCategoryShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleCategoryClose = () => setCategoryShow(false);
  const handleCategoryShow = () => setCategoryShow(true);

  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const singleCategory = data.filter((item) => item._id == id);
    setCategory(singleCategory);
    setShow(true);
    console.log(category)
  };

  const handleEditShow = (id) => {
    const singleCategory = data.filter((item) => item._id == id);
    setCategory(singleCategory);
    setLgShow(true);
  };

  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center">
        <h4 className="border d-inline-block p-2 text-left">
          Total Categorys {data.length}
        </h4>
        <button
          className="btn btn-primary ms-auto me-2"
          onClick={handleCategoryShow}
        >
          <FaPlus /> Add Category
        </button>
      </div>

      <div className="mt-2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Images</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">CategoryType</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      className="dashPimg"
                      src={`http://localhost:8001/uploads/${item.image}`}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.CategoryType}</td>
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

        {category.map((item) => {
          return (
            <Modal show={show} className="productModal" onHide={handleClose}>
              <Modal.Body>
                <div className="d-flex align-items-center">
                  <img
                    src={`http://localhost:8001/uploads/${item.image}`}
                    className="w-25"
                    alt=""
                  />
                  <h6 className="ms-2">{item.name}</h6>
                </div>
                Are you sure you want to delete this category !!!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteCategory(item._id));
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          );
        })}

        <Modal show={Categoryshow} size="lg" onHide={handleCategoryClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddCategoryForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCategoryClose}>
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
              Edit Category
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditCategoryForm OneCategory={category} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CategoryDashInfo;
