import React from 'react';
import * as components from 'components';
import { type } from 'utils/commonutils';
import { FormProvider, useForm, Controller } from "react-hook-form";
import AfterSubmittion from '../AfterSubmittion/AfterSubmittion';
import toast from 'react-hot-toast';


const SurveyForm = () => {
  const [formUnit, SetFormUnit] = React.useState(1);
  const [progressTracking, SetProgressTracking] = React.useState(0);
  const methods = useForm({
    mode: "all"
  });

  const { control, handleSubmit,
    // formState: { isDirty, isValid } 
  } = methods;

  const formUnitFunction = (e) => {
    SetFormUnit(e + 1)
  }
  const onSubmit = (data) => {
    const formValue = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        formValue.append(key, value);
      }
    }
    SetProgressTracking(progressTracking + 1);
    formUnitFunction(formUnit);
  }

  const formData = [
    {
      type: "textarea",
      data: {
        is_multiple: false,
        is_required: false,
        name: "myfile",
        label: "What is monthly income here ?"
      }
    },
    {
      type: "file",
      data: {
        is_multiple: false,
        is_required: false,
        name: "cv",
        label: "Upload your cv ?"
      }
    },
    {
      type: "text",
      data: {
        is_multiple: false,
        is_required: false,
        name: "myfile",
        label: "Youy name must be fill up here "
      }
    },
    {
      type: "text",
      data: {
        is_multiple: false,
        is_required: false,
        name: "myfi333le",
        label: "test"
      }
    },
    {
      type: "radio",
      des: 'lorem ispum it is dummy text here ',
      data: [
        {
          is_multiple: false,
          is_required: false,
          name: "radio2",
          value: "abhi",
          label: "it is radion lable test "
        },
        {
          is_multiple: false,
          is_required: false,
          name: "radio2",
          value: "abhi",
          label: "it is radion lable test "
        }
      ],
    },

    {
      type: "checkbox",
      des: 'lorem ipsum it is checkbox ',
      data: [
        {
          is_multiple: false,
          is_required: false,
          name: "fruid",
          value: "something",
          label: "it is checkbox  first "
        },
        {
          is_multiple: false,
          is_required: false,
          name: "sweet",
          value: "abhi",
          label: "it is checkbox has been second   "
        }
      ],
    },
    {
      type: "select",
      des: 'lorem ipsum it is checkbox ',
      data: {
        is_multiple: false,
        is_required: false,
        name: "selectone",
        label: "it is radion lable test ",
        selectBoxOption: [
          'option 1',
          'option 2',
          'option 3',
          'option 4',
        ]

      }
    },
  ]

  React.useEffect(() => {
    if (formData.length < formUnit) {
      toast.custom((t) => (<components.Notification t={t} link={'/subscribe'} />))
    }
  }, [formData.length, formUnit]);


  return (
    <div>
      {
        false ? (
          <components.Loader />
        ) :
          formData.length > 0 && (
            <FormProvider {...methods}>
              {
                formData.length < formUnit ? (
                  <AfterSubmittion percenatge={((progressTracking / formData.length) * 100) ?? 0} />
                ) : (
                  <div className="grid h-[90vh]">
                    <form className="m-auto lg:w-[60%] md:w-[70%] w-[98%] " onSubmit={handleSubmit(onSubmit)}>
                      <components.ProgressBar width={((progressTracking / formData.length) * 100) ?? 0} />
                      <div className="px-1">
                        <h1 className="lg:text-2xl text-base uppercase font-semibold  ">American Eagle </h1>
                      </div>
                      <div className=" bg-[#ebe9e6]  rounded-md p-4">
                        {
                          formData.slice(formUnit - 1, formUnit)?.map((dom, index) => {
                            if (dom.type === type.text) {
                              return (
                                <div key={index}>
                                  {dom?.data?.label && (<label htmlFor="textInput">{dom?.data?.label}</label>)}
                                  <Controller
                                    control={control}
                                    name={dom?.data?.name}
                                    render={({
                                      field,
                                      fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                      <components.TextInput {...field} type={'text'}  />
                                    )} />
                                </div>

                              )
                            }
                            if (dom.type === type.radio) {
                              return (
                                <div key={index}>
                                  <label htmlFor="htmlForm">{dom?.des}</label>
                                  {
                                    dom?.data?.map((domSec , index) => (
                                      <div key={index}>
                                        <Controller
                                          control={control}
                                          name={domSec?.name}
                                          render={({
                                            field,
                                            fieldState: { invalid, isTouched, isDirty, error },
                                          }) => (
                                            <components.Radio {...field} value={domSec?.value} label={domSec?.label} />
                                          )} />
                                      </div>
                                    ))
                                  }
                                </div>
                              )
                            }
                            if (dom.type === type.checkbox) {
                              return (
                                <div key={index}>
                                  <label>{dom?.des}</label>
                                  {
                                    dom?.data?.map((domSec , index) => (
                                      <div key={index}>
                                        <Controller
                                          control={control}
                                          name={domSec?.name}
                                          render={({
                                            field,
                                            fieldState: { invalid, isTouched, isDirty, error },
                                          }) => (
                                            <components.CheckBox {...field} value={domSec?.value} label={domSec?.label} />
                                          )} />
                                      </div>
                                    ))
                                  }
                                </div>

                              )
                            }
                            if (dom.type === type.textarea) {
                              return (
                                <div key={index}>
                                  <Controller
                                    control={control}
                                    name={dom?.data?.name}
                                    render={({
                                      field,
                                      fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                      <components.TextArea className={`w-full`} label={dom?.data?.label} {...field} />
                                    )} />
                                </div>
                              )
                            }
                            if (dom.type === type.file) {
                              return (
                                <div key={index}>
                                  {dom?.data?.label}
                                  <Controller
                                    control={control}
                                    name={dom?.data?.name}
                                    render={({
                                      field,
                                      fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                      <components.FileUpload {...field} />
                                    )} />
                                </div>
                              )
                            }
                            if (dom.type === type.select) {
                              return (
                                <div key={index}>
                                  {dom?.data?.label}
                                  <Controller
                                    control={control}
                                    name={dom?.data?.name}
                                    render={({
                                      field,
                                      fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                      <components.Select className={``} selectionOption={dom?.data?.selectBoxOption} isRequired={true} {...field} />
                                    )} />
                                </div>
                              )
                            } else {
                              return (<h1>something gone wrong </h1>)
                            }
                          })
                        }
                      </div>
                      <div className="flex justify-end mt-3">
                        <span className="mx-2">
                          <components.Button type="button" onClick={() => formUnitFunction(formUnit)} className={`m-auto lg:btn-sm md:btn-sm  btn-sm bg-primary-color rounded-lg w-[120px]`} isLoading={false} isDisabled={false}>{'SKIP'}</components.Button>{ }
                        </span>
                        <span className="mx-2">
                          <components.Button type="submit" className={`m-auto lg:btn-sm md:btn-sm btn-sm bg-primary-color rounded-lg w-[120px]`} text={`NEXT`} isLoading={false} isDisabled={false} >{'NEXT'}</components.Button >
                        </span>
                      </div>
                      <div>
                      </div>
                    </form>
                  </div>
                )
              }


            </FormProvider>
          )
      }
    </div>
  );
}

export default SurveyForm;
