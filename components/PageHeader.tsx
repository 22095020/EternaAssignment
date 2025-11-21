import { IconButton, Separator } from '@/components/shared';
import { Box, Layout, ChevronDown, Wallet, HelpCircle, Bookmark, Keyboard, Volume2, Crosshair } from 'lucide-react';

const PageHeader = () => {
  return (
    <div className="bg-[#050505] pt-6 pb-2 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      
      {/* Left: Title & Context */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white">Pulse</h1>
        
        {/* Token Badge */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1b26]">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195]" />
        </div>
        
        {/* Secondary Badge */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1a1a] border border-yellow-900/30">
           <Box size={16} className="text-yellow-600" />
        </div>
      </div>

      {/* Right: Toolbar */}
      <div className="flex items-center gap-4">
        
        <IconButton icon={HelpCircle} className="text-gray-500" />

        {/* Display Dropdown */}
        <button className="flex items-center gap-2 bg-[#1a1b1e] hover:bg-[#25262b] text-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
          <Layout size={16} />
          Display
          <ChevronDown size={14} className="text-gray-500" />
        </button>

        <div className="flex items-center gap-1">
          <IconButton icon={Bookmark} className="text-gray-500" />
          <IconButton icon={Keyboard} className="text-gray-500" />
          <IconButton icon={Volume2} className="text-gray-500" />
          <IconButton icon={Crosshair} className="text-gray-500" />
        </div>

        {/* Secondary Wallet View */}
        <div className="flex items-center bg-[#0a0a0a] border border-gray-800 rounded-lg px-3 py-1.5 gap-3">
          <div className="flex items-center gap-2">
            <Wallet size={14} className="text-gray-400" />
            <span className="text-white text-sm font-mono">1</span>
          </div>
          <div className="h-4 w-[1px] bg-gray-800"></div>
          <div className="flex items-center gap-2">
             <span className="text-[#9945FF] text-xs">≡</span>
             <span className="text-white text-sm font-mono">0</span>
             <ChevronDown size={12} className="text-gray-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PageHeader;