import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../store/categories/action";

const EditCategoryForm = (OneMetal) => {
  const Obj = OneMetal.OneCategory[0];
  console.log(Obj);

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: Obj.name,
    description: Obj.description,
    CategoryType: Obj.CategoryType,
    image: Obj.image,
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


    // console.log(Obj._id);

    dispatch(updateCategory({ values: formData, ID: Obj._id }));
    console.log({ values: formData, ID: Obj._id });
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
        Update Category
      </button>
    </form>
  );
};

export default EditCategoryForm;
