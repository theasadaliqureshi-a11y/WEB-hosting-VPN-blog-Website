
import React from 'react';

interface AdPlaceholderProps {
  width: string;
  height: string;
  label?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height, label = "Advertisement" }) => {
  return (
    <div
      className={`flex items-center justify-center bg-gray-700/50 border-2 border-dashed border-gray-500 rounded-lg text-text-secondary ${width} ${height} my-6 mx-auto`}
    >
      <div className="text-center">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs">{width.replace('w-','')} x {height.replace('h-','')}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
