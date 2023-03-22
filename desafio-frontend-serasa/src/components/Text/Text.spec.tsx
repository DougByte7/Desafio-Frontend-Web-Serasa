import { render } from "@testing-library/react"
import { Text, TextProps, TextSize } from "./Text"

const renderText = (props: TextProps) => render(<Text {...props} />)

const defaultProps: TextProps = {
  children: "test",
}

describe("Text", () => {
  it("display the its children", () => {
    const { getByText } = renderText({ ...defaultProps })
    getByText("test")
  })

  it("renders a simple div with text and body styles", () => {
    const {
      container: { firstChild },
    } = renderText(defaultProps)

    expect((firstChild as HTMLElement).tagName).toBe("DIV")
    expect((firstChild as HTMLElement).classList.contains(`text`)).toBe(true)
    expect((firstChild as HTMLElement).classList.contains(`text--body`)).toBe(
      true
    )
    expect((firstChild as HTMLElement).classList.contains(`text--bold`)).toBe(
      false
    )
  })

  it("renders a custom component based on component prop", () => {
    const {
      container: { firstChild },
    } = renderText({ ...defaultProps, component: "p" })
    expect((firstChild as HTMLElement).tagName).toBe("P")
  })

  it("renders as span when span prop is set", () => {
    const {
      container: { firstChild },
    } = renderText({ ...defaultProps, span: true })
    expect((firstChild as HTMLElement).tagName).toBe("SPAN")
  })

  it("change styles based on size prop", () => {
    const classList: Set<TextSize> = new Set([
      "display",
      "lg",
      "md",
      "sm",
      "xs",
      "subheading",
      "body",
    ] as TextSize[])

    classList.forEach((className) => {
      const {
        container: { firstChild },
      } = renderText({ ...defaultProps, size: className })

      const subSet = new Set(classList)
      subSet.delete(className)

      expect(
        Array.from(subSet).some((className) =>
          (firstChild as HTMLElement).classList.contains(`text--${className}`)
        )
      ).toBe(false)

      expect(
        (firstChild as HTMLElement).classList.contains(`text--${className}`)
      ).toBe(true)
    })
  })

  it("sets 'font-weight: bold' based on bold prop", () => {
    const {
      container: { firstChild },
    } = renderText({ ...defaultProps, bold: true })

    expect((firstChild as HTMLElement).classList.contains(`text--bold`)).toBe(
      true
    )
  })
})
