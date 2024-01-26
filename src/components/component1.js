import React from "react";
import "./component1.css";
import img from "../image/Screenshot 2023-07-06 151957.png";
import img2 from "../image/Screenshot 2023-07-06 153124.png";
import img3 from "../image/photo.jpg";

export default function Component1(props) {
  const instagramid = () => {
    window.open(
      "https://instagram.com/piyushmehta2625?igshid=MzNlNGNkZWQ4Mg=="
    );
  };
  const linkedinid = () => {
    window.open("https://www.linkedin.com/in/piyush-mehta-399b14277");
  };
  const myStyle = {
   display : 'none'
  };
  return (
    <>
      <div className="comp1  ">
        
        <div className="header w-[80vw] flex justify-center">
          <div class="p5">
            <div className=" hello-div w-[100%] text-[white] font-[cursive]">Hello ! I Am 
             </div>




<div className="bodyname">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0"  style={myStyle}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /> 
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
    </filter>
  </defs>
</svg>

<div class="goo">
  <h1 className="h1name">Piyush Mehta</h1>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
</div></div>






            <p className=" text-[white] text-[2vw] font-x w-[40vw] h-[15vw] flex items-center leading-10">
            I am passionate about the fascinating world of robotics, and my journey began at the IIT Roorkee, where I was an active member of the 'Mars' club.            </p>

<div className="w-[100%] goo flex justify-center">
<div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
            <div className="w-[60%] flex justify-between  ">
              <div className="photo-div">
                <img className="photo-div-img" src={img2}></img>
              </div>
              <div className="photo-div">
                <img className="photo-div-img" src={img}></img>
              </div>{" "}
              <div className="photo-div">
                <img className="photo-div-img" src={img3}></img>
              </div>{" "}
              <div className="photo-div">
                <img className="photo-div-img" src={img2}></img>
              </div>
             
            </div>
            </div>



          </div>
        </div>


       
        <div class=" droppp"></div>
  <div class=" droppp"></div>
  <div class=" droppp"></div>
  <div class=" droppp"></div>
  <div class=" droppp"></div>







        <div className="w-[50%] flex items-center justify-left ">
       
          <div className="relative myphoto00 flex   w-[67%] h-[70%] ">

         
            <img className=" relative myphoto w-[100%] h-[97%]" src={img3}></img>
            <div class="drops">
    <div class="drop1"></div>
    <div class="drop2"></div>  
  </div>


  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="liquid">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
    </filter>
  </defs>
</svg>

           
          </div>
        </div>
      </div>

    </>
  );
}
