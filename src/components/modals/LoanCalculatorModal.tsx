import React, { useState } from 'react';
import { X, Calculator, IndianRupee, CheckCircle2, ChevronRight } from 'lucide-react';

interface LoanCalculatorModalProps {
  onClose: () => void;
  onApplyNow?: (product: string, amount: number) => void;
}

export const LoanCalculatorModal: React.FC<LoanCalculatorModalProps> = ({
  onClose,
  onApplyNow
}) => {
  const [product, setProduct] = useState('MSME Loan');
  const [amount, setAmount] = useState(1000000);
  const [tenureMonths, setTenureMonths] = useState(36);
  const [interestRate, setInterestRate] = useState(14.5);

  // EMI formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / 12 / 100;
  const emi = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  ) || 0;

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - amount;

  const handleProductChange = (prod: string) => {
    setProduct(prod);
    if (prod === 'Two-Wheeler') {
      setAmount(85000);
      setTenureMonths(24);
      setInterestRate(16.0);
    } else if (prod === 'MSME Loan') {
      setAmount(1000000);
      setTenureMonths(36);
      setInterestRate(14.5);
    } else if (prod === 'LAP') {
      setAmount(2500000);
      setTenureMonths(60);
      setInterestRate(12.5);
    } else if (prod === 'Solar Loan') {
      setAmount(300000);
      setTenureMonths(36);
      setInterestRate(11.5);
    } else if (prod === 'Tractor Loan') {
      setAmount(650000);
      setTenureMonths(48);
      setInterestRate(13.5);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Namdev Loan Eligibility & EMI Calculator</h3>
              <p className="text-xs text-slate-500">Live underwriting calculation & repayment forecast</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* Product selector buttons */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1.5 block">Select NBFC Loan Vertical</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {['MSME Loan', 'LAP', 'Solar Loan', 'Tractor Loan', 'Two-Wheeler'].map(p => (
                <button
                  key={p}
                  onClick={() => handleProductChange(p)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    product === p
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700">Loan Amount</span>
                <span className="text-blue-700 text-sm font-extrabold tabular-nums">
                  ₹{amount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={5000000}
                step={25000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>₹50,000</span>
                <span>₹50,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700">Loan Tenure</span>
                <span className="text-blue-700 text-sm font-extrabold tabular-nums">
                  {tenureMonths} Months ({ (tenureMonths / 12).toFixed(1) } Years)
                </span>
              </div>
              <input
                type="range"
                min={12}
                max={84}
                step={6}
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>12 Months</span>
                <span>84 Months</span>
              </div>
            </div>

            {/* Rate Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-700">Interest Rate (% p.a.)</span>
                <span className="text-blue-700 text-sm font-extrabold tabular-nums">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min={9.5}
                max={24.0}
                step={0.5}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>9.5%</span>
                <span>24.0%</span>
              </div>
            </div>
          </div>

          {/* Results Display Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500">Monthly EMI</span>
              <div className="text-xl font-black text-blue-900 tabular-nums mt-0.5">
                ₹{emi.toLocaleString('en-IN')}
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500">Total Interest</span>
              <div className="text-lg font-extrabold text-amber-700 tabular-nums mt-0.5">
                ₹{totalInterest.toLocaleString('en-IN')}
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500">Total Payable</span>
              <div className="text-lg font-extrabold text-slate-900 tabular-nums mt-0.5">
                ₹{totalPayment.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onApplyNow?.(product, amount);
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-xs cursor-pointer"
          >
            <span>Initiate Application</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
