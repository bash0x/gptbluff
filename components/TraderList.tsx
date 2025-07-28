// components/TraderList.tsx
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { useEffect, useState } from 'react'

// Danh sách trader mẫu
const sampleTraders = [
  {
    name: 'Trader A',
    address: '4Nd1mZ1eFXeYZiUpkdzjS3YFgQPKAbE6g7gQewFzEHe9'
  },
  {
    name: 'Trader B',
    address: '7wCgyDh1RWJ9L2Swxb5u8qVXJpVfSGzGXAHWZohV9CMR'
  }
]

export default function TraderList() {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const [selected, setSelected] = useState<string | null>(null)

  const handleCopyTrade = async () => {
    if (!selected || !publicKey) return alert('Kết nối ví trước đã!')
    alert(`(Demo) Bạn đã chọn copy ${selected} – Swap mô phỏng trên Devnet.`)
    // Tích hợp lệnh swap thật ở đây
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>📊 Chọn Trader để Copy</h2>
      <ul>
        {sampleTraders.map((t) => (
          <li key={t.address} style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="trader"
                value={t.address}
                onChange={() => setSelected(t.address)}
              />{' '}
              {t.name} – {t.address.slice(0, 6)}...{t.address.slice(-4)}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleCopyTrade}
        style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff' }}
      >
        Copy giao dịch
      </button>
    </div>
  )
}
