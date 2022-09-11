import { useState } from "react";
import { close, bars } from "../assets";
import styled from "styled-components";

const ICON = styled.img`
  height: inherit;
  width: inherit;

  // @media (min-width: 800px) {
  //   display: none;
  // }
 `

 const ICONWRAP = styled.div`
//  height: 40px;
//  width: 40px;
 `

export default function FixedNav(props) {

    const [navActive, setNavActive] = useState(false);
    const [rotating, setRotating] = useState(false);

    const hc = (e) => {
      setNavActive((prev) => !prev);
      setRotating(true);
    };

    return(<>
        <ICONWRAP onClick={hc} onAnimationEnd={() => {setRotating(false)}} className={`${rotating && 'rotate'} ${props.hide && 'hidden'} fixed right-0 top-0 m-4 md:m-8 md:w-14 w-12 transition-ease`}>
            <ICON src={navActive ? close : bars} className="invert rotate z-50 lg:hidden" />
         </ICONWRAP>
    </>)
}