import portrait from "../../assets/small/portraits/portrait.jpg"
import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src= {portrait}></img>
        </div>
        <p>
        I'm originally from the state of Washington, I began on a journey of personal and professional growth when I relocated to the vibrant state of Oregon five years ago. 
        I am currently employed as a server, but I am enthusiastically seeking a transition in my career that aligns with my aspirations and abilities. 
        In addition to my professional pursuits, I am proudly married and am now eagerly looking forward to the future, seeking inspiration to craft more elavated goals and create a path towards an even more fulfilling life.
        </p>
        <p>
        </p>
      </div>
    </section>
  );
}

export default About;
