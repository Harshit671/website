import React from 'react'
import '../Styles/books.css';
import { images } from '../imageapi'
import i1 from '../assets/1.png'
import i2 from '../assets/2.png'
import i3 from '../assets/3.png'
import i4 from '../assets/4.png'
import i5 from '../assets/5.png'
import i6 from '../assets/6.png'
import i7 from '../assets/7.png'
import i8 from '../assets/8.png'
import i9 from '../assets/9.png'
import i10 from '../assets/10.png'
import i11 from '../assets/11.png'
import i12 from '../assets/12.png'
import Button from './Button';

const Books = () => {
    return (
        <>
            <div className="container">
                <div>
                    <h2>THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h2>
                </div>
                <div className="image_div">
                  
                <img src={i1}/>
                <img src={i2}/>
                <img src={i3}/>
                <img src={i4}/>
                <img src={i5}/>
                <img src={i6}/>
                <img src={i7}/>
                <img src={i8}/>
                <img src={i9}/>
                <img src={i10}/>
                <img src={i11}/>
                <img src={i12}/>
               
                    {/* {
                        images.map((elem) => (

                            <img src={`../assets/${elem.id}.png`} />
                        ))
                    } */}
                </div>
                <div className="image_text">
                    <Button primary>Read free for 30 Days</Button>
                    <p>Cancel Anytime</p>
                </div>



            </div>
            <div className="brand_container">
                <div className="brand">
                    <h2>In the Press</h2>
                    <div className="brand_logo">
                        <p>TechCrunch</p>
                        <p> Forbes</p>
                        <p>WSJ</p>
                        <p>Los Angeles Times</p>
                        <p>Today</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books
