import React from 'react';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';

// import the image here 
export default function AfterSubmittion({percenatge}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid h-[90vh]">
        <div className="m-auto">
        <div className="grid">
            <div className='m-auto'>
            <div className='w-[80px] h-[80px] mb-3'>
              <CircularProgressbar value={percenatge} text={`${parseFloat(percenatge).toFixed(1)}%`}  />
            </div>
            </div>
          </div>
          <div className="">
            <img src="https://play-lh.googleusercontent.com/mVgXol6gGP21dOZDcowB98ttq-592tcZV7GEz6K8fEaKuySAkQTamNIkA4M4Q5SjGQ" alt="loading..." className="lg:w-[320px] md:w-[280px] w-[220px] h-auto" />
          </div>
         
          <div>
          
          </div>
          <Button conaitnerClass={'grid'} onClick={() => navigate('/')} className={`m-auto bg-primary-color rounded-full w-[180px]`} text={`BACK TO HOME`} isLoading={false} isDisabled={false} />
        </div>
      </div>
    </div>
  )
}
