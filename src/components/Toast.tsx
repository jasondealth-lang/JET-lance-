import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <aside aria-label="Notifications" className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="bg-[#0b132b] text-white px-4 py-3 rounded shadow-xl border border-white/10 flex items-center gap-3 text-xs font-medium max-w-md">
        <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0" />
        <span className="leading-snug">{toastMessage}</span>
      </div>
    </aside>
  );
};
