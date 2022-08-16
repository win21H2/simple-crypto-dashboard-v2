import SolanaBeachWalletBalance from "./SolanaBeachWalletBalance";
import SolanaBeachWalletStakeRewards from "./SolanaBeachWalletStakeRewards";
import MeritCircleInfo from "./MeritCircleInfo";
import LidoInfo from "./LidoInfo";

const FinalSolanaBeachWallet = () => {
    return (
      <>
        <center>
          <img src="https://o.remove.bg/downloads/57d5f94d-6217-4bf3-87e9-538c30541bc6/OJgMtfGd_400x400-removebg-preview.png" alt="solanaicon" style={{ width: "75px" }} />
        </center>
        <SolanaBeachWalletBalance />
        <br/>
        <br/>
        <SolanaBeachWalletStakeRewards />
        <br/>
        <br/>
        <MeritCircleInfo />
        <br/>
        <br/>
        <LidoInfo />
      </>
    );
}

export default FinalSolanaBeachWallet;