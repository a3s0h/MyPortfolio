import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Nishant Bisht', 'Web Developer', 'UI/UX Designer', 'Freelancer'];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevData => prevData / 2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        }
        else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate_animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm `}<span className='wrap'>{text}</span></h1>
                                    <p>Hello , I'm a passionate Software Engineer and Developer. Currently looking for opportunities for expanding my domain</p>
                                    {/* <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button> */}
                                    <ScrollLink
                                        activeClass="active"
                                        to="connect"
                                        spy={true}
                                        smooth={true}
                                        offset={-70} // Adjust the offset if needed
                                        duration={500} // Scroll duration
                                    >
                                        <button>Let's Connect <ArrowRightCircle size={25} /></button>
                                    </ScrollLink>
                                
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} clt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}