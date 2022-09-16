import React from 'react';
import * as components from 'components';
import { type } from 'utils/commonutils';
import { FormProvider, useForm, Controller } from "react-hook-form";
import AfterSubmittion from '../AfterSubmittion/AfterSubmittion';
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
    // from data tracking has been done 
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
        label: "test"
      }
    },
    {
      type: "file",
      data: {
        is_multiple: false,
        is_required: false,
        name: "cv",
        label: "upload you cv here "
      }
    },
    {
      type: "text",
      data: {
        is_multiple: false,
        is_required: false,
        name: "myfile",
        label: "test"
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


  return (
    <div>
      {
        formData.length > 0 ? (
          <FormProvider {...methods}>
            {
              formData.length < formUnit ? (
                <AfterSubmittion />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <components.ProgressBar width={((progressTracking / formData.length) * 100) ?? 0} />
                  {
                    formData.slice(formUnit - 1, formUnit)?.map((dom, index) => {
                      if (dom.type === type.text) {
                        return (
                          <div key={index}>
                            <Controller
                              control={control}
                              name={dom?.data?.name}
                              render={({
                                field,
                                fieldState: { invalid, isTouched, isDirty, error },
                              }) => (
                                <components.TextInput {...field} type={'text'} inputRef={field.ref} />
                              )} />
                          </div>

                        )
                      }
                      if (dom.type === type.radio) {
                        return (
                          <div key={index}>
                            <label>{dom?.des}</label>
                            {
                              dom?.data?.map((domSec) => (
                                <div >
                                  <Controller
                                    control={control}
                                    name={domSec?.name}
                                    render={({
                                      field,
                                      fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                      <components.Radio inputRef={field.ref} {...field} value={domSec?.value} label={domSec?.label} />
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
                              dom?.data?.map((domSec) => (
                                <div >
                                  <Controller
                                    control={control}
                                    name={domSec?.name}
                                    render={({
                                      field,
                                      fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                      <components.CheckBox inputRef={field.ref} {...field} value={domSec?.value} label={domSec?.label} />
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
                                <components.TextArea className={`w-full`}  {...field} />
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

                  <div>
                    <div>
                      <components.Button type="submit" className={`m-auto bg-primary-color rounded-full w-[180px]`} text={`NEXT`} isLoading={false} isDisabled={false} />
                    </div>
                    <div>
                      <components.Button type="button" onClick={() => formUnitFunction(formUnit)} className={`m-auto bg-primary-color rounded-full w-[180px]`} text={`SKIP`} isLoading={false} isDisabled={false} />
                    </div>
                  </div>

                  <div>
                  </div>
                </form>
              )
            }


          </FormProvider>
        ) : (
          <h1>Sorry something  gone wrong here </h1>
        )
      }

    </div>
  );
}

export default SurveyForm;
