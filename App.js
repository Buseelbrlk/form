import React, { useState } from 'react';
 
const DropdownForm = () => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [activeRules, setActiveRules] = useState([]);
  const [currency, setCurrency] = useState('');
  const [targetCPMCurrency, setTargetCPMCurrency] = useState('');
 
  const accounts = [
    { value: 'kubra-sener', label: 'Kübra Şener' },
    { value: 'melih-erpek', label: 'Melih Erpek' },
    { value: 'buse-elbirlik', label: 'Buse Elbirlik' },
  ];
 
  const platforms = ['Google', 'Facebook', 'LinkedIn'];
  const rules = {
    Google: [
      { name: 'Budget', inputType: 'text', placeholder: 'Enter Budget in TL' },
      { name: 'Campaign Name', inputType: 'text', placeholder: 'Enter Campaign Name' },
      { name: 'Target CPM', inputType: 'text', placeholder: 'Enter Target CPM in TL' },
      { name: 'Keywords', inputType: 'text', placeholder: 'Enter Keywords' },
      { name: 'Ad Group Name', inputType: 'text', placeholder: 'Enter Ad Group Name' },
      { name: 'Topics', inputType: 'text', placeholder: 'Enter Topics' },
    ],
    Facebook: [
      { name: 'Rule A', inputType: 'checkbox' },
      { name: 'Rule B', inputType: 'radio' },
    ],
    LinkedIn: [
      { name: 'Rule X', inputType: 'text' },
      { name: 'Rule Y', inputType: 'number' },
    ],
  };
 
  const currencies = ['TL', 'USD', 'EUR'];
 
  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };
 
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    setActiveRules([]);
  };
 
  const handleRuleClick = (rule) => {
    setActiveRules((prev) =>
      prev.includes(rule) ? prev.filter((r) => r !== rule) : [...prev, rule]
    );
  };
 
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
 
  const handleTargetCPMCurrencyChange = (event) => {
    setTargetCPMCurrency(event.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };
 
  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-5 text-left">
          <label htmlFor="account" className="text-red-500">
            Account:
          </label>
          <select
            id="account"
            name="account"
            value={selectedAccount}
            onChange={handleAccountChange}
            className="w-full p-2 rounded-md text-lg border-2 border-black mb-3"
          >
            <option value="">Select an account</option>
            {accounts.map((account) => (
              <option key={account.value} value={account.value}>
                {account.label}
              </option>
            ))}
          </select>
        </div>
 
        <div className="mb-5 text-left">
          <label htmlFor="platform" className="text-red-500">
            Platform:
          </label>
          <select
            id="platform"
            name="platform"
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="w-full p-2 rounded-md text-lg border-2 border-black mb-3"
          >
            <option value="">Select a platform</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
 
        {selectedPlatform && (
          <div className="mt-4">
            <h2 className="text-lg text-red-500 font-medium mb-2">Select Rules </h2>
            <div className=' font-small'>You can select as many rules as you like.

            </div>
            <div className="flex flex-wrap gap-2">
              {rules[selectedPlatform].map((rule) => (
                <button
                  key={rule.name}
                  onClick={() => handleRuleClick(rule.name)}
                  className={`py-2 px-4 border-2 rounded-full ${activeRules.includes(rule.name)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-red-500'
                    }`}
                >
                  {rule.name}
                </button>
              ))}
            </div>
 
            {activeRules.map((ruleName) => {
              const ruleConfig = rules[selectedPlatform].find(
                (r) => r.name === ruleName
              );
 
              return (
                <div key={ruleName} className="mt-4">
                  <label className="block text-sm font-medium mb-1">
                    {ruleName}
                  </label>
                  {ruleConfig.inputType === 'text' && (
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-full py-2 px-3 border rounded-md"
                        placeholder={ruleConfig.placeholder || ''}
                      />
                      {(ruleName === 'Budget' || ruleName === 'Target CPM') && (
                        <select
                          value={ruleName === 'Budget' ? currency : targetCPMCurrency}
                          onChange={ruleName === 'Budget' ? handleCurrencyChange : handleTargetCPMCurrencyChange}
                          className="ml-2 p-2 border rounded-md"
                        >
                          {currencies.map((curr) => (
                            <option key={curr} value={curr}>
                              {curr}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  )}
                  {ruleConfig.inputType === 'number' && (
                    <input
                      type="number"
                      className="w-full py-2 px-3 border rounded-md"
                      placeholder={ruleConfig.placeholder || ''}
                    />
                  )}
                  {ruleConfig.inputType === 'checkbox' && (
                    <input
                      type="checkbox"
                      className="w-full py-2 px-3 border rounded-md"
                    />
                  )}
                  {ruleConfig.inputType === 'radio' && (
                    <input
                      type="radio"
                      className="w-full py-2 px-3 border rounded-md"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
 
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-500 text-white rounded-md text-lg mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
 
export default DropdownForm;
