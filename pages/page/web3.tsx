import { useAccount } from 'wagmi'
import Account from '../components/Account'
import WalletOptions from '../components/WalletOptions'
import SendTransaction from '../components/SendTransaction'
export default function Web3() {
function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <>
    点击连接，已安装的钱包：
  <WalletOptions />
  </>
}
   return (
     <div className='web3'>
    <ConnectWallet/>
    <SendTransaction/>
     </div>
   )
}
