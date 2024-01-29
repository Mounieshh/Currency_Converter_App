/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  className = "",
}) {
  const id = useId();

  return (

    <>
    <div className = "text-center bg-green-400 ">
    <div className= {`${className}`}>
      <div className="border-2 border-emerald-500 m-3 py-2 ">
        <label htmlFor={id} className= "font-bold ">{label}</label>
        <input
        className="border-2 border-black p-2 m-4"
          id={id}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />

      
        <p>Currency Type</p>
        <select className="border-2 border-black my-3"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        </div>
  
    </div>
    </div>
    </>
  );
}

export default InputBox;
