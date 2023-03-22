import { render } from "@testing-library/react"
import { Title, TitleProps, TitleOrder, defaultSizeByOrder } from "./Title"

const renderTitle = (props: TitleProps) => render(<Title {...props} />)

const defaultProps: TitleProps = {
  children: "test",
  order: 1,
}

const orderList: TitleOrder[] = [1, 2, 3, 4, 5, 6]

describe("Title", () => {
  it("render nothing if order prop is not valid", () => {
    const {
      container: { firstChild },
    } = renderTitle({ ...defaultProps, order: 7 as any })

    expect(firstChild).toBeNull()
  })

  it("should be bold", () => {
    const {
      container: { firstChild },
    } = renderTitle({ ...defaultProps })

    expect((firstChild as HTMLElement).classList.contains("text--bold")).toBe(
      true
    )
  })

  it("render correct heading element size for each order", () => {
    orderList.forEach((order) => {
      const {
        container: { firstChild },
      } = renderTitle({ ...defaultProps, order })

      expect((firstChild as HTMLElement).tagName).toBe(`H${order}`)
    })
  })

  it("render correct default size for each order", () => {
    orderList.forEach((order) => {
      const {
        container: { firstChild },
      } = renderTitle({ ...defaultProps, order })

      expect(
        (firstChild as HTMLElement).classList.contains(
          `text--${defaultSizeByOrder[order]}`
        )
      ).toBe(true)
    })
  })
})
