export default function Loading(props) {

    const setLoaded = props.setLoaded;

    return(<>
        <div onAnimationEnd={() => setLoaded(true)} className={`fixed top-0 left-0 h-screen w-screen bg-green-100 text-black flex flex-col justify-center align-center text-center`}>
            <h1 className='text-6xl font-thin fade w-4/5 self-center'>Loading the developer...</h1>
        </div>
        </>)
}