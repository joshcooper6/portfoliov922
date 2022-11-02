import { useRef, useState } from "react";
import ProjectThumb from "./ProjectThumb";

export default function Projects(props) {

    const PORTFOLIO = props.portfolio;

    const [toggled, setToggled] = useState();

    const divRef = useRef('');

    window.onscroll = () => {
        let tracker = ((window.scrollY >= (divRef.current.offsetTop - 500)));
        setToggled(tracker);
    };

    const rendered = PORTFOLIO.map((item) => {
        return <ProjectThumb key={item.text} tracker={toggled} pstn={item.pstn} desc={item.desc} image={item.image} text={item.text} src={item.src} />
    });

    return(<>
         <div className='flex justify-center align-center text-center min-w-screen pt-16 pb-16'>
{/* 
            <div className="flex flex-col justify-center align-center md:w-1/2 min-w-screen">
                <h1 className="text-3xl">3d model goes here</h1>
            </div> */}

            <div ref={divRef} className="flex flex-col justify-center align-center text-center gap-16 transition-ease ">
                <h1 className='text-8xl tracking-tighter font-semibold'>Projects</h1>
                <div className={`flex flex-wrap gap-2 justify-center self-center max-w-[1000px] w-11/12`}>
                    {rendered}
                </div>
            </div>
            
        </div>
    </>);
};