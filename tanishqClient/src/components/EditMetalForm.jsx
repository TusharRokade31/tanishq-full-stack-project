import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMetal } from "../store/metal/action";

const EditMetalForm = (OneProduct) => {
  const Obj = OneProduct.OneMetal[0];
  console.log(Obj);

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: Obj.name,
    description: Obj.description,
  });

  const handleChange = (e) => {
    const { name, value} = e.target;

      setProduct((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    dispatch(updateMetal({ values: product, ID: Obj._id }));
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
        Update Metal
      </button>
    </form>
  );
};

export default EditMetalForm;
