import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { API } from "../../service/api.js";

const LoginCard = styled(Card)`
  width: 350px;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: "#ff6161";
  line-height: 0;
  font-weight: bold;
`;

const signUpInitialValue = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const [login, setIsLogin] = useState("login");

  const [signup, setSignup] = useState(signUpInitialValue);

  const [error, setError] = useState("");

  const handleCreate = () => {
    if (login === "login") {
      setIsLogin("signup");
    } else {
      setIsLogin("login");
    }
  };

  const SignUpUser = async () => {
    setIsLogin("signup");
    let response = await API.userSignUp(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signUpInitialValue);
      setIsLogin(true);
    } else {
      setError("Something went wrong please try again later");
    }
  };

  const onInputChange = (e) => {
    // takes the values that are already present and updates them with the new values
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  return (
    <LoginCard>
      <Typography variant="h5" color="primary">
        {" "}
        TachBlogs
      </Typography>

      {login === "login" ? (
        <Box
          variant="outlined"
          sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ marginTop: "12px" }}
          />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          {error && <Error>{error}</Error>}
          <Button variant="contained" sx={{ marginTop: "12px" }}>
            Login
          </Button>
          <Typography variant="h7" sx={{ margin: "auto", color: "gray" }}>
            OR
          </Typography>
          <Button variant="outlined" onClick={handleCreate}>
            Create an Account
          </Button>
        </Box>
      ) : (
        <Box
          variant="outlined"
          sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <TextField
            id="outlined-basic"
            label="Enter Name"
            name="name"
            onChange={(e) => onInputChange(e)}
            variant="outlined"
            sx={{ marginTop: "12px" }}
          />
          <TextField
            id="outlined-basic"
            label="Enter Username"
            name="username"
            onChange={(e) => onInputChange(e)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            name="password"
            onChange={(e) => onInputChange(e)}
            label=" Enter Password"
            variant="outlined"
          />
          {error && <Error>{error}</Error>}
          <Button
            variant="contained"
            sx={{ marginTop: "12px" }}
            onClick={() => SignUpUser()}
          >
            Sign Up
          </Button>
          <Typography variant="h7" sx={{ margin: "auto", color: "gray" }}>
            OR
          </Typography>
          <Button variant="outlined" onClick={handleCreate}>
            Already Have an Account
          </Button>
        </Box>
      )}
    </LoginCard>
  );
};

export default Login;
