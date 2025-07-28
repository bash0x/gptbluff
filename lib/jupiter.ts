// lib/jupiter.ts
export async function getSwapRoute(fromMint: string, toMint: string, amount: number) {
  const url = `https://quote-api.jup.ag/v6/quote?inputMint=${fromMint}&outputMint=${toMint}&amount=${amount}&slippageBps=100`
  const res = await fetch(url)
  const data = await res.json()
  return data
}
