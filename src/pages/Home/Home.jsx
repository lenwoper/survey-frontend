import React from 'react';
import { Carousel, SelectBrand } from 'components'
import { data } from 'constants/Data';
export default function Home() {
  return (
    <React.Fragment>
      <div className="mt-16">
        <Carousel data={data} />
      </div>
      <div className="lg:px-24 md:px2 px-1 overflow-auto">
        <div className="lg:px-2 md:px-2 px-8 mt-3 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          {
            Array(4).fill().map((_, index) => (
              <SelectBrand key={index} />
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
}


