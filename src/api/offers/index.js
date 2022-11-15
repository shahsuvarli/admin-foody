import { Axios, AxiosMockCreate } from "../../mocks";
import offersData from "../../mocks/offers/offers.json";

AxiosMockCreate.onGet("/offers").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { offers: offersData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/offers").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/offers\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const offersAPI = Axios.get("/offers");
export const offersDeleteAPI = (id) => Axios.delete(`/offers/${id}`);
export const offersCreateAPI = (item) => Axios.post(`/offers`, item);
