import { useState } from "react";
import useCurrency from "./Hook/useCurrency";
import {InputBox} from "./Currency_Project/index.js";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  //Custom Hook imported and used 👇👇
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <>
      <div>
        <div className="border-2 border-black p-5">
          <div className="text-center font-bold text-4xl py-4">
            Currency Converter
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="text-center">
              <button onClick={swap}
              className="border-2 border-none bg-blue-500  hover:bg-blue-700 rounded-md p-3  font-bold relative "
              >Swap</button>
            </div>
            <div>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
          <div className="text-center">
            <button type="submit" className="border-2 border-none bg-blue-500 hover:bg-blue-700 rounded-md p-3 font-bold "
            onClick={convert}>Convert</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
