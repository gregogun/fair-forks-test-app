
import { styled } from './stitches.config'

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
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

const Text = styled('p', {
  fontSize: 18,
  lineHeight: 1.5
})

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
        backgroundColor: '$violet5',
        color: '$violet12',
        padding: '2px 12px',
        fontWeight: 600,
        fontSize: 15
      }}
      >
        v2a
      </Box>
      </Flex>
      </Header>
      <Main
      css={{
        textAlign: 'center',
        flex: 1,
        width: '100%'
      }}
      >
      <Display css={{ marginBottom: 96 }}>Welcome to{' '}
        <Box css={{
          color: '$green9',
          position: 'relative',

          '&::after': {
            position: 'absolute',
            content: 'url(https://arweave.net/7-oZj07_i-kMyN-pvCLnABm2lxHMsYsEN1LkgaK4a7c)',
            display: 'block',
            top: 72,
            right: 0,
            height: 96
          },
        }} as='span'>
        Fair Forks
        </Box>
        </Display>
      <Text>
        New to the idea?
      </Text>
      <Text css={{
        marginTop: 12
      }}>
       Check out this presentation from Sam Williams on what the future of app development could look like.
      </Text>
      <Box>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LnUqh8NTOS4?start=654" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </Box>
      </Main>
    </Container>
  )
}

export default App
