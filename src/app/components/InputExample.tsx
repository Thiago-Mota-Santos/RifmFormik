import { TextFieldInput } from "@radix-ui/themes"
import { Ref, forwardRef } from "react"
import { useField } from 'formik'
import { useRifm } from "rifm"

  // type Props = {
  //   name: string;
  // } & Omit<PropsWithoutRefOrColor<'input'>, 'size'>
  

type Props = {
  name: string;
  onChange?: (value: string) => void;
  className?: string
}

const InputExample = forwardRef(({ name = '', className, onChange, ...props}: Props, ref: Ref<HTMLInputElement>) => {
    
    const [field, meta, helpers] = useField(name)

    const numberFormat = (str: string) => {
      const r = parseInt(str?.replace(/[^\d]+/gi, ''), 10);
      return r ? r.toLocaleString('en') : '';
    }
    
    const rifm = useRifm({
      value: field.value,
      onChange: (v) => {
        helpers.setValue(v);
        if(!onChange) return;
        onChange(v)
      },
      format: numberFormat
    })
 
    return (
      <>
      <TextFieldInput
      className={className}
      name={name}
      onChange={rifm.onChange}
      value={rifm.value}
      placeholder="Enter number..."
      {...props}
    />
     {meta?.error && meta?.touched ? <span className="text-red-600">{meta.error}</span> : null}
     </>
    )

})

InputExample.displayName = "InputExample"

export default InputExample