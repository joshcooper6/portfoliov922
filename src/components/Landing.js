import styled, { keyframes } from "styled-components"
import { arrowDown } from "../assets";
import { useState, useEffect } from "react";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; å}
`

const WRAP = styled.div`
  background-image: url(${props => props.bg});
`

const CONTENT = styled.div`
  background: linear-gradient(-45deg, rgba(0, 0, 0, .4), rgba(255, 255, 255, .1));
  background-size: 400% 400%;
  animation: ${gradient} 3s ease infinite;
`

export default function Landing(props) {

  const images = props.imgs;
  const name = props.name;
  const [i, setI] = useState(0);

  { i >= images.length && setI(0) }


  useEffect(() => {

    const interval = setInterval(() => {
      setI(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);

  }, [])

    const MainHeader = (
      <h1 className='text-green-100 md:text-8xl tracking-tighter lg:text-9xl text-6xl'>{name.first} {name.last}</h1>
    );

    const BottomArrow = (
      <a href="#sticky-nav" className="bottom-0 absolute bounce self-center text-center text-3xl p-10">
        <img src={arrowDown} alt="arrowdown" className="h-16 w-16 invert" />
      </a>
    );

    return (<>
      <WRAP bg={images[i]} className="bg-cover bg-bottom xl:bg-center transition-ease">
        <CONTENT className="min-h-screen min-w-screen flex flex-col justify-center align-center text-center">
            {MainHeader}
            {BottomArrow}
        </CONTENT>
      </WRAP>
    </>)
}