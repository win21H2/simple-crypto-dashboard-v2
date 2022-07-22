import SolanaBeachWalletBalance from "./SolanaBeachWalletBalance";
import SolanaBeachWalletStakeRewards from "./SolanaBeachWalletStakeRewards";

const FinalSolanaBeachWallet = () => {
    return (
        <>  <center>
                <img src="https://o.remove.bg/downloads/d427ae14-6ee0-425b-a13d-3fadfd37af35/OJgMtfGd_400x400-removebg-preview.png" alt="Solana Beach" className="home-logo" />
            </center>
            <SolanaBeachWalletBalance/>
            <br/>
            <br/>
            <SolanaBeachWalletStakeRewards/>
        </>
    )
}

export default FinalSolanaBeachWallet;