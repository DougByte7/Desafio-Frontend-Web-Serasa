import { forwardRef, ReactNode } from "react"
import styles from "@/components/Text/Text.module.css"

export type TextSize =
  | "display"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "subheading"
  | "body"

export interface TextProps {
  component?: keyof JSX.IntrinsicElements
  size?: TextSize
  span?: boolean
  bold?: boolean
  children?: ReactNode
}

export const Text = forwardRef<HTMLHeadingElement, TextProps>(
  function TextComponent(
    { children, component, size, span, bold, ...rest },
    ref
  ) {
    const Tag = (component ?? (span ? "span" : "div")) as React.ElementType

    return (
      <Tag
        className={`${styles.text} ${styles[`text--${size ?? "body"}`]} ${
          bold ? styles["text--bold"] : ""
        }`}
        ref={ref}
        {...rest}
      >
        {children}
      </Tag>
    )
  }
)
