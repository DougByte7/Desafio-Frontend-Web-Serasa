import { ChangeEvent, FormEvent, useEffect, useState } from "react"

const useForm = <Values = Record<string, unknown>>(formData: {
  initialValues: Values
  validate?: { [Key in keyof Values]?: (v: Values[Key]) => null | string }
}) => {
  const [values, setValues] = useState(formData.initialValues)
  const [valid, setValid] = useState(true)

  useEffect(() => {
    if (!formData.validate) return

    const isValid = !Object.entries(formData.validate).some(
      ([key, val]: [any, any]) => {
        return null !== val(values[key as keyof typeof values])
      }
    )

    setValid(isValid)
  }, [formData.validate, values])

  function onSubmit(callback: VoidFunction) {
    return function (event: FormEvent<HTMLFormElement>) {
      event.preventDefault()

      callback()
    }
  }

  function from(key: keyof typeof values) {
    return {
      value: values[key],
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setValues((values) => ({ ...values, [key]: event.currentTarget.value }))
      },
    }
  }

  return {
    values,
    setValues,
    from,
    onSubmit,
    valid,
    invalid: !valid,
  }
}

export default useForm
