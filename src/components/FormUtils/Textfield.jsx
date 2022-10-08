import React  from "react";

const  Textfield=({ error,
    placeholder,
    name,
    isRequired,
    type,
    icon,
    ...props }) =>{
    return (
            <div className="w-full ">
                <div className="relative">
                    {icon && <span className="absolute top-4 left-3 bg-white">{icon}</span>}
                    <input
                        type={type}
                        name={name}
                        required={isRequired}
                        placeholder={placeholder}
                        {...props}
                        className={`input input-bordered ${icon && 'pl-10'} w-full ${error && "border border-primary-color"
                            }`}
                    />
                </div>
                <p className=" px-2 mb-0 pt-1 text-xs text-primary-color">{error?.message}</p>
            </div>
    );
}

export default React.forwardRef(Textfield);
