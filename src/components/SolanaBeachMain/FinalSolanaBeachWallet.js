import SolanaBeachWalletFormatBalance from "./SolanaBeachWalletFormatBalance";
import SolanaBeachWalletFormatStakeRewards from "./SolanaBeachWalletFormatStakeRewards";

const FinalSolanaBeachWallet = () => {
    return (
        <>
            <SolanaBeachWalletFormatBalance/>
            <SolanaBeachWalletFormatStakeRewards/>
        </>
    )
}

export default FinalSolanaBeachWallet;