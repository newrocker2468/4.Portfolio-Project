// src/components/Spinner.tsx
import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className='spinner' aria-label='Loading'>
      <style>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: currentColor;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
