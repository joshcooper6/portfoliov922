import { useState, useRef, useEffect } from "react";

export default function ProjectThumb(props) {

    const IMAGE = props.image;
    const TEXT = props.text;
    const SOURCE = props.src;
    const POSITION = props.pstn; 
    const DESC = props.desc;
    const TRACKER = props.tracker;

     // eslint-disable-next-line
    const [clicked, setClicked] = useState(false);

    return(<>
            <div onAnimationEnd={() => {setClicked(false)}} className={`min-h-40 h-max md:h-80 md:w-80 w-screen flex rounded-xl snap-start flex-col align-center relative justify-center text-center bg-black hover:cursor-pointer  transition-ease`}>
              <img src={IMAGE} alt={'Project'} className={`w-full h-full object-cover rounded-xl absolute ${POSITION}`} />
              <a href={SOURCE} target="_blank" rel='noreferrer' onClick={() => setClicked(true)} className={`rounded-xl absolute my-0 mx-auto w-full h-full flex flex-col justify-center text-3xl text-green-100 bg-black bg-opacity-90 hover:bg-opacity-80 transition-ease`}>
                    <h1 className={`max80 font-thin ${TRACKER ? '' : 'opacity-0'} h-full pt-3 w-full flex flex-col justify-center m-0 transition-ease text-5xl hover:text-6xl lg:hover:text-5xl self-center`}>{TEXT}</h1>
                    {/* <p className={`transition-ease ${TRACKER ? '' : 'opacity-0'} text-xs pb-5 pt-2 w-4/5 max-w-md md:w-10/12 self-center tracking-widest text-left`}>{DESC}</p>  */}
              </a>
            </div>
    </>)
}