import { forwardRef } from "react"
import styles from "./Button.module.css"

export type ButtonProps = JSX.IntrinsicElements["button"]

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonComponent(props, ref) {
    return (
      <button
        className={styles.button}
        ref={ref}
        type={props.type ?? "button"}
        {...props}
      />
    )
  }
)
