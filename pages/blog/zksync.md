---
title: zkSync
---
# zkSync
<img src='https://zksync.io/graphics/hero-mobile.webp' alt='zksync'>

以后会不会一个Dapp和协议就有一个自己的链，但是这些链的数据和状态都是能互通的，可以定制自己的代币做定制链的gas费或无gas，zk框架内的应用链安全性像Cosmos生态“你中有我，我中有你”，质押$ZKS可以拿到在zk超级链框架内发行的币，和质押$ATOM类似。

​zksync有以太访原生帐户抽象。有一个叫“Paymaster”实现把zksync框架内的链用定制的代币做为gas，通过“Paymaster”将定制链gas代币换成ETH，把定制链上的数据传到zksync链，zksync验证者再通过Paymaster把定制gas换成ETH，用换的ETH打包zksync上的区块传到ETH，从中间赚差价。

用Uinswap为例，Uinswap的治理代币UIN，在uinswap交易可以用UIN代币做gas，gas给zksync的验证者，验证者再用UIN换成ETH，也可以保留UIN，自己掏ETH上传到以太链。
​