import { Button, Card, TextField, Typography, styled } from "@mui/material";

const LoginCard = styled(Card)`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;

const Login = () => {
  return (
    <LoginCard>
      <Typography variant="h5" color="primary">
        TachBlogs
      </Typography>
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
      <Button variant="outlined">Create an Account</Button>
    </LoginCard>
  );
};

export default Login;
