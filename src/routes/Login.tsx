import { TextField, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/UI/Container";
import CenterContainer from "../components/UI/CenterContainer";
import { useNavigate } from "react-location";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <CenterContainer height="calc(100% - 10px)">
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <TextField
              {...register("username")}
              variant="outlined"
              label="Username"
              style={styles.input}
            />
            <TextField
              {...register("password")}
              variant="outlined"
              label="Password"
              style={styles.input}
            />
            <Box style={styles.buttonWrapper}>
              <Button
                size="large"
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          </Box>
        </form>
      </CenterContainer>
    </Container>
  );
};

export default Login;

const styles = {
  form: { width: "100%", display: "grid", placeItems: "center" },
  input: { marginBottom: 20 },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};
