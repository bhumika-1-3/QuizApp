import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
    return (
        <div>
            <center>
                <Grid container spacing={0}>
                    <Grid component={motion.div} whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.3 },
                    }} item xs={6} style={{ borderRight: '3px solid black', height: "100vh", cursor: 'pointer' }}

                        onClick={() => {
                            navigate("/category")
                        }}>
                        <h1 style={{ fontSize: '6rem' }}>QUIZ</h1>
                        <img src='https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?t=st=1652725396~exp=1652725996~hmac=b7038d165a5490eb4b736bbeb9d627fcdce044c7e6b0ba84e6e15e4d2f37c08c&w=740' alt='quiz' width="80%" height="68%"></img>
                    </Grid>
                    <Grid component={motion.div} whileHover={{
                        scale: 1.08,
                        transition: { duration: 0.3 },
                    }} onClick={() => {
                        navigate("/Information")
                    }} item xs={6} style={{ borderRight: '3px solid black', height: "100vh", cursor: 'pointer' }}>
                        <h1 style={{ fontSize: '5rem' }}>INFORMATION</h1>
                        <img src='https://img.freepik.com/free-vector/software-integration-concept-illustration_114360-7277.jpg?t=st=1652725684~exp=1652726284~hmac=521a5819513e92cb06082e222cae9bf222ba242b76ec353941213ac6e5779d27&w=740' alt='quiz' width="80%" height="68%"></img>
                    </Grid>
                </Grid>
            </center>
        </div>
    )
}

export default Dashboard