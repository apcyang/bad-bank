import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./navbar";
import { UserContext } from "./context";
import Home from "./home";
import CreateAccount from "./createaccount";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Balance from "./balance";
import AllData from "./alldata";
import { useState } from "react";

function Spa() {
  const [balance, setBalance] = useState(100);

  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route
            path="/deposit/"
            render={(props) => (
              <Deposit balance={balance} setBalance={setBalance} />
            )}
          />
          <Route
            path="/withdraw/"
            render={(props) => (
              <Withdraw balance={balance} setBalance={setBalance} />
            )}
          />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
