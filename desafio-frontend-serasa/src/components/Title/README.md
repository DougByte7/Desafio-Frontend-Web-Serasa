# Title

Utilize este componente para exibir elementos h1-h6

> Por de baixo dos panos este componente utiliza o componente Text

```jsx
<Title order={1}>Título h1</Title>
<Title order={2}>Título h2</Title>
<Title order={3}>Título h3</Title>
<Title order={4}>Título h4</Title>
<Title order={5}>Título h5</Title>
<Title order={6}>Título h6</Title>
```

## Tamanho

Você pode alterar o tamanho do título independente de sua `order` através do prop `size` do tipo `TitleSize` descrito na tabela abaixo

| Valor      | Descrição (desktop / mobile)                             |
| ---------- | -------------------------------------------------------- |
| display    | (default para: h1) Tamanho destaque: 3rem / 2.5rem       |
| lg         | (default para: h2) Tamanho grande: 2.5rem / 2rem         |
| md         | (default para: h3) Tamanho médio: 2rem / 1.5rem          |
| sm         | (default para: h4) Tamanho pequeno: 1.5rem / 1.25rem     |
| xs         | (default para: h5) Tamanho minusculo: 1.25rem / 1.125rem |
| subheading | (default para: h6) Tamanho subtítulo: 1rem               |

```jsx
<Title order={6} size="sm">Título h6 com tamanho pequeno / h4 </Title>
<Title order={2} size="display">Título h2 com tamanho display / h1</Title>
```
