import { Axios, AxiosMockCreate } from "../../mocks";
import restaurantData from "../../mocks/restaurant/restaurant.json";

AxiosMockCreate.onGet("/restaurant").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurant: restaurantData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/restaurant").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/restaurant\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const restaurantAPI = Axios.get("/restaurant");
export const restaurantDeleteAPI = (id) => Axios.delete(`/restaurant/${id}`);
export const restaurantCreateAPI = (item) => Axios.post(`/restaurant`, item);
