
import { keyframes, styled } from './stitches.config'

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
})

const moveBg = keyframes({
  'to': {
    backgroundPosition: 'var(--bg-size) 0'
  }
});

const Display = styled('h1', {
  '--bg-size': '400%',

  fontSize: 'clamp(3rem, 25vmin, 8rem)',
  lineHeight: 1,
  letterSpacing: '-3px',
  background: `linear-gradient(
    90deg,
    var(--colors-gradientColor1),
    var(--colors-gradientColor2),
    var(--colors-gradientColor3),
    var(--colors-gradientColor4),
    var(--colors-gradientColor3),
    var(--colors-gradientColor2),
    var(--colors-gradientColor1)
  ) 0 0 / var(--bg-size) 100%`,

  color: 'transparent',
  '-webkit-background-clip': 'text',
  backgroundClip: 'text',

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${moveBg} 12s infinite linear`,
  },
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
  fontSize: 21,
  lineHeight: 1.5,
})

function App() {
  return (
    <Container>
      <Header
      >
      <Flex css={{
        gap: 8,
        alignItems: 'center',
        padding: 8,
        backgroundColor: '$slate1',
        borderRadius: 8
      }}>
      <Image src={`https://arweave.net/fsbvV6O4qmYYW3baWcWyB_3PrB3OcIecrKLOdDbgCuE`} alt='Fair Forks logo' />
      <Box 
      css={{
        borderRadius: 9999,
        backgroundColor: '$slate2',
        color: '$violet12',
        padding: '2px 12px',
        fontWeight: 600,
        fontSize: 15
      }}
      >
        v2b
      </Box>
      </Flex>
      </Header>
      <Main
      css={{
        display: 'grid',
        placeItems: 'center',
        flex: 1,
        width: '100%',
      }}
      >
        <Box css={{
          backgroundColor: '$slate1',
          padding: '20px 80px',
          borderRadius: 12
        }}>
      <Display>Welcome to Fair Forks</Display>
      <Text
      css={{ textAlign: 'center' }}
      >
        The paradigm of evolutionary apps is upon us. <br />
        Learn more in the paper{' '}
        <Box css={{ color: '$violet11', lineHeight: 3 }} as='a' href="https://arweave.net/loJ6EmO_2pTA313k3KtXEyrmCtCTJ5ThZMcPtNxX0m4"
        target='_blank'
        rel='noreferrer'
        >
          <em>
         Fair Forks: Towards Incentivized Protocol Governance
         </em>
        </Box>
      </Text>
      </Box>
      </Main>
    </Container>
  )
}

export default App
