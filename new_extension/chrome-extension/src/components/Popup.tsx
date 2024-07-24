import React from 'react';

const Popup = () => {
  const toggleDarkMode = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle-dark-mode' });
    });
  };

  return (
    <div>
      <h1>Dark Mode Toggle</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Popup;