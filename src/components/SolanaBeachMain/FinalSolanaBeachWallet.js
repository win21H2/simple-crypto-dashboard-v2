import SolanaBeachWalletBalance from "./SolanaBeachWalletBalance";
import SolanaBeachWalletStakeRewards from "./SolanaBeachWalletStakeRewards";
import solanaicon from "./solanaicon.png";

const FinalSolanaBeachWallet = () => {
    return (
      <>
        {" "}
        <center>
          <img src={solanaicon} alt="solanaicon" style={{ width: "75px" }} />
        </center>
        <SolanaBeachWalletBalance />
        <br />
        <br />
        <SolanaBeachWalletStakeRewards />
      </>
    );
}

export default FinalSolanaBeachWallet;