import React from 'react'
import './freelancing.css'

export default function Freelancing(props) {
  return (<>
   <div className='freelance-section liquid'>
   <p class="p5 font-[cursive]">I AM Available For </p>




   <div className="bodyname2">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0"  >
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /> 
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
    </filter>
  </defs>
</svg>

<div class="goo">
  <h1 className="h1name2 font-[10vw]">Freelancing</h1>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
</div></div>






   <div class='contact-button31' onClick={props.openclick2}>
<div class='a' href="#">
  <span>Contact </span>
  <div class="liquid"></div>
  </div></div>


   <p className='text-under-btn mt-[2vw] mb-[2vw]'>As a passionate learner, I eagerly embrace the opportunity to collaborate with client and further enrich my learning journey. Every project I undertake presents a new challenge, enabling me to expand my expertise and explore different technologies. With each freelance endeavor, I am committed to delivering high-quality results, meeting client expectations, and contributing to the success of their projects.</p>

   </div>
      
  </>
  )
}
