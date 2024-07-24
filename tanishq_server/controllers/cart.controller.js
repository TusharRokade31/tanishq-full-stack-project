import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

export const addToCart = async (req, res) => {
  try {
    const { productID, userID } = req.body;

    const cartItems = await cartModel.findOne({
      productID: productID,
      userID: userID,
    });

    if (cartItems) {
      const quantity = cartItems.quantity + 1;
      if (quantity > 10) {
        return res.status(200).json({
          message: "Cannot add more than 10 items",
        });
      }
      const updateCart = await cartModel.updateOne(
        { _id: cartItems._id },
        {
          $set: {
            quantity: quantity,
          },
        }
      );
      if (updateCart.acknowledged) {
        return res.status(200).json({
          message: "Cart updated",
        });
      }
    } else {
      const product = await productModel.findOne({ _id: productID });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const saveCart = new cartModel({
        userID: userID,
        productID: productID,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.thumbnail,
      });

      await saveCart.save();
      return res.status(200).json({
        data: saveCart,
        message: "Successfully added to cart",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getCartData = async (req, res) => {
  try {
    const { userID } = req.body;
    const cartItems = await cartModel
      .find({ userID: userID })
      .populate("productID")
      .populate("userID");
    if (cartItems) {
      return res.status(200).json({
        data: cartItems,
        message: "success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const clearCart = async (req, res) => {
  try {
    const { userID } = req.body;
    await cartModel.deleteMany({ userID: userID });
    return res.status(200).json({
      message: "Cart cleared successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const updateQuantity = async (req, res)=>{
try {
  const cartID = req.params.cart_id
  const {type} = req.query
  const cartItem = await cartModel.findOne({ _id: cartID });

  var quantity = cartItem.quantity;
    if (type == "inc") {
      quantity += 1;
    }
    if (type == "dec") {
      quantity -= 1;
    }

    if (quantity > 10) {
      return res.status(200).json({
        message: "Can not more than 10 items",
      });
    }

    if (quantity < 1) {
      const deleteItem = await cartModel.deleteOne({ _id: cartID });
      if (deleteItem.acknowledged) {
        return res.status(200).json({
          message: "removed",
        });
      }
    }

    const update = await cartModel.updateOne(
      { _id: cartID },
      {
        $set: {
          quantity: quantity,
        },
      }
    );

    if (update.acknowledged) {
      return res.status(200).json({
        message: "updated",
      });
    }
  
} catch (error) {
  return res.status(500).json({
    message:error.message
  })
}
}



export const deleteCartItem = async (req, res) => {
  try {
    const cartID = req.params.cart_id;
    const deleteItem = await cartModel.deleteOne({ _id: cartID });
    if (deleteItem.acknowledged) {
      return res.status(200).json({
        message: "deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
