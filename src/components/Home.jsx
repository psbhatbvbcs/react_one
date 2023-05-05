import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TeenMind</h1>
                    <p>Speak out your mind</p>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Hey Teenagers! Speak Out your mind. This is a place where you can vent out anything and
                        nobody will judge you!
                    </p>
                </div>
            </div>
            <div className='home3' id="about">
                <div>
                    <h1>Who are we?</h1>
                    <p>We are your friends who wanted a place to vent out our thoughts. But you know its so 
                        tough getting one. So we decided to build one by ourselves. You can share anything here. 
                        It can be your poetry, your stories, your diary, or your own article
                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home