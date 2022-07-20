import SolanaBeachWalletFormatBalance from "./SolanaBeachWalletFormatBalance";
import SolanaBeachWalletFormatStakeRewards from "./SolanaBeachWalletFormatStakeRewards";

const FinalSolanaBeachWallet = () => {
    return (
        <>
            <SolanaBeachWalletFormatBalance/>
            <br/>
            <br/>
            <SolanaBeachWalletFormatStakeRewards/>
        </>
    )
}

export default FinalSolanaBeachWallet;