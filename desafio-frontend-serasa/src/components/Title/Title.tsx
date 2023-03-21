import { forwardRef, ReactNode } from "react"
import Text, { TextSize } from "../Text"

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6
export type TitleSize = Exclude<TextSize, "body">

export interface TitleProps {
  order: TitleOrder
  size?: TitleSize
  children?: ReactNode
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  function TitleComponent({ children, order, size, ...rest }, ref) {
    if (![1, 2, 3, 4, 5, 6].includes(order)) return null

    const defaultSizeByOrder: Record<TitleOrder, TitleSize> = {
      1: "display",
      2: "lg",
      3: "md",
      4: "sm",
      5: "xs",
      6: "subheading",
    }

    return (
      <Text
        size={size ?? defaultSizeByOrder[order]}
        component={`h${order}`}
        bold
        ref={ref}
        {...rest}
      >
        {children}
      </Text>
    )
  }
)
