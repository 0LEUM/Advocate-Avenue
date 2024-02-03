/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import l1 from '../../assets/landscape-1.jpg'
import l2 from '../../assets/landscape-2.jpeg'
import l3 from '../../assets/landscape-3.jpeg'
import './top.css'



const Top = () => {

    // let stars = 
    // document.getElementsByClassName("star");
    // let output = 
    // document.getElementById("output");

    // function gfg(n) {
    // remove();
    // for (let i = 0; i < n; i++) {
    //     if (n == 1) cls = "one";
    //     else if (n == 2) cls = "two";
    //     else if (n == 3) cls = "three";
    //     else if (n == 4) cls = "four";
    //     else if (n == 5) cls = "five";
    //     stars[i].className = "star " + cls;
    // }
    // output.innerText = "Rating is: " + n + "/5";
    // }

    // function remove() {
    //     let i = 0;
    //     while (i < 5) {
    //         stars[i].className = "star";
    //         i++;
    //     }
    // }

  return (
    <>
        <div className="main-top">
            <div className="container">
                <h1><b><u>TOP ADVOCATES</u></b></h1>
                <div className="card__container">
                    <article className="card__article">
                    <img src={l1} alt="image" className="card__img"/>

                    <div className="card__data">
                        <span className="card__description">West Bengal, Hooghly</span>
                        <h2 className="card__title">Advocate 1</h2>
                        <span className="card__description">⭐ 4.8</span>
                        
                        {/* <span onClick={gfg(1)} className="star">★</span>
                        <span onClick={gfg(2)} className="star">★</span>
                        <span onClick={gfg(3)} className="star">★</span>
                        <span onClick={gfg(4)} className="star">★</span>
                        <span onClick={gfg(5)} className="star">★</span>
                        <h3 id="output">Rating is: 0/5</h3> */}

                        <a href="#" className="card__button">Read More</a>
                    </div>
                    </article>

                    <article className="card__article">
                    <img src={l2} alt="image" className="card__img"/>

                    <div className="card__data">
                        <span className="card__description">West Bengal, Howrah</span>
                        <h2 className="card__title">Advocate 2
                        </h2>
                        <span className="card__description">⭐ 4.8</span>
                        <a href="#" className="card__button">Read More</a>
                    </div>
                    </article>

                    <article className="card__article">
                    <img src={l3} alt="image" className="card__img"/>

                    <div className="card__data">
                        <span className="card__description">West Bengal, North 24 Pargana</span>
                        <h2 className="card__title">Advocate 3</h2>
                        <span className="card__description">⭐ 4.8</span>
                        <a href="#" className="card__button">Read More</a>
                    </div>
                    </article>
                </div>
            </div>
        </div>
    </>
  )
}

export default Top