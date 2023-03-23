import { Fragment, useState } from "react"
import styles from "./Rating.module.css"
import IconStar from "@/assets/icons/icon-star.svg"

export interface RatingProps {
  value: number
  onChange: (stars: number) => void
}

export const Rating = ({ value, onChange }: RatingProps) => {
  const [stars, setStars] = useState<boolean[]>(new Array(5).fill(false))

  const setActive = (index: number) => () => {
    setStars(stars.map((_, i) => i <= index))
  }

  const setInactive = () => {
    setStars(
      stars.map((_, i) => {
        return !(i + 1 > value)
      })
    )
  }

  return (
    <fieldset className={styles.rating}>
      <legend className={styles.rating__legend}>Sua nota: </legend>
      <div className={styles.rating__stars}>
        {stars.map((isActive, i) => {
          return (
            <Fragment key={i}>
              <input
                aria-label={`${i + 1}`}
                id={`rating-${i}`}
                className={styles.rating__star}
                type="radio"
                name="rating"
                value={i + 1}
                onInput={(e) => {
                  onChange(+e.currentTarget.value)
                }}
              />
              <label
                className={`${styles.rating__label} ${
                  isActive || value > i ? styles["rating__label--active"] : ""
                }`}
                htmlFor={`rating-${i}`}
                onMouseEnter={setActive(i)}
                onMouseLeave={setInactive}
              >
                <IconStar />
              </label>
            </Fragment>
          )
        })}
      </div>
    </fieldset>
  )
}
