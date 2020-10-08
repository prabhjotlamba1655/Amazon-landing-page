import React from 'react'
import img1 from './1pc.JPG'
import img2 from './2pc.jpg'
import img3 from './3pc.jpg'
import img4 from './4pc.jpg'
import img5 from './5pc.PNG'
import img6 from './6pc.jpg'
import img7 from './7pc.jpg'
import img9 from './9pc.jpg'
import img10 from './10pc.jpg'
import img11 from './11pc.jpg'
import img12 from './12pc.jpg'
import img13 from './13pc.jpg'
import img14 from './14pc.jpg'
import img15 from './15pc.jpg'
import img16 from './15pc.jpg'
import img17 from './17pc.jpg'




function Landing() {
    return (
        <div className="landing">
            <div className="landing__set1" >
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />                
            </div>
            <div className="landing__set2">
                    <img src={img6} />
                    <img src={img7} />
                    <img src={img9} />
                    <img src={img10} />
                    <img src={img11} />
                    <img src={img12} />
                    <img src={img13} />
                    <img src={img17} />
                    
            </div>
            <div className="landing__set1" >
                <img src={img14} />
                <img src={img15} />
                <img src={img16} />                
            </div>
        </div>
    )
}

export default Landing
