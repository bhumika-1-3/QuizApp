import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../Images/history.png'
import image2 from '../../Images/maths.png'
import image3 from '../../Images/science.png'
// import ReactPDF from '@react-pdf/renderer';

const Category = () => {
    return (
        <div>
            <Grid container spacing={2} style={{ padding: "2% 10%" }}>
                <Grid item sm={4} data-aos="zoom-in">
                    {/* category in api 22 */}
                    <Link to="/Quiz/22" style={{textDecoration:'none'}}>

                        <div
                            style={{
                                borderTopRightRadius: "30px",
                                borderBottomLeftRadius: "30px",
                                backgroundColor: "#E2D2FE ",
                                cursor: 'pointer',
                                color: 'rgba(0,0,0,0.8)'
                            }}
                        >
                            <center>

                                <img className="heroImage" src={image1} alt="geography"></img>
                                <h2>Geography</h2>
                            </center>
                        </div>
                    </Link>
                </Grid>
                <Grid item sm={4} data-aos="zoom-in">
                    {/* category in api 19 */}
                    <Link to="/Quiz/19" style={{textDecoration:'none'}}>

                        <div
                            style={{
                                borderTopRightRadius: "30px",
                                borderBottomLeftRadius: "30px",
                                backgroundColor: "#FDE1AB ",
                                cursor: 'pointer',
                                color: 'rgba(0,0,0,0.8)'
                            }}
                        >
                            <center>

                                <img className="heroImage" src={image2} alt="maths"></img>
                                <h2>Maths</h2>
                            </center>
                        </div>
                    </Link>

                </Grid>
                <Grid item sm={4} data-aos="zoom-in">
                    {/* category in api 18 */}
                    <Link to="/Quiz/18" style={{textDecoration:'none'}}>

                        <div
                            style={{
                                borderTopRightRadius: "30px",
                                borderBottomLeftRadius: "30px",
                                backgroundColor: "#CCF0BF ",
                                cursor: 'pointer',
                                color: 'rgba(0,0,0,0.8)'
                            }}
                        >
                            <center>

                                <img className="heroImage" src={image3} alt="Science"></img>
                                <h2>Science</h2>
                            </center>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Category