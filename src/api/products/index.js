import { Axios, AxiosMockCreate } from "../../mocks";
import productsData from "../../mocks/products/products.json";

AxiosMockCreate.onGet("/products").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { products: productsData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/products").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/products\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const productsAPI = Axios.get("/products");
export const productsDeleteAPI = (id) => Axios.delete(`/products/${id}`);
export const productsCreateAPI = (item) => Axios.post(`/products`, item);
