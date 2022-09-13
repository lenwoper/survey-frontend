import React from "react";

export default function Textfield({ error, placeholder, type, ...props }) {
    return (
        <React.Fragment>
            <div className="w-full max-w-xs">
                <input
                    type={type}
                    placeholder={placeholder}
                    {...props}
                    className={`input input-bordered w-full max-w-xs ${
                        error && "border border-red-500"
                    }`}
                />
                <p className=" px-2 mb-0 text-xs text-red-500">{error}</p>
            </div>
        </React.Fragment>
    );
}
