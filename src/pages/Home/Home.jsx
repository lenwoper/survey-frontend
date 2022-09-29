import React from 'react';
import { Carousel ,SelectBrand} from 'components'
import image1 from 'Assets/slider-1.png';
import image2 from 'Assets/slider-2.png';
import image3 from 'Assets/slider-3.png';
import image4 from 'Assets/slider-4.png';

export default function Home() {
  const data = [
    {
      src: image1,
      alt: ""
    },
    {
      src: image2,
      alt: ""
    },
    {
      src: image3,
      alt: ""
    },
    {
      src: image4,
      alt: ""
    },
  ]
  return (
    <React.Fragment>
      <div className="mt-16">
        <Carousel data={data} />
      </div>
      <div className="lg:px-24 md:px2 px-1">
        <div className="lg:px-2 md:px-2 px-8 mt-3 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          {
            Array(4).fill().map((_, index) => (
          <SelectBrand key={index}  />
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
}


