import React from 'react';

export default function ScrollBar({ children }) {
  return (
    <div
      className="
        h-screen 
        overflow-auto
        scrollbar-thin
        scrollbar-thumb-primary
        scrollbar-track-white
        scrollbar-thumb-rounded-lg
        scrollbar-track-rounded-lg
       hover:scrollbar-thumb-slate-200
      "
    >
      {children}
    </div>
  );
}
