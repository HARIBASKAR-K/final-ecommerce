import API from "./axios";

export const placeOrder = (orderData) => API.post("/orders", orderData);
export const getMyOrders = () => API.get("/orders/myorders");