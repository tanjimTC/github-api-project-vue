import axios from "axios";
import AxiosConfig from "../AxiosConfig/AxiosConfig";

export const getUserInfo = async (arg) => {
  try {
    const result = await AxiosConfig.get(`/users/${arg}`);
    return {
      success: true,
      status: result.status,
      response: result.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      response: error?.response?.data,
    };
  }
};

export const getUserInfoByUrl = async (url) => {
  console.log("herreee", url);
  try {
    const result = await axios.get(url);
    return {
      success: true,
      status: result.status,
      response: result.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      response: error?.response?.data,
    };
  }
};

export const getUserByName = async (arg) => {
  try {
    const result = await AxiosConfig.get(`search/users?q=${arg}+in:user`);
    return {
      success: true,
      status: result.status,
      response: result.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status,
      response: error?.response?.data,
    };
  }
};
