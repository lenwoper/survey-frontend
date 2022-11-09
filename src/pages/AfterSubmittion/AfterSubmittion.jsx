import React from 'react';
import { Button, RedialProgresBar } from 'components';
import { useNavigate } from 'react-router-dom';
import envelope from "Assets/envelope.png";

export default function AfterSubmittion({ percenatge }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid h-[90vh]">
        <div className="m-auto">
          <div className="grid">
            <div className='m-auto'>
              <div className='mb-3'>
                <RedialProgresBar props={
                  {
                    textClassName: 'text-[18px] text-[#34B53A] font-semibold ',
                    bg: 'bg-[#E2FBD7]',
                    content: 'text-[#34B53A]',
                    borderWidth: 'border-4',
                    border: 'border-[#E2FBD7]',
                    size: '8rem'
                  }
                } value={28} />
              </div>
            </div>
          </div>
          <div className="">
            <img src={envelope} alt="loading..." className="lg:w-[220px] md:w-[220px] w-[180px] h-auto" />
          </div>
          <div>
          </div>
          <Button conaitnerClass={'grid'} onClick={() => navigate('/')} className={`m-auto bg-primary-color rounded-full w-[180px]`} isLoading={false} isDisabled={false} >{'BACK TO HOME'}</Button>
        </div>
      </div>
    </div>
  )
}
