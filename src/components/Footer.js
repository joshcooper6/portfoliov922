import { arrowDown } from "../assets";


export default function Footer(props) {

    const IMAGE = props.img;
    const TEXT = props.text;
    const NAME = props.name;

    return(<>
        <div className='bg-green-100 flex flex-col md:flex-row-reverse p-16 justify-center w-screen gap-8 md:gap-8'>

            <img src={IMAGE} alt="icon" className={`object-cover md:h-60 h-72 w-72 md:w-60 self-center circle grayscale contrast-more reflect`}/>


            <div className='self-center flex flex-col gap-2 md:gap-4'>
                <h1 className='md:text-5xl text-4xl font-semibold tracking-tight max-w-xl'>About {NAME.first}</h1>
                <p className='lg:text-2xl text-xl font-extralight max-w-2xl'>{TEXT}</p>
            </div>

        </div>

        <div onClick={() => {window.scrollTo(0,0)}} className="w-screen flex justify-center bg-green-100 hover:cursor-pointer transition-ease">
            <div className="w-full flex justify-center transition-ease bounce pb-10">
                <img alt="arrowup" src={arrowDown} className='rotate-180 h-10 w-10' />
            </div>
        </div>
    </>)
}
