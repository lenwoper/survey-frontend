import React from 'react'
import { TextInput , Button} from '../../components'

export default function Login() {
  return (
    <div><div className="grid">
        <div className='m-auto'>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <TextInput  type={"email"}
                 error={""}
                 placeholder="Email ID"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <TextInput  type={"password"}
            
                 error={""}
                 placeholder="Email ID"/> <label className="label">
              <span  className="label-text-alt link link-hover">Forgot password?</span>
            </label>
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
