import React from "react";
import { Outlet } from "react-router-dom";
import { Select, Header , TextArea, Radio ,CheckBox} from "components";

;

export default function Layout() {

    return (
        <div className="font-sans ">
            <Header />
          {
            Array(4).fill().map((_ , index)=>(
                <CheckBox key={index} name={"anem"} label={"Abhijeet kumar tell me "} />
            ))
          }


                   {
            Array(4).fill().map((_ , index)=>(
                <Radio key={index} name={"anem"} label={"Abhijeet kumar tell me "} />
            ))
          }
            <Select className={'w-[210px]'} selectionOption={["abhijeet", "country", "Rating "]} />
            <TextArea className={'w-full'}  placeholder={"Requirment"} label={"Requirement"} />
        </div>
    );
}

