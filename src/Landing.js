import React, { useState } from 'react'
import img1 from './Media/1pc.webp'
import img2 from './Media/2pc.webp'
import img3 from './Media/3pc.webp'
import img4 from './Media/4pc.webp'
import img5 from './Media/5pc.webp'
import img6 from './Media/6pc.webp'
import img7 from './Media/7pc.webp'
import img9 from './Media/9pc.webp'
import img8 from './Media/8pc.webp'
import img10 from './Media/10pc.webp'
import img11 from './Media/11pc.webp'
import img12 from './Media/12pc.webp'
import img13 from './Media/13pc.webp'
import img14 from './Media/14pc.webp'
import img15 from './Media/15pc.webp'
import img16 from './Media/16pc.webp'
// import img17 from './Media/17pc.webp'
import './Landing.css'
import { db } from "./firebase";

function Landing() {

    const [email, setemail] = useState("");

    const saveEmail = (event) => {
        event.preventDefault();
        if (email) {
            db.collection("info").add({
                email: email,
            })
                .then(alert("Thank you"))
                .catch((error) => {
                    alert(error.message);
                });

            document.getElementById('myform').reset();
            setemail("");
        } else {
            alert("Please fill the field properly");
        }
    }

    return (
        <div className="landing">
            <div className="landing__form__outer">
                <div className="landing__set2">

                    <div className="landing__text">
                        <span> Register here for regular updates about the Offers</span>
                    </div>

                    <div className="landing__div">
                        <form onSubmit={saveEmail} id="myform" className="landing__form">
                            <input className="input__email" onChange={(e) => setemail(e.target.value)} placeholder="Enter your E-mail" type="email" />

                            {/* <a href="https://www.youtube.com/watch?v=lBZE4Nyjv1I" target > */}
                            <input onClick={saveEmail} type="button" value="Submit" className="signin__button" />
                            {/* </a> */}
                        </form>
                    </div>

                </div>
            </div>

            <div className="landing__set1" >

                <a href="https://amzn.to/3lBtxON" className="link1" target="_blank">
                    <img className="landing__set1__img" src={img1} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/3lBtxON" target="_blank">
                    <img className="landing__set1__img" src={img2} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/3lC2Fy5" target="_blank">
                    <img className="landing__set1__img" src={img3} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/3lC2Fy5" target="_blank">
                    <img className="landing__set1__img" src={img4} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/2SIE2U7" target="_blank">
                    <img className="landing__set1__img" src={img5} alt="Landing page images" />
                </a>

            </div>


            {/* <div className="landing__set3"> */}
            <div className="landing__set__img">
                <a href="https://amzn.to/2SMg0ri" target="_blank">
                    <img className="landing__set3" src={img6} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/2GNbrKT" target="_blank">
                    <img className="landing__set3" src={img7} alt="Landing page images" />
                </a>

            </div>
            <div className="landing__set__img">
                <a href="https://amzn.to/2GYReBn" target="_blank">
                    <img className="landing__set3" src={img8} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/2GQuPGK" target="_blank">
                    <img className="landing__set3" src={img9} alt="Landing page images" />
                </a>

            </div>
            <div className="landing__set__img">
                <a href="https://amzn.to/3jPVuBZ" target="_blank">
                    <img className="landing__set3" src={img10} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/30Y1nFT" target="_blank">
                    <img className="landing__set3" src={img11} alt="Landing page images" />
                </a>

            </div>
            <div className="landing__set__img">
                <a href="https://amzn.to/2GYREaV" target="_blank">
                    <img className="landing__set3" src={img12} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/33N7XRe" target="_blank">
                    <img className="landing__set3" src={img13} alt="Landing page images" />
                </a>

            </div>

            {/* </div> */}
            <div className="landing__set1" >
                <a href="https://amzn.to/3jWhYkY" target="_blank">
                    <img src={img14} className="landing__set1__img" alt="Landing page images" />
                </a>
            </div>

            <div className="landing__set__img">
                <a href="https://amzn.to/3iNGwew" target="_blank">
                    <img className="landing__set3" src={img15} alt="Landing page images" />
                </a>
                <a href="https://amzn.to/3k7qjlX" target="_blank">
                    <img className="landing__set3" src={img16} alt="Landing page images" />
                </a>
            </div>

        </div>
    )





}

export default Landing
