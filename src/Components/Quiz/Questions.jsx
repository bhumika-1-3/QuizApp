import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Questions.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import jsPDF from 'jspdf'
import medal from "../../Images/medal.png"
import { LinearProgress } from '@mui/material'
const Questions = () => {

    const name = localStorage.getItem("Name");
    const [timeLeft, setTimeLeft] = useState(null);

    const [answer, setAnswer] = useState(0);
    const [sub, setSub] = useState("warning");
    const [i, seti] = useState(0);
    let navigate = useNavigate();
    let params = useParams();
    const [data, setData] = useState([
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the capital of Jamaica?",
            "correct_answer": "Kingston",
            "incorrect_answers": [
                "San Juan",
                "Port-au-Prince",
                "Bridgetown"
            ]
        },
    ]);
    useEffect(() => {
        Swal.fire({
            title: 'Enter the Level for the Quiz',
            text: "1)Easy 2)Medium 3)Difficult",
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: false,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                console.log(`https://opentdb.com/api.php?amount=10&category=${params.id}&difficulty=${login}&type=multiple`);

                return axios.get(`https://opentdb.com/api.php?amount=10&category=${params.id}&difficulty=${login}&type=multiple`)
                    .then((res) => {
                        console.log(res.data.results);
                        setTimeLeft(10);
                        if (res.data.results.length === 0) {
                            Swal.fire({
                                title: 'NO DATA AVAIABLE',
                                confirmButtonText: 'OOPS'
                            }).then((result) => {
                                navigate("/Category");
                            })
                        }
                        else {
                            setData(res.data.results);
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    })
            }
        })
    }, [])


    useEffect(() => {
        if (timeLeft === 0) {
            console.log("TIME LEFT IS 0");
            setTimeLeft(10);
            if (i == 9) {
                setTimeLeft(null);
            }
            else {
                seti(i + 1);
            }
        }

        if (!timeLeft) return;
        const intervalId = setInterval(() => {

            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    // certificate
    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        doc.setFillColor(66, 135, 245);
        doc.rect(10, 10, 600, 160, "F");
        doc.setFontSize(40);
        doc.addFont('helvetica', 'normal')
        doc.text(`Certificate of Participation to `, 56, 67);
        doc.text(`${name}`, 56, 100);
        doc.addImage(medal, "PNG", 40, 180, 180, 180);
        doc.setFontSize(22);
        doc.setFont("times", "normal");
        doc.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,", 300, 400, "center");
        doc.text(" sgna aliqua. Ut enim ad minim veniam, quis nostrud e", 300, 440, "center");
        doc.save('certificate.pdf')
    }

    const handlesubmit = () => {
        setTimeLeft(10);
        setSub("error")
        setTimeout(() => {
            setSub("warning")
            if (i === 9) {
                Swal.fire({
                    title: 'Here are your results',
                    text: `${answer} / 20`,
                    confirmButtonText: 'Try Again :)',
                    cancelButtonText: 'Certificate',
                    showCancelButton: true,

                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/Category");
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        generatePDF();
                    }

                })
            }
            else {
                seti(i + 1);
            }
        }, [1000])

    }

    const handlesubmitCorrect = () => {
        setTimeLeft(10);
        setSub("success")
        setAnswer(answer + 2);
        setTimeout(() => {
            setSub("warning")
            if (i === 9) {
                Swal.fire({
                    title: 'Here are your results',
                    text: `${answer} / 20`,
                    confirmButtonText: 'Try Again :)'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/Category");
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        generatePDF();
                    }

                })
            }
            else {
                seti(i + 1);
            }
        }, [1000])
    }


    return (
        <div className='questionaire'>
            <Box>
                <Paper elevation={2}>
                    <h2 className='questionHeading'>{data[i].question}</h2>
                    <Box sx={{ width: '100%' }}>
                        {/* {i % 2 === 0 ? */}

                        {data[i].incorrect_answers.map((x, j) => {
                            return <div style={{ margin: '1%' }}>
                                <Button variant='contained' color={sub} key={j} fullWidth style={{ padding: '2%' }} onClick={handlesubmit}>
                                    {x}
                                </Button>
                            </div>
                        })}
                        <div style={{ margin: '1%' }}>
                            <Button variant='contained' color={sub} fullWidth style={{ padding: '2%' }} onClick={handlesubmitCorrect}>
                                {data[i].correct_answer}
                            </Button>
                        </div>


                        {/* } */}
                        {/* 
                        <br />
                        <br />
                        <Button variant='contained' fullWidth>
                            2
                        </Button>
                        <Button variant='contained' fullWidth>
                            3
                        </Button> */}
                    </Box>
                </Paper>
            </Box>
            <h2 style={{ color: 'orangered' }}>Question Number : {i + 1}</h2>
            <h3>TIME LEFT : {timeLeft}</h3>
        </div>
    )
}

export default Questions