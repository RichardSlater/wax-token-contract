import TextInput from '@/components/TextInput'
import NetworkSelector from '@/components/NetworkSelector'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-normal p-24">
      <h1 className="font-sans text-2xl">WAX Token Management</h1>
      <h2 className="font-sans text-lg">Network</h2>
      <NetworkSelector leftHandSide="Mainnet" rightHandSide="Testnet" />
      <h2 className="font-sans text-lg">Contract</h2>

      <TextInput label='Contract Name' placeholder='name of your contract (f.ex. scetrovcoin)' />
      <TextInput label='Actor' placeholder='who is authorised (f.ex. scetrovcoin)' />
      <TextInput label='Max. Supply' placeholder='maximum supply (f.ex. 1000.0000 SPOONS)' />

    </main>
  )
}
