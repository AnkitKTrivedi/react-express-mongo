import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { SignInStyles } from "../styles/signIn";
import { useNavigate } from "react-router-dom";
import { routeMappings } from "../../constants/routeMappings";
import { apiUrls } from "../../constants/apiUrls";
import axiosInstance from "../../common/utils/interceptor";
import { setCookie } from "../../common/utils/cookies";

const SignIn = (): JSX.Element => {
  const classes = SignInStyles();
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    (async (): Promise<void> => {
      try {
        const loginResponse = await axiosInstance.post(apiUrls.LOGIN, {
          email: loginDetails.email || "teswt@gmail.com",
          password: loginDetails.password || "123452",
        });
        console.log(loginResponse);
        if (loginResponse?.status === 200) {
          setCookie("token", loginResponse.data.token);
          sessionStorage.setItem("userSesseionActive", "true");
          navigate(routeMappings["HOME"]);
        }
      } catch {
        //todo
      }
    })();
  };

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={loginDetails.email}
            autoComplete="email"
            autoFocus
            onChange={onChangeHandle}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={loginDetails.password}
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={onChangeHandle}
            autoComplete="current-password"
          />
          {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
