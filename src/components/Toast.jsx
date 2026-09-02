import React, { useEffect } from 'react';
import { CheckCircle2, Copy, Download, Info, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'copy':
        return <Copy className="w-5 h-5 text-[#27a3ff]" />;
      case 'download':
        return <Download className="w-5 h-5 text-[#43ae47]" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-[#43ae47]" />;
      default:
        return <Info className="w-5 h-5 text-[#f9440d]" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#041525]/90 border border-slate-700/60 shadow-2xl backdrop-blur-xl text-white animate-bounce-short transition-all">
      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
        {getIcon()}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {toast.title || 'Notification'}
        </span>
        <span className="text-sm font-medium text-slate-100">{toast.message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
