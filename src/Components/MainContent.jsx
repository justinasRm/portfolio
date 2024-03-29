import React, { useState } from 'react';
import { useEffect } from 'react';

import MouseCursorEffect from '../Animations/MouseCursorEffect';

import AboutMe from '../Components/MainSections/AboutMe';
import Projects from '../Components/MainSections/Projects';
import ContactMe from './MainSections/ContactMe';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRef } from 'react';



function MainContent(props) {

    const [emailCopiedAlert, setEmailCopiedAlert] = useState(false);

    const emailCopiedAlertRef = useRef();

    function introTextEntered(e){
        setTimeout(() => {
            e.target.classList.add('intro-text-hovered')
        }, 100);

    }
    function introTextLeft(e){
        setTimeout(() => {
            e.target.classList.remove('intro-text-hovered');
        }, 100);
    }



    useEffect(()=>{
        MouseCursorEffect();
        document.querySelector('.intro-text').classList.add('fadein');
        setTimeout(() => {
            const miniAbout = document.querySelector('.intro-text-miniAbout');
            miniAbout.classList.add('fadein');miniAbout.style.opacity='1'}, 666);
    },[])

    useEffect(()=>{
        if(emailCopiedAlert){
            setTimeout(() => {
                emailCopiedAlertRef.current.style.opacity='0';
                setTimeout(() => {
                    setEmailCopiedAlert(false);
                }, 500);
            }, 2000);
        }
    },[emailCopiedAlert])

    return (
            <main className='MainContent'>
                {emailCopiedAlert ? <p className='emailCopied' ref={emailCopiedAlertRef}>Email has been copied to clipboard!</p> : null}
                <div className='gmail-dash'>
                    <a href='mailto:justinas.rimavicius1@gmail.com'>justinas.rimavicius1@gmail.com</a>
                    <div className='dash-for-gmail'></div>
                </div>
                <div className='socials-dash'>
                    <div className='socials-holder'>
                        <GitHubIcon fontSize='large' onClick={()=>{window.location='https://github.com/Justasrimavicius'}}/>
                        <LinkedInIcon fontSize='large' onClick={()=>{window.location='https://www.linkedin.com/in/justinas-rimavicius/'}}/>
                        <div className='dash-for-socials'></div>
                    </div>
                </div>
                <canvas id='myCanvas'></canvas>
                <div className='above-fold'>
                    <div className='intro-text'>
                        <h6 className='intro-text-first' onMouseEnter={(e)=>{introTextEntered(e)}} onMouseLeave={(e)=>{introTextLeft(e)}}>
                            Justinas
                        </h6>
                        <h6 className='intro-text-second' onMouseEnter={(e)=>{introTextEntered(e)}} onMouseLeave={(e)=>{introTextLeft(e)}}>
                            Rimavičius
                        </h6>
                    </div>
                    <div className='intro-text-miniAbout'>
                        <h4>
                            I am a web developer that understand both the frontend and the backend. <br></br>
                            I've been self-teaching web development technologies <br></br>
                            and have fallen in love with the journey of continous learning! <br></br>
                        </h4>
                        <div className='navigating-buttons'>
                            <button onClick={()=>{props.refs.contactMeSection.current.scrollIntoView()}}>CONTACT ME</button>
                            <button onClick={()=>{props.refs.aboutMeSection.current.scrollIntoView()}}>MY SKILLS</button>
                            <button onClick={()=>{props.refs.myWorkSection.current.scrollIntoView()}}>PROJECTS</button>
                        </div>

                        {/* aboutMeSection,myWorkSection,contactMeSection */}
                    </div>
                </div>
                <AboutMe aboutMeRef={props.refs.aboutMeSection}/>
                <Projects myWorkRef={props.refs.myWorkSection}/>
                <ContactMe contactMeRef={props.refs.contactMeSection} setEmailCopiedAlert={setEmailCopiedAlert}/>
            </main>
    );
}

export default MainContent;