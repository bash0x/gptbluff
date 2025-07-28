// pages/index.tsx
import Head from 'next/head'
import dynamic from 'next/dynamic'
import TraderList from '../components/TraderList'
import '../styles/globals.css'

const WalletConnect = dynamic(() => import('../components/WalletConnect'), { ssr: false })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solana Copy Trade Demo</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>🚀 Solana Copy Trade (Devnet)</h1>
        <WalletConnect />
        <TraderList />
      </main>
    </div>
  )
}
