// axios library
import axios from "axios";
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

// request

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

///////////////////
// if success return { isSuccess :true  , data : object}
// if failure return { isFailure : true , status : string , msg: string , code :  int}
const processResponse = (res) => {
  if (res?.status === 200) {
    return { isSuccess: true, data: res.data };
  } else {
    return {
      isFailure: true,
      status: res?.status,
      msg: res?.msg,
      code: res?.code,
    };
  }
};
///////////////////
// if success return { isSuccess :true  , data : object}
// if failure return { isFailure : true , status : string , msg: string , code :  int}

const processError = (error) => {
  if (error.response) {
    // request made and server responded with a status other than expected
    console.log("Error in response", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    // request made but no response was received
    console.log("Error in Request", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    // Frontend mistake
    console.log("Error while connecting to the frontend", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "",
    };
  }
};

// response

axiosInstance.interceptors.response.use(
  function (res) {
    // stop global loader
    return processResponse(res);
  },
  function (error) {
    // stop global loader
    return Promise.reject(processError(error));
  }
);

const API = {};

// Api requests

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
  };
}

export { API };
