import { useState } from 'react';

const mockData = {
  '0x123': [
    { symbol: 'ZTC', balance: 152.42 },
    { symbol: 'ETH', balance: 0.845 },
    { symbol: 'USDC', balance: 1200 }
  ],
  '0xabc': [
    { symbol: 'ZTC', balance: 98.5 },
    { symbol: 'BTC', balance: 0.0043 },
    { symbol: 'ETH', balance: 0.223 }
  ]
};

export default function App() {
  const [address, setAddress] = useState('');
  const [tokens, setTokens] = useState([]);

  const handleCheckBalance = () => {
    const result = mockData[address.trim()] || [];
    setTokens(result);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1
        className="text-3xl font-bold text-center mb-6"
        style={{ color: '#22c55e' }} // Tailwind green-500
      >
        ZTC Wallet Dashboard
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 w-full rounded"
          placeholder="Enter wallet address (e.g. 0x123)..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
          onClick={handleCheckBalance}
        >
          Check
        </button>
      </div>

      <div className="grid gap-4">
        {tokens.length === 0 ? (
          <p className="text-gray-500 text-center">
            No tokens found or invalid address.
          </p>
        ) : (
          tokens.map((token, index) => (
            <div key={index} className="border p-3 rounded flex justify-between">
              <span className="font-semibold">{token.symbol}</span>
              <span>{token.balance}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
