"use client"
import { Form, FormField, FormControl, FormSubmit, FormLabel } from "@radix-ui/react-form";
import { FormikProvider, useFormik } from "formik";
import * as yup from 'yup';

import InputExample from "./components/InputExample";
import { useState } from "react";

export default function Home() {
  
  const [money, setMoney] = useState('aloooooooooo')

  const onSubmit = ({ money }: { money: string }) => {
    setMoney(money)
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
    <>
       <FormikProvider value={formikbag}>
     <Form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
        <FormField name="test">
        <FormLabel className="text-black">
          Money:
        </FormLabel>
          <FormControl asChild>
            <InputExample className="border border-gray-500 p-2" onChange={handleChange} name="money"/> 
          </FormControl>
          <FormSubmit asChild>
            <button className="text-white px-3 py-2 rounded-lg bg-violet-500 hover:bg-violet-600">enviar</button>
          </FormSubmit>
        </FormField>
    </Form>
    </FormikProvider>
    </>
  )
}