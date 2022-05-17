import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import signup from '../Images/signup.jpg';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Grid,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import chart from '../Images/chart.png'
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FormatAlignLeftSharp } from "@mui/icons-material";
// import { url } from '../url.js'

const validationSchema = yup.object({
  email: yup
    .string('Enter your Email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password is too short')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password nust conatin minimum eight characters, at least one letter, one number and one special character are required')
    .required('Password is required'),
  firstname: yup
    .string('Enter your First Name')
    .required('First Name is required'),
  lastname: yup
    .string('Enter your Last Name')
    .required('Last Name is required'),
  confirmpass: yup
    .string('Enter your Confirm Password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),


});
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{ fontSize: "1.1rem" }}
    >
      {"Copyright © "}
      <Link color="inherit" style={{ color: "#fc5296", textDecoration: "none" }}>
        Code of duty &nbsp;
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Signup = () => {

  var history = useNavigate();

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      password: '',
      lastname: '',
      confirmpass: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("Name", values.firstname +" "+ values.lastname);
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('email', values.email);
      data.append('password', values.password);
      data.append('firstname', values.firstname);
      data.append('lastname', values.lastname);
      var config = {
        method: 'post',
        // url: url + 'accounts/signup/',
        headers: {},
        data: data
      };
      history('/login')
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  const [passwordShow, setpassword] = React.useState(false);
  const [passwordShow2, setpassword2] = React.useState(false);
  // definition

  return (
    <div style={{ padding: '4%' }}>
      <Card>
        <Grid container spacing={3} style={{ overflow: "hidden" }}>
          <Grid item xs={12} md={6}>
            <img src="https://i.pinimg.com/564x/9e/7d/bc/9e7dbcad84578f85fcda8770ccbd024a.jpg" alt="signup" style={{ width: "90%" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} style={{ padding: "5vh", height: "20vh" }}>
                <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750" }}>
                      Sign Up
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            helperText={formik.touched.lastname && formik.errors.lastname}
                          />
                        </Grid>
                      </Grid>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              id="password"
                              name="password"
                              label="Password"
                              type={passwordShow ? "text" : "password"}
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              error={formik.touched.password && Boolean(formik.errors.password)}
                              helperText={formik.touched.password && formik.errors.password}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onMouseDown={(e) => e.preventDefault()}
                                      edge="end"
                                      onClick={() => {
                                        setpassword(!passwordShow);
                                      }}
                                    >
                                      {passwordShow ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              id="confirmpass"
                              name="confirmpass"
                              label="Confirm Password"
                              type={passwordShow2 ? "text" : "password"}
                              value={formik.values.confirmpass}
                              onChange={formik.handleChange}
                              error={formik.touched.confirmpass && Boolean(formik.errors.confirmpass)}
                              helperText={formik.touched.confirmpass && formik.errors.confirmpass}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onMouseDown={(e) => e.preventDefault()}
                                      edge="end"
                                      onClick={() => {
                                        setpassword2(!passwordShow2);
                                      }}
                                    >
                                      {passwordShow2 ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />

                          </Grid>
                        </Grid>

                      </Grid>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>

                      <Button size="large" variant="contained" fullWidth type="submit"
                        sx={{
                          backgroundColor: 'black'
                        }}>
                        Submit
                      </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ fontSize: "1.2rem", fontWeight: "550" }}>
                      <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Have an account? Login</Link>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>


  );
};

export default Signup;
