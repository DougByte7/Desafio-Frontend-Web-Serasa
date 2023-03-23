import { forwardRef } from "react"
import Text from "@/components/Typography/Text"
import styles from "./TextInput.module.css"

export type TextInputProps = {
  label: string
} & JSX.IntrinsicElements["input"]

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInputComponent({ label, ...rest }, ref) {
    return (
      <Text bold>
        <label className={styles["text-input"]}>
          <span>
            {label}
            {rest.required && <span aria-hidden="true">*</span>}
          </span>
          <input
            className={styles["text-input__input"]}
            ref={ref}
            type="text"
            {...rest}
          />
        </label>
      </Text>
    )
  }
)
