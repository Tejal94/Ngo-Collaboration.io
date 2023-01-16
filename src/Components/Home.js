import React from "react";
import { useState, useEffect } from "react";


function Home() {

    const [loop, setloop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const rotate = ["belong:Paricipate ", "care: Help ", "believe: Practice ", "be fair: Be kind "];
    const [text, settext] = useState('');

    const period = 100;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, period)

        return () => {
            clearInterval(ticker);
        }
    }, [text])

    const tick = () => {
        let i = loop % rotate.length;
        let fulltext = rotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        settext(updatedText);



        if (!isDeleting && updatedText === fulltext) {
            setisDeleting(true);
            period = 100;
        } else if (isDeleting && updatedText === "") {
            setisDeleting(false);
            setloop(loop + 1);
            period = 100;
        }
    }


    return (
        <>

            <div className="main_page">
                <div className="main_img">
                    <img src="./assets/images/main.jpg" />
                </div>
                <div className="quote">
                    <h1>Do more than <strong><span className="wrap">{text}</span></strong></h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet. Cum consequuntur suscipit cum sunt velit non earum mollitia et nostrum repellat qui accusamus autem eos laboriosam dolor et facere neque. Qui doloribus itaque ab nihil voluptatem eos incidunt odit et harum animi hic sunt provident.</p>
                    <br />
                    <button type="submit" className="mybtn">Join us in spreading HOPE <i class="fa fa-duotone fa-circle-arrow-right"></i></button>
                </div>

            </div>

            {/* explainer section start */}

            <div className="explainer">
                <h1 className="text-center">How will this work?</h1>
                <div className="container mycontainer">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src="../assets/images/register.jpg" className="d-block w-100" alt="img1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Register on HOPE</h3>
                                    <p>As NGO or individual as volunteer</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="../assets/images/collaborate.jpg" className="d-block w-100 imga" alt="img1" />
                                <div className="carousel-caption d-none d-md-block car_div2">
                                    <h3>Collaborate with others</h3>
                                    <p>Join hands with other NGOs and people willing to volunteer.</p>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <img src="../assets/images/money.jpg" className="d-block w-100 imgb" alt="img1" />
                                <div className="carousel-caption d-none d-md-block car_div2">
                                    <h3>Bring together Resources</h3>
                                    <p>Combine all the physical resources,ideas,people & funds to host larger events. </p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="../assets/images/people.png" className="d-block w-100" alt="img1" />
                                <div className="carousel-caption d-none d-md-block car_div2">
                                    <h3>Scale-up!</h3>
                                    <p>Host larger events with the combined man-power & resources, thus scaling up the events & making larger impact on society.</p>
                                </div>
                            </div>
                            
                        </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>

        </>
    )


}

export default Home