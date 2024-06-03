import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import AddProductForm from "./AddProductForm";
import {
  deleteProduct,
  getAllProducts,
  getDashProducts,
} from "../store/product/action";
import EditProductForm from "./EditProductForm";

const ProductDashInfo = () => {
  const dispatch = useDispatch();
  const [pageCount, Setpagecount] = useState(1);
  const [search, Setvalue] = useState("");
  const [val, Setval] = useState(false);
  useEffect(() => {
    dispatch(getDashProducts({ page: pageCount, size: "8", search:search }));
  }, [search, pageCount]);

  const handleOnchange = (e) => {
    Setval(true)
    Setvalue(e.target.value);
    
  };

  const data = useSelector((state) => state.productss.products);
  const Dashdata = useSelector((state) => state.productss.Dashproducts);

  const [Productshow, setProductShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleProductClose = () => setProductShow(false);
  const handleProductShow = () => setProductShow(true);

  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const singleProduct = data.filter((item) => item._id == id);
    setProduct(singleProduct);
    setShow(true);
  };

  const handleEditShow = (id) => {
    const singleProduct = data.filter((item) => item._id == id);
    setProduct(singleProduct);
    setLgShow(true);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="border d-inline-block p-2 text-left">
          Total Products {data.length}
        </h4>
        <input
          className="searchInp w-50 ms-5 form-control py-2"
          type="search"
          onChange={handleOnchange}
          placeholder="Search Products ..."
          aria-label="Search"
        />
        <button
          className="btn btn-primary ms-auto me-2"
          onClick={handleProductShow}
        >
          <FaPlus /> Add Product
        </button>
      </div>

      <div className="mt-2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Collection</th>
              <th scope="col">Purity</th>
              <th scope="col">jewellery Type</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {Dashdata.map((item, i) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      className="dashPimg"
                      src={`http://localhost:8001/uploads/${item.thumbnail}`}
                      alt=""
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td>{item.collections}</td>
                  <td>{item.purity}</td>
                  <td>{item.jewellery_type}</td>
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

        {Dashdata.length == 0 ? <h3 className="text-center">No Product Found</h3> :""}

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                onClick={() => Setpagecount(pageCount - 1)}
                className="page-link"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo; Previous</span>
              </button>
            </li>
           
            <li className="page-item">
              <button
                className="page-link"
                
                onClick={() => Setpagecount(pageCount + 1)}
                aria-label="Next"
              >
                <span aria-hidden="true" >Next &raquo;</span>
              </button>
            </li>
          </ul>
        </nav>

        {product.map((item) => {
          return (
            <Modal show={show} className="productModal" onHide={handleClose}>
              <Modal.Body>
                <div className="d-flex align-items-center">
                  <img
                    src={`http://localhost:8001/uploads/${item.thumbnail}`}
                    className="w-25"
                    alt=""
                  />
                  <h6 className="ms-2">{item.title}</h6>
                </div>
                Are you sure you want to delete this product !!!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteProduct(item._id));
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          );
        })}

        <Modal show={Productshow} size="lg" onHide={handleProductClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddProductForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleProductClose}>
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
              Edit Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProductForm OneProduct={product} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ProductDashInfo;
