import TextInput from "@/components/Inputs/TextInput"
import Text from "@/components/Typography/Text"
import Title from "@/components/Typography/Title"
import useForm from "@/hooks/useForm"
import Head from "next/head"
import styles from "@/styles/Feedback.module.css"
import Image from "next/image"
import Textarea from "@/components/Inputs/Textarea"
import Button from "@/components/Button"
import Rating from "@/components/Rating"
import { NpsData, postNpsData } from "@/services/nps"
import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const form = useForm({
    initialValues: { name: "", comment: "", stars: 0 },
    validate: {
      name: (v) => (!!v ? null : "Fuck"),
      stars: (v) => (v !== 0 ? null : "Shit"),
    },
  })

  const handleChangeRating = (stars: number) => {
    form.setValues({ ...form.values, stars })
  }

  const handleCallAlert = () => {
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 5000)
  }

  const handleSubmitFeedback = form.onSubmit(async () => {
    setIsLoading(true)
    const { name, comment, stars } = form.values
    const payload: NpsData = { name, comment, score: stars }
    await postNpsData(payload)
    setIsLoading(false)
    handleCallAlert()
  })

  return (
    <>
      <Head>
        <title>Feedback</title>
        <meta
          name="description"
          content="Conte o quanto você está satisfeito com nossos serviços"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["feedback-card"]}>
          {isLoading && (
            <div
              className={styles.loading}
              role="alert"
              aria-busy="true"
              aria-live="polite"
            >
              <Text size="display">Aguarde estamos processando</Text>
            </div>
          )}
          {showSuccessMessage && (
            <div className={styles.success} role="alert">
              <Text size="display">Obrigado por avaliar nossos serviços</Text>
            </div>
          )}
          <Image
            src="/serasa-logo-full.svg"
            alt="Logo tipo serasa"
            width={200}
            height={150}
          />
          <Title order={1} size="sm">
            Conte o quanto você está satisfeito com nossos serviços
          </Title>
          <Text bold>Marque de 1 à 5 estrelas</Text>
          <Rating value={form.values.stars} onChange={handleChangeRating} />
          <form className={styles.form} onSubmit={handleSubmitFeedback}>
            <TextInput
              label="Nome"
              name="name"
              {...form.from("name")}
              required
            />
            <br />
            <Textarea
              label="Comentário (Opcional)"
              name="comment"
              {...form.from("comment")}
            />
            <br />
            <Button type="submit" disabled={form.invalid}>
              Enviar avaliação
            </Button>
          </form>
        </div>
      </main>
    </>
  )
}
