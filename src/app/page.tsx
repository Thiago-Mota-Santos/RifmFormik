"use client"
import { Form, FormField, FormControl, FormSubmit } from "@radix-ui/react-form";
import { FormikProvider, useFormik } from "formik";
import * as yup from 'yup';

import InputExample from "./components/InputExample";

export default function Home() {
  
  const onSubmit = ({ money }: { money: string }) => {
    console.log({ money })
  }

  const formikbag = useFormik({
    initialValues: {
      money: ''
    },
    validationSchema: yup.object({
      money: yup.string()
    }),
    onSubmit,
  });

 
  const { handleSubmit, handleChange } = formikbag;


  return (
    <FormikProvider value={formikbag}>
    <Form onSubmit={handleSubmit}>
        <FormField name="test">
          <FormControl asChild>
            <InputExample onChange={handleChange} name="money"/> 
          </FormControl>
          <FormSubmit asChild>
            <button className="text-white">enviar</button>
          </FormSubmit>
        </FormField>
    </Form>
    </FormikProvider>

  )
}