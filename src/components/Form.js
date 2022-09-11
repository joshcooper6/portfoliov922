import { useState } from "react";

export default function Form() {
    
    const [verified, setVerified] = useState(false);
    const [formInfo, setFormInfo] = useState({
        Name: '',
        Email: '',
        Message: ''
    });
  
    const hc = (e) => {
      setFormInfo(prev => ({
          ...prev,
          [e.target.name]: e.target.value
      }))
    };
  
    const hs = (e) => {
      e.preventDefault();
      console.log(formInfo);
    };
  
    const elements = Object.keys(formInfo);

    const renderListElements = elements.map((item) => {
      return (<div key={item} className='flex w-full flex-row-reverse gap-3 self-center'>
        <input onChange={hc} key={item} name={item} type="text" placeholder={`Enter your ${item.toLowerCase()} here...`} className='w-11/12 border rounded-md overflow-scroll p-1'/>
        <label htmlFor={item} className='self-center'>{item}</label>
      </div>)
    });
  
  
    const hv = (e) => {
      if (e.target.checked) {
        setVerified(true)
      } else {
        setVerified(false)
      }
    };
  
    const renderVerify = (<div className='flex gap-1 self-center'>
      <input type="checkbox" name='verified' onChange={hv}/>
      <label htmlFor='verified'>Confirm you are not a robot</label>
    </div>);
  
    const renderSubmit = (
      <button 
      onClick={hs} 
      className={`border rounded bg-green-100 p-2 text-3xl uppercase tracking-wide text-stone-500 ${!verified && 'bg-red-300'}`} 
      disabled={!verified}
      >
        Submit
      </button>
    );

    return(<>

        <div className='flex flex-col justify-center align-center p-10'>
      
            <h1 className='text-8xl tracking-tighter self-center'>Contact.</h1>
            <form className='flex flex-col self-center gap-3 w-11/12 max-w-2xl m-4'>
                {renderListElements}
                {renderVerify}
                {renderSubmit}
            </form>
  
        </div>
    </>)
}