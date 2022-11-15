import { Axios, AxiosMockCreate } from "../../mocks";
import ordersData from "../../mocks/orders/orders.json";

AxiosMockCreate.onGet("/orders").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { orders: ordersData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/orders").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/orders\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const ordersAPI = Axios.get("/orders");
export const ordersDeleteAPI = (id) => Axios.delete(`/orders/${id}`);
export const ordersCreateAPI = (item) => Axios.post(`/orders`, item);
