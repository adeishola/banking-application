import { Route, Routes } from "react-router-dom";
import Balance from "./components/balance/Balance"
import Dashboard from "./components/dashboard/Dashboard";
import Deposit from "./components/deposit/Deposit";
import NewAccount from "./components/newAccount/NewAccount"
import Transfer from "./components/transfer/Transfer";
import Withdraw from "./components/withdraw/Withdraw";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewAccount />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </div>
  );
}

export default App;
