import { LucideIcon } from 'lucide-react';

// interface for the IconButton props to ensure strict typing
interface IconButtonProps {
  icon: LucideIcon; // Enforces that only a Lucide icon component is passed
  className?: string;
  onClick?: () => void; // Added optional click handler for interactivity
}

export const IconButton = ({ icon: Icon, className = "", onClick }: IconButtonProps) => (
  <button 
    onClick={onClick}
    className={`p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 ${className}`}
  >
    <Icon size={18} />
  </button>
);

export const Separator = ({ className = "" }: { className?: string }) => (
  <div className={`h-4 w-[1px] bg-gray-800 ${className}`}></div>
);