import userModel from "../model/userModel.js";
import orderModel from "../model/orderModel.js";
import productModel from "../model/productModel.js";
import Razorpay from "razorpay";
import crypto from "crypto";

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_x2sm0CSbyNE72h",
  key_secret: "Yx8PhfM6IRmuuGGgsovzavqS",
});

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Validate that each item has productId and quantity
    if (!items || !Array.isArray(items) || items.some(item => !item.productId || !item.quantity)) {
      return res.json({ success: false, message: 'Each item must have productId and quantity' });
    }

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, data: newOrder });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



// Razorpay Order Creation
const placeOrderRazorpay = async (req, res) => {
  try {
    const { amount } = req.body; 

    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({ success: true, order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Razorpay Payment Verification
const verifyPayment = async (req, res) => {
  try {
    const { order_id, payment_id, razorpay_signature, userId, items, amount, address } = req.body;

    // Generate HMAC SHA256 signature
    const generatedSignature = crypto
      .createHmac("sha256", "Yx8PhfM6IRmuuGGgsovzavqS")
      .update(order_id + "|" + payment_id)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      // Format items to store only productId and quantity
      const formattedItems = items.map((item) => ({
        productId: item.productId, // Ensure frontend sends this
        quantity: item.quantity,
      }));

      const orderData = {
        userId,
        items: formattedItems,
        amount,
        address,
        paymentMethod: "Razorpay",
        payment: true,
        date: Date.now(),
      };

      const newOrder = new orderModel(orderData);
      await newOrder.save();

      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      res.json({ success: true, message: "Payment verified", data: newOrder });
    } else {
      res.json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().lean(); // Get all orders

    // Fetch user details for each order
    const ordersWithUserDetails = await Promise.all(
      orders.map(async (order) => {
        const user = await userModel.findById(order.userId).select("username"); // Fetch only username
        return {
          ...order,
          username: user ? user.username : "Unknown User",
        };
      })
    );

    res.json({ success: true, data: ordersWithUserDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const userOrders = async (req, res) => {
  try {
    console.log("Received request for user orders"); // Log request arrival

    const userId = req.user ? req.user.id : req.body.userId; // Ensure userId is fetched
    console.log("User ID:", userId);

    if (!userId) {
      return res.json({ success: false, message: "User not authenticated" });
    }

    let orders = await orderModel.find({ userId });
    console.log("Fetched Orders:", orders);

    if (!orders.length) {
      return res.json({ success: false, message: "No orders found" });
    }

    // Populate product details for each item
    orders = await Promise.all(
      orders.map(async (order) => {
        const populatedItems = await Promise.all(
          order.items.map(async (item) => {
            const product = await productModel.findById(item.productId);
            return {
              ...item,
              name: product?.name || "Unknown Item",
              image: product?.image || "fallback-image-url",
              price: product?.price || item.price,
              colour: product?.colour || "Not Available",
            };
          })
        );

        return {
          ...order.toObject(),
          items: populatedItems,
        };
      })
    );

    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.json({ success: false, message: error.message });
  }
};


const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json({ success: true, data: updatedOrder });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    await orderModel.findByIdAndDelete(orderId);
    res.json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, data: { status: order.status } });
  } catch (error) {
    console.error("Error fetching order status:", error);
    res.json({ success: false, message: error.message });
  }
};


export { placeOrder, placeOrderRazorpay, verifyPayment, allOrders, userOrders, updateStatus, deleteOrder, getOrderStatus };