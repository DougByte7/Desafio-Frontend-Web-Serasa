// Serviço de api falsa para testes: https://mockapi.io/
// No plano gratuito ele não persiste os dados enviados, apenas gera valores aleatórios baseado no payload
const NPS_ENDPOINT = "https://641cc798b556e431a8763644.mockapi.io/nps"

export interface NpsData {
  score: number
  name: string
  comment?: string
}

export function postNpsData(payload: NpsData) {
  return fetch(NPS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(payload),
  })
}
