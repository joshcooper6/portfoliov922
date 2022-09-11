import { useState } from "react";

export default function ProjectThumb(props) {

    const IMAGE = props.image;
    const TEXT = props.text;
    const SOURCE = props.src;
    const POSITION = props.pstn; 

     // eslint-disable-next-line
    const [clicked, setClicked] = useState(false);

    return(<>
            <div onAnimationEnd={() => {setClicked(false)}} className={`h-40 lg:h-80 md:h-60 lg:w-80 w-screen flex rounded-xl snap-start flex-col align-center relative justify-center text-center bg-black hover:cursor-pointer  transition-ease`}>
              <img src={IMAGE} alt={'Project'} className={`w-full h-full object-cover rounded-xl absolute ${POSITION}`} />
              <a href={SOURCE} target="_blank" rel='noreferrer' onClick={() => setClicked(true)} className={`rounded-xl absolute my-0 mx-auto w-full h-full flex flex-col justify-center text-3xl text-green-100 bg-black bg-opacity-90 hover:bg-opacity-80 transition-ease`}>
                    <h1 className='max80 font-thin h-full w-full flex flex-col justify-center transition-ease text-5xl hover:text-6xl lg:hover:text-5xl self-center'>{TEXT}</h1>
              </a>
            </div>
    </>)
}