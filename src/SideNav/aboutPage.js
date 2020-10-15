import React from 'react';
import image2 from "./about-us.png";
import "./sideNav.css";

const aboutPage = () => {
    
return (
    <div className="about-us">
<h1> Hello this is Khaldoon - Hiba - Knar </h1>
<h5>We are the <span>cool</span> developers of this  <span>cool</span> board website </h5>

<img src={image2} alt="People-traveling" width="350px"/>
</div>
)
   
}

export default aboutPage;