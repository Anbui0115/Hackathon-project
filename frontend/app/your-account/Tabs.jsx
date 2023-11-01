// Tabs.js

import React from 'react';

const Tabs = ({ activeTab, setActiveTab, children }) => {
  return (
    <div>
      <div className="flex mb-4">
        {React.Children.map(children, child => {
          const { label } = child.props;
          return (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`px-4 py-2 rounded-md mr-4 text-gray-600 ${
                activeTab === label ? 'bg-gray-300' : ''
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      {React.Children.map(children, child => {
        if (child.props.label !== activeTab) return null;
        return child;
      })}
    </div>
  );
};

export default Tabs;
