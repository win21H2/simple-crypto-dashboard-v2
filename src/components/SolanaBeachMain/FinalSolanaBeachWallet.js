import SolanaBeachWalletBalance from "./SolanaBeachWalletBalance";
import SolanaBeachWalletStakeRewards from "./SolanaBeachWalletStakeRewards";

const FinalSolanaBeachWallet = () => {
    return (
        <>
            <SolanaBeachWalletBalance/>
            <br/>
            <br/>
            <SolanaBeachWalletStakeRewards/>
        </>
    )
}

export default FinalSolanaBeachWallet;