import React from "react";
import "./About.css";
import { Button } from "@material-ui/core";

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
                I'm a second year undergraduate student who likes to code, have fun, and help others.
            {/* I'm currently in my second year of college in Bharti Vidyapeeth, Delhi (India). */}
        </p>
    </div>

    <div className="about-item">
        <p>
            <h2>Focus on Finding Solutions & Helping  </h2>
            <p>
                <p>I love to create solutions for problems I find relevent around me. When I started out college, me and my friends had a hard time keep track of our attendance in each subject and their labs, so I designed Attendance Tracker with Firebase. </p>
                    <p>And recently, as the pandemic took toll to people's mental health, I decided to learn more about the factors that effect us and can help improve our mental health, and then created an app to track our mental health.</p>
                {/* <p></p>     */}
                    {/* In mid 2020, when we didn't had much information around COVID, I found lots of misinformation floating around on internet.  */}
                    {/* <p> Me and two of my friends wanted to explore Machine Learning so we worked together and studied a Stanford paper to detect fake news by ML. We built a model and a chrome extension that used that ML model to detect if an article online was fake or factual.  </p> */}
                {/* <p>As a child I loved to make creative stupid stuff. I've tried different things in my teen years like making small notesbooks (using pages from a bigger one lol), making lyric videos on YouTube, making weird remixes with FL Studio, handrawing comics, writing "world famous" novels, hosting "award shows", making board games (and forcing my friends to play it), you name it.</p> */}
                {/* <p>I still love trying new stuff, brainstorming, and making stupid creative things. I'm learning new tools to do them better.</p> */}
            </p>
        </p>
    </div>

    <div className="about-item wtef">
        <img alt="wtef" src="https://www.noticebard.com/wp-content/uploads/2020/03/wtm.png" />

        <p>
            <h2> Women Techmakers Engineering Fellow</h2>
            <p>
                <p>In March 2020, I was one of the 124 women who got selected for <a href="https://wtef.talentsprint.com/">Women Techmakers Engineering Fellow</a> scholarship program, by Talentsprint and Google. Being part of this program has taught me to to write good, clean, readable code, learn how-to-learn, thinking in a team, etc. I've some of the best mentors here to guide me and the most amazing community of women of my age.  </p>

                <p>We had an Immersion Week in August 2020, where we got to interact with 30+ Googlers for sessions from personal to career development. It was the most amazing week and we got to learnt a lot about becoming a good computer engineer in that week. </p>
            </p>
        </p>
    </div>

    <div className="about-item">
        <p>
            <h2>Keeping learning fun</h2>
            <p>
               <p> I find participating in hackathons and competitions thrilling as I get to work in a team towards a goal to create something meaningful and complete. I took part in <a href="https://dare2compete.com/o/myntra-hackerramp-weforshe-myntra-151942">Myntra's WeForShe hackathon</a>, where me and team created a solution for online collaborative shopping. We were one of the few teams who got qualified for the first round. Then in May 2020, I participated in <a href="https://hackon.hackerearth.com/">MLH's HackOn 2.0 hackathon</a> where I made friends for a lifetime as we all struggled to work on a tech we had never worked on before. </p>
                {/* <p>As part of DSC Club in my college, I've been part of organizing hackathons too.</p> */}
                {/* I'm famous (not really, but I should be) for making the best playlists ever. Recently I've had these albums on repeat: <a href="https://music.apple.com/in/album/kid-krow/1491987854">Kid Krow</a> by Conan Gray, <a href="https://music.apple.com/in/album/folklore/1524801260">folklore</a> by TS, <a href="https://music.apple.com/in/album/fine-line/1485802965">Fine Line</a> by Harry Styles, and Sasha Slones's EP <a href="https://music.apple.com/in/album/self-portrait-ep/1483234542">Self Portrait</a>. */}
           </p>
        </p>
    </div>

    <div className="about-item">
        <p>
            <h2>Graphic Designing</h2>
            <p>
                <p>I love to create graphic art and expanding my abilities and skills with a pencil. There are so many people on Instagram and Dribbble whose works I try to learn from like <a href="https://dribbble.com/IvanDubovik">Ivan Dubovik</a>, <a href="https://www.instagram.com/yeahyeahmaybe/">yeahyeahmaybe</a> and more. </p>
                <p>As part of DSC club, I got the chance to create posters for one of the biggest hackathon <a href="https://twitter.com/dsc_bvp/status/1382313081620074496?s=20">Game Of Code </a> organized by our club in college.</p>
                {/* I love doodling. Now, I'm doing the highly emotional process of actually learning how to draw.  */}
            </p>
            <div className="art-img">
                <img alt="art" src="https://cdn.dribbble.com/users/3763816/screenshots/14209073/housedotseverywhereartboard_1_72x.png" />
                <img alt="art" src="https://pbs.twimg.com/media/EsUF6NRUUAMzsUn?format=jpg&name=4096x4096" />
                <img alt="art" src="https://pbs.twimg.com/media/EgYB4VrU4AAMyt_?format=jpg&name=large" />
            </div>
        </p>

    </div>
    {/* <div className="about-item">
        <p>
            <h2>Music</h2>
            <p>
                I'm famous (not really, but I should be) for making the best playlists ever. Recently I've had these albums on repeat: <a href="https://music.apple.com/in/album/kid-krow/1491987854">Kid Krow</a> by Conan Gray, <a href="https://music.apple.com/in/album/folklore/1524801260">folklore</a> by TS, <a href="https://music.apple.com/in/album/fine-line/1485802965">Fine Line</a> by Harry Styles, and Sasha Slones's EP <a href="https://music.apple.com/in/album/self-portrait-ep/1483234542">Self Portrait</a>.
           </p>
        </p>
    </div> */}
    <div className="about-item books">
        <p>
            <h2>Books</h2>
            <p>
                I love to read novels, fiction and non-fiction. Some of my favourite books are <a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning">Man's Search for Meaning</a>, <a href="https://www.goodreads.com/book/show/19063.The_Book_Thief">The Book Thief</a>, and <a href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore">Kafka on the Shore</a>. I'm a part of a non-fiction book club of about 15 members from all around the country. Checkout what I'm currently reading on <a href="https://www.goodreads.com/user/show/59977353-vallari-agrawal">GoodReads</a>.  
                {/* I basically grew up with Harry Potter series and it's kind of a ritual, for me and <a href="https://shraddhaag.dev/">my sister</a>, to reread them during/before exams. My favourate in non-fiction is <a href="https://www.goodreads.com/book/show/81939.The_Mastery_of_Love">"Mastery of Love"</a>.  I've recently finished <a href="https://www.goodreads.com/book/show/19063.The_Book_Thief">"The Book Theif"</a>, which is a beautiful book about a young girl in Nazi Germany.   */}
           </p>
        </p>
        <img alt="books" src="https://images-na.ssl-images-amazon.com/images/I/81tdbrewW0L.jpg" />
    </div>
    {/* <div className="about-item">
        <p>
            <h2>Coding</h2>
            <p>
                <a href="https://github.com/VallariAg/Projects/tree/master/Chess">My first project</a> was a two player Chess game with C++, that I made for my school final project in 12th grade. I remember being excited about it and scribbling away in between other classes thinking and planning for it. Then, just before college I started with my web development learning Journey. Starting from HTML, CSS and JavaScript. Tried Angular, React, Node.
           </p>
        </p>
    </div> */}

    <div className="about-item">
        {/* <img alt="wtef" src="https://www.noticebard.com/wp-content/uploads/2020/03/wtm.png" /> */}

        <p>
            Feel free to get in touch!
            
            <Button target="_blank" href="mailto:vallariag@gmail.com">Write Me</Button>
        </p>
    </div>
</p>;
