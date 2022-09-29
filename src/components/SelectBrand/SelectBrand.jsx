import React from 'react';
// import { getImg } from 'utils/commonutils';
import Avatar from 'Assets/avatar.png';
const SelectBrand = ({
  textClass,
  imgClass,
  name,
  userName,
  checked,
  userProfileImg,
  ...props
}) => {
  return (
    <div>
          <div className='lg:my-2 my-1 border border-secondry-color rounded-md py-2 relative'>
                {/* radio button  */}
                <span className="absolute bg-[#fff]  top-[-5px] right-[-5px] z-[3]">
                <input type="checkbox" name={name} {...props} className="checkbox text-primary-color rounded-full" />
                </span>
                {/* radio button  */}
                <div className='grid grid-cols-5'>
                  <div className="grid col-span-2">
                    <img className="m-auto lg:px-[5px] md:px-[3px] rounded-[50%] w-[70px] h-[65px]" src={Avatar} alt={userProfileImg??'loading...'} />
                  </div>
                  <div className="col-span-3 grid">
                    <section className='m-auto w-full'>
                      <span className='text-base  font-semibold'>{userName}</span>
                    </section>
                  </div>
                </div>
              </div>
    </div>
  );
}

export default SelectBrand;
