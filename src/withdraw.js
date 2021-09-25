import { Card } from "./context";
import { useState } from "react";

export default function Withdraw(props) {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const disableSubmit = withdrawAmount ? false : true;

  const withdraw = () => {
    if (withdrawAmount > props.balance) {
      alert("Transaction failed");
      return;
    }

    if (typeof withdrawAmount != "number") {
      console.log(typeof withdrawAmount);
      alert("Enter numeric values only");
      return;
    }

    let newBalance = parseFloat(props.balance) - parseFloat(withdrawAmount);
    props.setBalance(newBalance);
    console.log(newBalance);
  };

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  const checkAmount = (amount) => {
    if (amount == "" || amount == null || !isNumeric(amount)) {
      alert("Please enter numeric values only");
      amount = 0;
    }
    setWithdrawAmount(parseFloat(amount));
  };

  return (
    <Card
      txtcolor="black"
      header="BadBank Withdraw"
      title=""
      text=""
      body={
        <div>
          <div style={{ padding: "2%" }}>Balance: ${props.balance}</div>
          <div style={{ padding: "2%" }}>
            Withdraw Amount: &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              className="form-control"
              id="withdrawAmount"
              placeholder="Withdraw Amount"
              value={withdrawAmount}
              onChange={(e) => checkAmount(e.target.value)}
              style={{ display: "inline-block", maxWidth: "35%" }}
            />
            <br></br>
          </div>
          <div style={{ padding: "2%" }}>
            <button
              type="submit"
              className="btn btn-light"
              onClick={withdraw}
              disabled={disableSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      }
    />
  );
}
