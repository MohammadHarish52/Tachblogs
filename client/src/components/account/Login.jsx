import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const LoginCard = styled(Card)`
  width: 350px;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;

const Login = () => {
  const [login, setIsLogin] = useState(true); // true is login, false is sign

  const handleCreate = () => {
    setIsLogin((e) => !e);
  };
  return (
    <LoginCard>
      <Typography variant="h5" color="primary">
        {" "}
        TachBlogs
      </Typography>

      {login ? (
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
            variant="outlined"
            sx={{ marginTop: "12px" }}
          />
          <TextField
            id="outlined-basic"
            label="Enter Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label=" Enter Password"
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{ marginTop: "12px" }}
            onClick={handleCreate}
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
