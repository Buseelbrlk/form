import React, { useState } from 'react';
 
const DropdownForm = () => {
  const [platform, setPlatform] = useState('');
  const [account, setAccount] = useState('');
  const [currencyType, setCurrencyType] = useState('usd');
  const [currencyValue, setCurrencyValue] = useState('');
  const [additionalInputs, setAdditionalInputs] = useState({});
  const [additionalInputLabel, setAdditionalInputLabel] = useState('');
  const [budgetType, setBudgetType] = useState('');
  const [budgetCurrencyType, setBudgetCurrencyType] = useState('usd');
  const [targetCPMCurrencyType, setTargetCPMCurrencyType] = useState('usd');
  const [selectedRule, setSelectedRule] = useState('usd');
 
  const [campaignName, setCampaignName] = useState('');
  const [adSetName, setAdSetName] = useState('');
  const [abTesting, setAbTesting] = useState(false);
 
  const [budget, setBudget] = useState('');
  const [currency, setCurrency] = useState('TL');
 
  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };
 
  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };
 
  const handleCurrencyTypeChange = (e) => {
    setCurrencyType(e.target.value);
  };
 
  const handleCurrencyValueChange = (e) => {
    setCurrencyValue(e.target.value);
  };
  const handleRuleChange = (e, rule) => {
    setSelectedRule({ ...selectedRule, [rule]: e.target.value });
  };
  const handleAdditionalInputChange = (index, value) => {
    const newInputs = { ...additionalInputs, [index]: value };
    setAdditionalInputs(newInputs);
  };
 
  const handleCurrencyTypeSelect = (value) => {
    setCurrencyType(value);
  };
 
  const handleBudgetTypeChange = (e) => {
    setBudgetType(e.target.value);
  };
 
  const handleBudgetCurrencyTypeChange = (e) => {
    setBudgetCurrencyType(e.target.value);
  };
 
  const handleTargetCPMCurrencyTypeChange = (e) => {
    setTargetCPMCurrencyType(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
  const selectOptions = ["Budget", "Campaign Name", "Target CPM", "Keywords", "Budget Type", "Ad Group Name", "Topics"];
 
  const getCurrencyPlaceholder = (label) => {
    return `Enter ${label} in ${currencyType.toUpperCase()}`;
  };
 
  const getAdditionalInputLabel = (value) => {
    switch (value) {
      case "Campaign Name":
        return "Campaign Name";
      case "Budget":
        return "Budget";
      case "Target CPM":
        return "Target CPM";
      case "Keywords":
        return "Keywords";
      case "Budget Type":
        return "Budget Type";
      case "Ad Group Name":
        return "Ad Group Name";
      case "Topics":
        return "Topics";
      default:
        return "";
    }
  };
 
  const isAdditionalInputActive = additionalInputLabel === "Campaign Name" || additionalInputLabel === "Budget" || additionalInputLabel === "Target CPM" || additionalInputLabel === "Keywords" || additionalInputLabel === "Budget Type" || additionalInputLabel === "Ad Group Name" || additionalInputLabel === "Topics";
 
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-96 p-5 border border-black rounded-lg shadow-lg text-center">
        <div className="mb-5 text-left">
          <label htmlFor="account" className="text-blue-600">Account:</label>
          <select id="account" name="account" onChange={handleAccountChange} className="w-full p-2 rounded-md text-lg border-2 border-black mb-3">
            <option value="select">Select</option>
            <option value="kubra-sener">Kübra Şener</option>
            <option value="melih-erpek">Melih Erpek</option>
            <option value="buse-elbirlik">Buse Elbirlik</option>
          </select>
        </div>
 
        <div className="mb-5 text-left">
          <label htmlFor="platform" className="text-blue-600">Platform:</label>
          <select id="platform" name="platform" onChange={handlePlatformChange} className="w-full p-2 rounded-md text-lg border-2 border-black mb-3">
            <option value="select">Select</option>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>
        {platform === 'facebook' && (
          <>
            {['ruleType1'].map((rule, index) => (
              <div key={index} className="mb-5 text-left">
                <label htmlFor={rule} className="text-blue-600">Rule Type {index + 1}:</label>
                <select
                  id={rule}
                  name={rule}
                  value={selectedRule[rule]}
                  onChange={(e) => handleRuleChange(e, rule)}
                  className="w-full p-2 border border-gray-700 rounded-md mb-3 text-lg"
                >
                  <option value="select">Select</option>
                  <option value="campaignName">campaign Name</option>
                  <option value="adSetName">Ad Set Name</option>
                  <option value="abTesting">A/B Testing</option>
                  <option value="budgetType">Budget Type</option>
                  <option value="budget">Budget</option>
                </select>
 
                {selectedRule[rule] === 'campaignName' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Enter Campaign Name"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                      className="w-full p-2 border border-gray-700 rounded-md text-lg"
                    />
                  </div>
                )}
 
                {selectedRule[rule] === 'adSetName' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Ad Set Name"
                      value={adSetName}
                      onChange={(e) => setAdSetName(e.target.value)}
                      className="w-full p-2 border border-gray-700 rounded-md text-lg"
                    />
                  </div>
                )}
 
                {selectedRule[rule] === 'abTesting' && (
                  <div className="mt-3 text-left">
                    <label className="block">A/B Testing:</label>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="abTestingYes"
                        name="abTesting"
                        value="yes"
                        checked={abTesting === true}
                        onChange={() => setAbTesting(true)}
                        className="mr-2"
                      />
                      <label htmlFor="abTestingYes" className="mr-4">Yes</label>
                      <input
                        type="radio"
                        id="abTestingNo"
                        name="abTesting"
                        value="no"
                        checked={abTesting === false}
                        onChange={() => setAbTesting(false)}
                        className="mr-2"
                      />
                      <label htmlFor="abTestingNo">No</label>
                    </div>
                  </div>
                )}
 
                {selectedRule[rule] === 'budgetType' && (
                  <div className="mt-3 text-left">
                    <label htmlFor="budgetType" className="text-blue-600">Budget Type:</label>
                    <select
                      id="budgetType"
                      name="budgetType"
                      value={budgetType}
                      onChange={(e) => setBudgetType(e.target.value)}
                      className="w-full p-2 border border-gray-700 rounded-md text-lg mb-3"
                    >
                      <option value="daily">Daily</option>
                      <option value="lifetime">Lifetime</option>
                    </select>
                  </div>
                )}
 
                {selectedRule[rule] === 'budget' && (
                  <div className="mt-3 text-left">
                    <label htmlFor="budget" className="text-blue-600">Budget:</label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        placeholder="Enter budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="flex-grow p-2 border border-gray-700 rounded-md text-lg mr-3"
                      />
                      <select
                        id="currency"
                        name="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="p-2 border border-gray-700 rounded-md text-lg"
                      >
                        <option value="TL">TL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
 
        {platform === 'linkedin' && (
          <div className="mb-5 text-left">
            <label htmlFor="currencyValue" className="text-blue-600">Currency Value:</label>
            <div className="flex items-center">
              <input
                type="number"
                id="currencyValue"
                name="currencyValue"
                value={currencyValue}
                onChange={handleCurrencyValueChange}
                placeholder="Currency"
                className="w-3/4 p-2 rounded-md text-lg border-2 border-black mr-3"
              />
              <select
                id="currencyType"
                name="currencyType"
                value={currencyType}
                onChange={handleCurrencyTypeChange}
                className="w-1/4 p-2 rounded-md text-lg border-2 border-black"
              >
                <option value="usd">USD</option>
                <option value="tl">TL</option>
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>
        )}
 
        {platform === 'google' && (
          <>
            <div className="mb-5 text-left">
              <label htmlFor={`additionalInput0`} className="text-blue-600">Rules Type 1:</label>
              <select
                id={`additionalInput0`}
                name={`additionalInput0`}
                value={additionalInputs[0]}
                onChange={(e) => {
                  handleAdditionalInputChange(0, e.target.value);
                  setAdditionalInputLabel(getAdditionalInputLabel(e.target.value));
                }}
                className="w-full p-2 rounded-md text-lg border-2 border-black mb-3"
              >
                <option value="">Select</option>
                {selectOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>
 
            {isAdditionalInputActive && (
              <div className="mb-5 text-left">
                <label htmlFor={additionalInputLabel.toLowerCase()} className="text-blue-600">{additionalInputLabel}:</label>
                {additionalInputLabel === "Campaign Name" && (
                  <input
                    type="text"
                    id="campaignName"
                    name="campaignName"
                    value={additionalInputs[additionalInputLabel]}
                    onChange={(e) => handleAdditionalInputChange(additionalInputLabel, e.target.value)}
                    placeholder={`Enter ${additionalInputLabel}`}
                    className="w-full p-2 rounded-md text-lg border-2 border-black"
                  />
                )}
                {(additionalInputLabel === "Budget" || additionalInputLabel === "Target CPM" || additionalInputLabel === "Keywords" || additionalInputLabel === "Ad Group Name" || additionalInputLabel === "Topics") && (
                  <div className="flex items-center">
                    <input
                      type="text"
                      id={additionalInputLabel.toLowerCase()}
                      name={additionalInputLabel.toLowerCase()}
                      value={additionalInputs[additionalInputLabel]}
                      onChange={(e) => handleAdditionalInputChange(additionalInputLabel, e.target.value)}
                      placeholder={`Enter ${additionalInputLabel}`}
                      className="w-full p-2 rounded-md text-lg border-2 border-black mr-3"
                    />
                    {additionalInputLabel === "Budget" && (
                      <select
                        id="budgetCurrencyType"
                        name="budgetCurrencyType"
                        value={budgetCurrencyType}
                        onChange={handleBudgetCurrencyTypeChange}
                        className="w-1/4 p-2 rounded-md text-lg border-2 border-black"
                      >
                        <option value="usd">USD</option>
                        <option value="tl">TL</option>
                        <option value="eur">EUR</option>
                      </select>
                    )}
                    {additionalInputLabel === "Target CPM" && (
                      <select
                        id="targetCPMCurrencyType"
                        name="targetCPMCurrencyType"
                        value={targetCPMCurrencyType}
                        onChange={handleTargetCPMCurrencyTypeChange}
                        className="w-1/4 p-2 rounded-md text-lg border-2 border-black"
                      >
                        <option value="usd">USD</option>
                        <option value="tl">TL</option>
                        <option value="eur">EUR</option>
                      </select>
                    )}
                  </div>
                )}
                {additionalInputLabel === "Budget Type" && (
                  <select
                    id="budgetType"
                    name="budgetType"
                    value={budgetType}
                    onChange={handleBudgetTypeChange}
                    className="w-full p-2 rounded-md text-lg border-2 border-black"
                  >
                    <option value="total">Lifetime Budget</option>
                    <option value="daily">Daily Budget</option>
                  </select>
                )}
              </div>
            )}
          </>
        )}
 
        <div className="text-center">
          <button type="submit" className="w-1/2 p-3 text-lg rounded-md bg-blue-600 text-white border-none">Submit</button>
        </div>
      </form>
    </div>
  );
};
 
export default DropdownForm;