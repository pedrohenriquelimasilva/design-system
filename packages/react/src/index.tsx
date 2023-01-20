import { styled } from './styles'

const Button = styled('button', {
  width: '$4',
  borderRadius: '$md',
  fontFamily: '$default',
  padding: '$4',
})

export function App() {
  return <Button>Hello, Word!</Button>
}
