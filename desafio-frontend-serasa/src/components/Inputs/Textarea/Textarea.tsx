import { forwardRef } from "react"
import Text from "@/components/Typography/Text"
import styles from "./Textarea.module.css"

export type TextareaProps = {
  label: string
} & JSX.IntrinsicElements["textarea"]

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextareaComponent({ label, ...rest }, ref) {
    return (
      <Text bold>
        <label className={styles["textarea"]}>
          {label}
          <textarea className={styles["textarea__input"]} ref={ref} {...rest} />
        </label>
      </Text>
    )
  }
)
