import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/categories/action";

const AddCategoryForm = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    CategoryType: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "image") {
        setProduct((prev) => ({ ...prev, image: files[0] }));
      }
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("CategoryType", product.CategoryType);
    formData.append("image", product.image);

    dispatch(addCategory(formData));
    console.log("Form Data:", formData);
    setProduct({
      name: "",
      description: "",
      CategoryType: "",
      image: null,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label>Category Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={product.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Category description"
          value={product.description}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Category Type:</label>
        <input
          type="text"
          name="CategoryType"
          placeholder="Category Type"
          value={product.CategoryType}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group my-2">
        <label>Thumbnail:</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleChange}
          accept="image/*"
          className="form-control-file"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Product
      </button>
    </form>
  );
};

export default AddCategoryForm;
