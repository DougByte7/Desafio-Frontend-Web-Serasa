# Text

Utilize este componente para exibir elementos textuais.

```jsx
<Text>Texto normal</Text>
```

## Tamanhos

Utilize o prop `size` do tipo `TextSize` descrito na tabela abaixo para alterar o tamanho do texto

| Valor      | Descrição (desktop / mobile)          |
| ---------- | ------------------------------------- |
| display    | Tamanho destaque: 3rem / 2.5rem       |
| lg         | Tamanho grande: 2.5rem / 2rem         |
| md         | Tamanho médio: 2rem / 1.5rem          |
| sm         | Tamanho pequeno: 1.5rem / 1.25rem     |
| xs         | Tamanho minusculo: 1.25rem / 1.125rem |
| subheading | Tamanho subtítulo: 1rem               |
| body       | (default) Tamanho padrão: 1rem        |

```jsx
<Text size="lg">Texto grande</Text>
```

## Prop bold

Utilize o prop `bold` para deixa o texto em negrito

```jsx
<Text bold>Texto grande</Text>
```

## Polimorfia

O Text é um [componente polimórfico](https://dev.to/julioxavierr/make-your-react-components-more-flexible-using-polymorphism-5fhi), isto é, você pode alterar o componente raiz por qualquer outra tag HTML.

Para isto utilize o prop `component`, seu valor padrão é `div`

```jsx
<Text component="p">Elemento de parágrafo</Text>
```

# Prop span

Utilize o prop `span` como uma abreviação para `component="span"`

```jsx
<Text span>O mesmo que abaixo</Text>
<Text component="span">O mesmo que acima</Text>
```
