import React from "react";
import "./About.css";
import { Button } from "@material-ui/core";

const artServerURL = process.env.REACT_APP_SERVER_URL + "/art";

function About() {

    return (
        <div className="About">
            <div className="aboutContent">
                <div className="aboutHeader">
                    <h1 className="pageHeader">About</h1>
                </div>
                <div className="aboutText">
                    {aboutText}
                </div>
            </div>
        </div>
    )
}
export default About;


const aboutText = <p className="about-container">
    <div className="about-item">
        <p>

            <p>Hello, I'm Vallari!</p>

            I'm currently in my second year of college in Bharti Vidyapeeth, Delhi (India).
        </p>
    </div>
    <div className="about-item">
        <p>
            <h2>Creativity </h2>
            <p>
                <p>As a child I loved to make creative stupid stuff. I've tried different things in my teen years like making small notesbooks (using pages from a bigger one lol), making lyric videos on YouTube, making weird remixes with FL Studio, handrawing comics, writing "world famous" novels, hosting "award shows", making board games (and forcing my friends to play it), you name it.</p>
                <p>I still love trying new stuff, brainstorming, and making stupid creative things. I'm learning new tools to do them better.</p>
            </p>
        </p>
    </div>
    <div className="about-item">
        <p>
            <h2>Art</h2>
            <p>
                I love doodling. Now, I'm doing the highly emotional process of actually learning how to draw. There are so many people on Instagram and Dribbble whose works I try to learn from like <a href="https://dribbble.com/IvanDubovik">Ivan Dubovik</a>, <a href="https://www.instagram.com/yeahyeahmaybe/">yeahyeahmaybe</a> and moreee.
            </p>
            <div className="art-img">
                <img alt="art" src={`${artServerURL}/3.png`} />
                <img alt="art" src={`${artServerURL}/1.jpg`} />
                <img alt="art" src={`${artServerURL}/2.png`} />
            </div>
        </p>

    </div>
    <div className="about-item">
        <p>
            <h2>Music</h2>
            <p>
                I'm famous (not really, but I should be) for making the best playlists ever. Recently I've had these albums on repeat: <a href="https://music.apple.com/in/album/kid-krow/1491987854">Kid Krow</a> by Conan Gray, <a href="https://music.apple.com/in/album/folklore/1524801260">folklore</a> by TS, <a href="https://music.apple.com/in/album/fine-line/1485802965">Fine Line</a> by Harry Styles, and Sasha Slones's EP <a href="https://music.apple.com/in/album/self-portrait-ep/1483234542">Self Portrait</a>. If you wanna check out what I'm currently listening to see <a href="https://music.apple.com/profile/vallariag">here</a>.
           </p>
        </p>
    </div>
    <div className="about-item books">
        <p>
            <h2>Books</h2>
            <p>
                I basically grew up with Harry Potter series and it's kind of a ritual, for me and <a href="https://shraddhaag.dev/">my sister</a>, to reread them during/before exams. My favourate in non-fiction is <a href="https://www.goodreads.com/book/show/81939.The_Mastery_of_Love">"Mastery of Love"</a>.  I've recently finished <a href="https://www.goodreads.com/book/show/19063.The_Book_Thief">"The Book Theif"</a>, which is a beautiful book about a young girl in Nazi Germany. Checkout what I'm currently reading on <a href="https://www.goodreads.com/user/show/59977353-vallari-agrawal">GoodReads</a>. 
           </p>
        </p>
        <img alt="books" src="https://prodimage.images-bn.com/pimages/9781101934180_p0_v3_s1200x630.jpg" />
    </div>
    <div className="about-item">
        <p>
            <h2>Coding</h2>
            <p>
                <a href="https://github.com/VallariAg/Projects/tree/master/Chess">My first project</a> was a two player Chess game with C++, that I made for my school final project in 12th grade. I remember being excited about it and scribbling away in between other classes thinking and planning for it. Then, just before college I started with my web development learning Journey. Starting from HTML, CSS and JavaScript. Tried Angular, React, Node.
           </p>
        </p>
    </div>
    <div className="about-item wtef">
        <img alt="wtef" src="https://www.noticebard.com/wp-content/uploads/2020/03/wtm.png" />

        <p>
            <h2> Women Techmakers</h2>
            <p>
                <p>In March 2020, I got selected for <a href="https://wtef.talentsprint.com/">Women Techmakers Engineering Fellow</a> scholarship program. Being part of this program has taught me to to write good, clean, readable code, learn how-to-learn, thinking in a team, etc. I've some of the best mentors here to guide me and the most amazing community of 124 women of my age.                </p>

                <p>We had an Immersion Week last August, where we got to interact with 30+ Googlers for sessions from personal to career development. It was the most amazing week and I got to learnt a lot about becoming a good computer engineer in that week. </p>
            </p>
        </p>
    </div>
    <div className="about-item">
        {/* <img alt="wtef" src="https://www.noticebard.com/wp-content/uploads/2020/03/wtm.png" /> */}

        <p>
            Feel free to get in touch!
            
            <Button target="_blank" href="mailto:vallariag@gmail.com">Write Me</Button>
        </p>
    </div>
</p>;
