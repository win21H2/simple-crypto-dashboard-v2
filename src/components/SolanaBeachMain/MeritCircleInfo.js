import "../style/solanabeach/solanabeach.css";

const MeritCircleInfo = () => {

    return (
        <>
            <div className="solanabeach-align">
                <h3 className="centered">Merit Circle</h3>
                <div className="solanabeach-wallet">
                    <table className="solanabeach-card">
                    <thead>
                        <tr>
                            <th><h4 className="table-title">PRICE</h4></th>
                            <th><h4 className="table-title">BALANCE</h4></th>
                            <th><h4 className="table-title">APY</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{display: "none"}}><td colSpan={3}>&nbsp;</td></tr>
                        <tr>
                            <td className="table-balanceformat"><p className="table-maincolor">null</p></td>
                            <td className="table-balanceformat"><p className="table-maincolor">null</p></td>
                            <td className="table-balanceformat"><p className="table-maincolor">null</p></td>
                        </tr>
                    </tbody>
                    <tfoot><tr><td colSpan={3}>&nbsp;</td></tr></tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MeritCircleInfo;