import { Box, Grid, Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import Swal from "sweetalert2";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const INITIAL_FORM_STATE = {
    email: "",
    sapId: "",
    year: "",
    branch: "",
    resume: "",
    domains: "",
    skills: "",
    project: "",
    phone: "",
};

const FORM_VALIDATION = Yup.object().shape({
    // email: Yup.string().email("Invalid Email").required("This field is Required"),
    sapId: Yup.number()
        .min(11, "Invalid Sap ID")
        .integer()
        .typeError("Please enter a valid SapId")
        .required("This field is Required"),
    year: Yup.number().required("This field is Required"),
    branch: Yup.string().required("This field is Required"),
    resume: Yup.string().required("This field is Required"),
    domains: Yup.string().required("This field is Required"),
    skills: Yup.string().required("This field is Required"),
    project: Yup.string().required("This field is Required"),
    phone: Yup.string().required("This field is Required")
        .matches(/^[6-9]\d{9}$/, "Phone number is not valid"),
});

const Profilepage = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState([]);
    return (
        <div style={{ backgroundColor: "#F8F8F8" }}>
            <center>
                <div
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "36px",
                        color: "black",
                        paddingTop: "40px",
                    }}
                >
                    Profile Page
                </div>
            </center>
            <Box
                sx={{
                    backgroundColor: "#F8F8F8",
                    fontFamily: "Poppins",
                    padding: { md: "4% 15%", sx: "2% 8%", xs: "1% 5%" },
                }}
            >
                <Card sx={{ padding: "0% 2%" }}>
                    <CardContent>
                        <Grid container>
                            <Grid item>
                                <p
                                    style={{
                                        fontFamily: "Alumni Sans",
                                        fontWeight: "600",
                                        letterSpacing: "1%",
                                        fontSize: "36px",
                                        // lineHeight:"25.4px",
                                        color: "black",
                                        margin: '0',
                                        padding: '0'
                                    }}
                                >
                                    BHUMIKA MANGE
                                </p>
                            </Grid>
                            <Grid item sx={{ width: "100%", marginTop: "3%" }}>
                                <Formik
                                    initialValues={{ ...INITIAL_FORM_STATE }}
                                    validationSchema={FORM_VALIDATION}
                                    onSubmit={(values) => {
                                        var data = JSON.stringify({
                                            email_id: `${details.email}`,
                                            phone_no: `+91${values.phone}`,
                                            sap_id: `${values.sapId}`,
                                            current_year: `${values.year}`,
                                            department: `${values.branch}`,
                                            domains: `${values.domains}`,
                                            skills: `${values.skills}`,
                                            resume_drive_link: `${values.resume}`,
                                            project_drive_link: `${values.project}`,
                                            graduation_year: "2024",
                                            user: `${localStorage.getItem("id")}`,
                                        });

                                        console.log(data);

                                    }}
                                >
                                    <Form>
                                        <Grid container spacing={4} rowSpacing={4}>
                                            <Grid item md={6} xs={12}>
                                                <div>Email address</div>
                                                <TextField
                                                    name="email"
                                                    placeholder={details.email}
                                                    inputProps={{
                                                        readOnly: true,
                                                    }}
                                                    // type="email"
                                                    // required
                                                    style={{ color: "black" }}
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Phone Number</div>
                                                <TextField
                                                    name="phone"
                                                    placeholder="Phone number"
                                                // required
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>SAP ID</div>
                                                <TextField
                                                    name="sapId"
                                                    placeholder="SAP ID"
                                                // inputProps={{
                                                //   readOnly:true,
                                                // }}
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={0} className="extraGrid"></Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Year</div>
                                                <TextField name="year" placeholder="Add year" />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Branch</div>
                                                <TextField name="branch" placeholder="Add branch" />
                                            </Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Domains</div>
                                                <TextField
                                                    name="domains"
                                                    placeholder="Select Domains"
                                                // required
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={0} className="extraGrid"></Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Skills</div>
                                                <TextField
                                                    name="skills"
                                                    placeholder="Skills"
                                                // required
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={0} className="extraGrid"></Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Resume Link</div>
                                                <TextField
                                                    name="resume"
                                                    placeholder="Add resume link"
                                                // type="url"
                                                // required
                                                />
                                            </Grid>

                                            <Grid item md={6} xs={0} className="extraGrid"></Grid>

                                            <Grid item md={6} xs={12}>
                                                <div>Project Link</div>
                                                <TextField
                                                    name="project"
                                                    placeholder="Project link"
                                                    type="url"
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    sx={{
                                                        width: "100%",
                                                        backgroundColor: "rgba(24, 114, 113, 1)",
                                                        borderRadius: "4px",
                                                        color: "white",
                                                        border: "2px solid white",
                                                        height: "50px",
                                                        textTransform: "none",
                                                        fontWeight: "bold",
                                                        "&:hover": {
                                                            color: "rgba(24, 114, 113, 1)",
                                                            backgroundColor: "rgba(24, 114, 113, 0.4)",
                                                            border: "2px solid rgba(24, 114, 113, 1)",
                                                        },
                                                    }}
                                                >
                                                    SAVE CHANGES
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Formik>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default Profilepage;
