import React from "react";
import person1 from './person1.jpg'
import person2 from './person2.jpg'
import person3 from './person3.jpg'
import person4 from './person4.jpg'


export default function Speakers(){
    return(
        <>
        <div className="speakers" id="speakersjs">
        Keynote Speakers
        </div>
        <div className="speakersimg">
            <img src={person1} alt=""id="person1" />
            <div><img src={person2} alt="" id="person2" /></div>
            <div><img src={person3} alt="" id="person3" /></div>
            <div><img src={person4}alt="" id="person4"/></div>
        </div>
        <div className="speakersdescription">There may not be a venue. But there’s definitely an incredible lineup of speakers at this year’s CREATR conference. The world’s best entertainers, comedians, writers, marketers, film makers, photographers, and designers are coming together virtually to educate, share and inspire you to do amazing things.</div>
        </>
    )
}