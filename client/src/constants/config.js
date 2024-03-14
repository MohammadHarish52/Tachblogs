export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading....",
    message: "Pleas wait while the data is fetched",
  },
  success: {
    title: "Success!",
    message: "Data fetched successfully",
  },
  responseFailure: {
    title: "Error",
    message: "An error ocurred while fetching response from the server",
  },
  requestFailure: {
    title: "Error",
    message: "An error ocurred while sending the request to the server",
  },
  networkError: {
    title: "error",
    message: "Unable to connect to the server",
  },
};

//API service Call
// Sample Request
// service call :{url : " " , method : "POST/GET/PUT/Delete" ,params :true/false , query : true/false }

export const SERVICE_URLS = {
  userSignUp: { url: "/signup", method: "POST" },
};
