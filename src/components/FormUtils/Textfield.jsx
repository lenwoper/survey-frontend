import React from "react";

export default function Textfield({ error, placeholder, name, type , icon, ...props }) {
    return (
        <React.Fragment>
            <div className="w-full ">
                <div className="relative">
                 {  icon && <span className="absolute top-4 left-3 bg-white">{icon}</span>}
                    <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        {...props}
                        className={`input input-bordered ${icon&& 'pl-10'} w-full ${error && "border border-red-500"
                            }`}
                    />
                </div>
                <p className=" px-2 mb-0 text-xs text-red-500">{error?.message}</p>
            </div>
        </React.Fragment>
    );
}
