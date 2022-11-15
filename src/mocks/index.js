import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const AxiosMockCreate = new MockAdapter(axios);

export const Axios = axios