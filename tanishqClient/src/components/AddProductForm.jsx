import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categories/action";
import { getMetals } from "../store/metal/action";
import { getGenders } from "../store/gender/action";
import { addProducts } from "../store/product/action";

const AddProductForm = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getMetals());
    dispatch(getGenders());
  }, []);

  const categories = useSelector((state) => state.categoriess.categoires);
  const metals = useSelector((state) => state.metalss.metals);
  const genders = useSelector((state) => state.genderss.genders);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    collections: "",
    style_type: "",
    description: "",
    product_details: "",
    discount: "",
    height: "",
    width: "",
    gross_weight: "",
    jewellery_type: "",
    purity: "",
    metal:"",
    gender:"",
    thumbnail: null,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "thumbnail") {
        setProduct((prev) => ({ ...prev, thumbnail: files[0] }));
      } else {
        setProduct((prev) => ({ ...prev, images: [...files] }));
      }
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("collections", product.collections);
    formData.append("style_type", product.style_type);
    formData.append("description", product.description);
    formData.append("product_details", product.product_details);
    formData.append("discount", product.discount);
    formData.append("height", product.height);
    formData.append("width", product.width);
    formData.append("gross_weight", product.gross_weight);
    formData.append("jewellery_type", product.jewellery_type);
    formData.append("purity", product.purity);
    formData.append("thumbnail", product.thumbnail);
    formData.append("metal", product.metal);
    formData.append("gender", product.gender);

    if (product.images && product.images.length > 0) {
      for (let i = 0; i < product.images.length; i++) {
        formData.append("images", product.images[i]);
      }
    }

    dispatch(addProducts(formData));
    console.log("Form Data:", formData);
    setProduct({
      title: "",
      price: "",
      category: "",
      collection: "",
      style_type: "",
      description: "",
      product_details: "",
      discount: "",
      height: "",
      width: "",
      gross_weight: "",
      jewellery_type: "",
      purity: "",
      thumbnail: null,
      images: [],
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="product name"
          value={product.title}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input
          type="number"
          name="price"
          placeholder="product price"
          value={product.price}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Collection:</label>
        <input
          name="collections"
          type="text"
          placeholder="in which collection product belong"
          value={product.collections}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Style Type:</label>
        <input
          name="style_type"
          type="text"
          placeholder="what is the style of product ?"
          value={product.style_type}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          placeholder="product description"
          value={product.description}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Product Details:</label>
        <textarea
          name="product_details"
          placeholder="detail about product"
          value={product.product_details}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Discount:</label>
        <input
          type="text"
          name="discount"
          placeholder="Discount you wanna give"
          value={product.discount}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Height:</label>
        <input
          type="text"
          placeholder="Height"
          name="height"
          value={product.height}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Width:</label>
        <input
          type="text"
          name="width"
          placeholder="Width"
          value={product.width}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Gross Weight:</label>
        <input
          type="text"
          name="gross_weight"
          placeholder="Weight"
          value={product.gross_weight}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Jewellery Type:</label>
        <input
          name="jewellery_type"
          type="text"
          placeholder="type of jewellery"
          value={product.jewellery_type}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Purity:</label>
        <input
          placeholder="Purity"
          name="purity"
          type="text"
          value={product.purity}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Metal:</label>
        <select
          name="metal"
          value={product.metal}
          onChange={handleChange}
          className="form-select"
        >
          <option defaultValue value="">
            Select a metal
          </option>
          {metals.map((metal) => (
            <option key={metal._id} value={metal._id}>
              {metal.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Gender:</label>
        {genders.map((gender) => (
          <div className="form-check" key={gender._id}>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id={gender._id}
              value={gender._id}
              onChange={handleChange}
              checked={product.gender === gender._id}
            />
            <label className="form-check-label" htmlFor={gender._id}>
              {gender.name}
            </label>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Thumbnail:</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleChange}
          accept="image/*"
          className="form-control-file"
        />
      </div>

      <div className="form-group">
        <label>Images:</label>
        <input
          type="file"
          name="images"
          onChange={handleChange}
          accept="image/*"
          multiple
          className="form-control-file"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Product
      </button>
    </form>
  );
};

export default AddProductForm;
