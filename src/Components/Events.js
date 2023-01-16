import React from 'react';
import { Link } from 'react-router-dom';
import EventsData from '../EventsData';

const Events = () => {
    return (
        <>

            <div className='event_page d-flex'>

                <div className='sidebar'>
                    <header className='text-center mt-1'>Categories</header>
                    <ul className='mt-3'>
                        <li><Link className='mylinks'>Animal welfare</Link></li><hr />
                        <li><Link className='mylinks'>Blood Donation Camps</Link></li><hr />
                        <li><Link className='mylinks'>Swach Bharat</Link></li><hr />
                        <li><Link className='mylinks'>Food Donation Camps</Link></li><hr />
                        <li><Link className='mylinks'>Tree Plantations</Link></li><hr />
                        <li><Link className='mylinks'>Awareness Campaigns</Link></li><hr />
                        <li><Link className='mylinks'>Charity Events</Link></li><hr />
                        <li><Link className='mylinks'>Disaster Relief</Link></li><hr />
                        <li><Link className='mylinks'>Miscellaneous</Link></li><hr />
                    </ul>
                </div>


                {/* <header className='text-center mt-2 myeventhead'><h3>Check out current Events:</h3></header> */}
                <div className='eventsFeed'>
                    <div className='myeventhead mt-3'>
                        <h1 className='text-center'>Events</h1>
                        <p>Lorem ipsum dolor sit amet. Cum consequuntur suscipit cum sunt velit non earum mollitia et nostrum repellat qui accusamus autem eos laboriosam dolor et facere neque. Qui doloribus itaque ab nihil voluptatem eos incidunt odit et harum animi hic sunt provident.</p>
                    </div>
                    <div>
                        <img src='../assets/images/event_img.jpg' className='event_img' alt='event' />
                    </div>
                </div>
            </div>

            {/* current events section  */}

            <div className='eventcards mt-4'>

                <header className='text-center mt-1'><h3>Check out current Events:</h3></header>
                <div className='container mt-4'>
                    <div className='row g-2'>

                        {
                            EventsData.map((cval) => {

                                return (
                                    <>
                                        <div className='col-md-4'>
                                            <div class="card mycard">
                                                <img src="../assets/images/logo.jpg" class="card-img-top" alt="photo" />
                                                
                                                    <div class="card-body">
                                                        <h5 class="card-title">{cval.name}</h5>
                                                        
                                                        <table>
                                                            <tr>
                                                                <th><i class="fa-brands fa-elementor e_icon"></i> Event:</th>
                                                                <td>{cval.category}</td>
                                                            </tr>
                                                            <tr>
                                                                <th><i class="fa-sharp fa-solid fa-location-dot e_icon"></i> Location:</th>
                                                                <td>{cval.venue}</td>
                                                            </tr>
                                                            <tr>
                                                                <th><i class="fa-regular fa-calendar e_icon"></i> Date:</th>
                                                                <td>{cval.date}</td>
                                                            </tr>
                                                        </table>

                                                        {/* 
                                                    <p>Event: {cval.category}</p>
                                                    <p>Location: {cval.venue}<br/> Date: {cval.date}</p> */}

                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <p><i class="fa-solid fa-phone e_icon"></i><b> Contact:</b> {cval.contact}</p>
                                                        <button type='submit' class="btn btn-success">RSVP</button>
                                                    </div>
                                                    <div className='overlay'>
                                                        <p className='card__description'>In collaboration with: </p>
                                                        <p>{cval.name}</p>
                                                        <p>{cval.contact}</p>
                                                        <button className="btn btn-light">View Event</button>
                                                    </div>
                                                </div>
                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Events