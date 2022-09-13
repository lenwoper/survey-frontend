import React from 'react'
import { Button, TextInput, CheckBox } from 'components'

export default function Login() {
  return (
    <div><div className="grid">
      <div className='m-auto'>
        <div className="hero-content p-0 flex-col lg:flex-row-reverse" style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/smart-industry-robot-arms-digital-factory-production-technology_31965-8795.jpg?w=2000)" }}>

          <div className="text-center lg:text-left h-full " >
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm rounded-none  bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <TextInput type={"email"}
                  error={""}
                  placeholder="Email ID" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <TextInput type={"password"}

                  error={""}
                  placeholder="Email ID" />
                <div className="grid grid-cols-2">
                  <label className="label">
                    <span className="label-text-alt link link-hover">Forgot password?</span>
                  </label>
                  <label>
                    <CheckBox className={"text-xs float-right"} label={"Rember Me"} />
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <Button
                  isLoading={false}
                  isDisabled={false}
                  className={"bg-primary-color w-full "}
                  text={"LOGIN"}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div></div>
  )
}
