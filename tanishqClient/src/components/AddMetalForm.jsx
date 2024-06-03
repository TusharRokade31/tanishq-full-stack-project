import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMetal } from "../store/metal/action";

const AddMetalForm = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMetal(product));
    setProduct({
      name: "",
      description: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label>Metal Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Metal Name"
          value={product.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Metal description"
          value={product.description}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>


      <button type="submit" className="btn btn-primary">
        Submit Product
      </button>
    </form>
  );
};

export default AddMetalForm;
