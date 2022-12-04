
import { styled } from './stitches.config'

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  backgroundColor: '$violet9'
})

const Display = styled('h1', {
  fontSize: '6rem',
  lineHeight: 1,
  letterSpacing: '-3px',
  color: '$slate12',
});

const Image = styled('img', {
  width: 169,
  height: 40,
});

const Flex = styled('div', {
  display: 'flex'
})

const Box = styled('div')

const Header = styled('header', {
  padding: 20
})
const Main = styled('main')

function App() {
  return (
    <Container>
      <Header
      >
      <Flex css={{
        gap: 8,
        alignItems: 'center'
      }}>
      <Image src={`https://arweave.net/VBzCUcYpQ8l8gJDBa1bxjQBFUpYf8GSkdeRZqwg0jvE`} alt='Fair Forks logo' />
      <Box 
      css={{
        borderRadius: 9999,
        backgroundColor: 'black',
        color: 'white',
        padding: '2px 12px',
        fontWeight: 600,
        fontSize: 15
      }}
      >
        v1b
      </Box>
      </Flex>
      </Header>
      <Main
      css={{
        display: 'grid',
        placeItems: 'center',
        flex: 1,
        width: '100%'
      }}
      >
      <Display>Welcome to Fair Forks</Display>
      </Main>
    </Container>
  )
}

export default App
