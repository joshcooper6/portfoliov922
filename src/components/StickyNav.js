import { crown } from '../assets';

export default function StickyNav(props) {

    const icons = props.socials;

    return(<>
        <div id="sticky-nav" className={`h-auto bg-green-100 w-screen flex justify-between sticky top-0 z-50`} onClick={(e) => {}}>
          <h2 className='lg:text-5xl md:text-4xl gap-1 text-3xl p-6 font-semibold flex transition-ease cursive'><img src={crown} alt='crown' className="lg:h-16 md:h-12 h-10 self-center transition-ease" />J.</h2>
          <div className='flex self-center gap-2 p-4'>
            {icons.map((icon) => {
                return (<a href={icon.src} target="_blank" rel="noreferrer" key={icon.id}>
                        <img key={icon.id} alt={icon.id} src={icon.icon} className='md:h-12 lg:h-14 h-10 hover:scale-110 transition-ease' />
                    </a>)
            })}
          </div>
        </div>
    </>)
}