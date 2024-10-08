import Link from "next/link";
import { Callout, Cards, Card } from "nextra/components";
import { FaSquareXTwitter, FaGithub, FaLinkedin, FaTiktok, FaWeibo } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {


    return (
        <>
            <div className="Home">

                <div className="Home_b">
                    <Callout type="warning" emoji="⚠">
                        网站所有内容仅用于学习参考，不构成任何投资建议！
                    </Callout>

                    <p className="font_size">Qin Jiangban Site</p>
                </div>



                <div className="Cards_1">


                    <Link href="https://weibo.com/u/6455980140" target='_blank'>
                        <FaWeibo className="Fa" />
                    </Link>

                    <Link href="https://twitter.com/qinjiangban" target="_blank" >
                        <FaSquareXTwitter className="Fa" />
                    </Link>

                    <Link href="https://share.lens.xyz/u/lens/qinjiangban" target="_blank" className="Fa">
                        <ThemeImage />
                    </Link>

                    <Link href="https://github.com/qinjiangban" target="_blank" >
                        <FaGithub className="Fa" />
                    </Link>

                    <Link href="https://www.linkedin.com/in/qinjiangban" target="_blank"  >
                        <FaLinkedin className="Fa" />
                    </Link>
                </div>

                <div className="text">
                    <Link href="https://callha.com" target="_blank" className="Fa">
                        酷哈网路科技工作室 ↗
                    </Link>
                </div>

                <div className="text">
                    <p className="text_p">
                        来自中国广西<br />
                        •教育经历:<br />
                        2021-2024在<a href="https://www.nncvt.edu.cn" target='_blank'>南宁职业技术大学↗</a>
                        商学院就读市场营销策划。<br />

                        •主修课程:<br />
                        主修课程	市场营销、 营销策划、短视频营销、市场调查与分析、 消费者行为学、 广告创意与策划、管理学、品牌策划、文化创意策划、数据分析等<br />
                        <br />
                        高三时期2020年9月在网络上了解到比特币，利用课余时间学习加密货币，21年上大学后有电脑,利用课余时间自学Web3与区块链至今，开始向Web3应用层做项目，去中心化应用 Dapp。持续关注web3市场，各项目融资，加密市场及全球动态。
                    </p>

                </div>

                <div className="text">
                    <p className="text_p">
                        •专业技能:<br />
                        Web3js、React、Nextjs、智能合约<br />
                        oﬃce 办公、P图工具、CDR、Xmind 、PPT<br />
                        Vis设计、视频剪辑、绘画、互联网产品设计、策划案和商业计划书编写。<br />
                        <br />
                        •专业经验:<br />
                        在校参与实训，做各种产品市场营销策划案，在校期间管理学习团队完成学习任务<br />
                        1、Web前端开发:用React、Nextjs构建企业官网、项目文档、静态网站、电子商城等网站<br />
                        2、移动端APP用React Native开发:软件交互、用户体验<br />
                        3、智能合约Solidity:使用Remix等开发技术部署智能合约至本地、测试网、主网区块链<br />
                        4、去中心化应用DAPP:Dapp架构，结合IPFS、ENS、链端、前端、钱包连接、合约交互<br />
                        Web3解决方案构思、使区块链相关技术应用到各领域<br />
                        <br />
                        •行业经验:<br />
                        交易所、Web3钱包、各类数据分析工具、链上数据分析、Dapp产品交互、撸代币空投。<br />
                        关注加密货币行业4年，区块链技术理论、Web3，了解基本的元宇宙概念，会用Ai辅助工作，ChatGPT、生成式人工智能。<br />
                        海外社交媒体管理，项目社区运营，在研究运营抖音电商和字节产品<br />
                        金融分析、股票期货交易经验、Web3相关加密市场交易分析
                        <br />
                        <br />
                        •兴趣爱好:<br />
                        篮球，游戏，科技迷、易经思维、风水学、中医理论
                        <br />
                        •资格证书:<br />
                        驾驶证C1，计算机制造人员，（区块链链上数据NFT）<br />
                        <br />
                        <br />
                    </p>
                </div>

            </div>
        </>
    );
}

const ThemeImage = (props) => {
    const { srcLight, srcDark, ...rest } = props

    return (
        <>
            <Image {...rest}
                src="/logo/Icon-T-Black_@2x.png"
                alt="Lens-Black"
                className={`imgLight Icon_T_Black`}
                width={32} height={32}
            />
            <Image {...rest}
                src="/logo/Icon-T-White_@2x.png"
                alt="Lens-White"
                className={`imgDark Icon_T_White`}
                width={32} height={32}
            />
        </>
    )
}