import './App.css'
import { styled } from './stitches.config'

const Container = styled('div', {
  padding: 40,
})

const Display = styled('h1', {
  fontSize: '6rem',
  lineHeight: 1,
  letterSpacing: '-3px',
  color: '$slate12'
})

function App() {


  return (
    <Container>
      <Display>Welcome to Fair Forks</Display>
    </Container>
  )
}

export default App
