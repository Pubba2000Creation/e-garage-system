import React from 'react';

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
    </div>
  );
}
