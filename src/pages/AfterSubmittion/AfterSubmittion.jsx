import React from 'react';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import envelope from "Assets/envelope.png";
export default function AfterSubmittion({ percenatge }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid h-[90vh]">
        <div className="m-auto">
          <div className="grid">
            <div className='m-auto'>
              <div className='w-[80px] h-[80px] mb-3'>
                <CircularProgressbar value={percenatge} text={`${parseFloat(percenatge).toFixed(1)}%`} />
              </div>
            </div>
          </div>
          <div className="">
            <img src={envelope} alt="loading..." className="lg:w-[120px] md:w-[120px] w-[120px] h-auto" />
          </div>
          <div>
          </div>
          <Button conaitnerClass={'grid'} onClick={() => navigate('/')} className={`m-auto bg-primary-color rounded-full w-[120px]`} isLoading={false} isDisabled={false} >{'BACK TO HOME'}</Button>
        </div>
      </div>
    </div>
  )
}
