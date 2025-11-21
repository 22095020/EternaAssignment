import { 
  Settings, 
  Wallet, 
  Twitter, 
  Compass, 
  Activity, 
  BarChart3, 
  ChevronDown, 
  Wifi, 
  Bell, 
  Palette, 
  LayoutTemplate, 
  FileText, 
  Globe,
  Gamepad2
} from 'lucide-react';

// --- HELPER: Vertical Divider ---
const Separator = () => (
  <div className="h-4 w-[1px] bg-gray-800 mx-2"></div>
);

// --- HELPER: Text Item with Pink Dot ---
const StatusItem = ({ icon: Icon, label, hasNotification }: { icon: any, label: string, hasNotification?: boolean }) => (
  <button className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium text-gray-400 hover:text-white transition-colors relative group">
    <Icon size={14} className="text-gray-500 group-hover:text-gray-300" />
    <span>{label}</span>
    {hasNotification && (
      <span className="absolute top-1 right-0 w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
    )}
  </button>
);

const StatusBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#0a0b0e] border-t border-gray-800 h-9 px-2 flex items-center justify-between select-none z-50">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-1">
        
        {/* Preset Button */}
        <button className="flex items-center gap-2 bg-[#1e293b] hover:bg-[#334155] text-blue-400 px-3 py-1 rounded text-[11px] font-bold transition-colors uppercase tracking-wider border border-blue-900/30">
          <Settings size={12} />
          Preset 1
        </button>

        {/* Wallet Selector */}
        <button className="flex items-center gap-2 bg-[#15161a] border border-gray-800 hover:border-gray-700 text-gray-300 px-3 py-1 rounded-full text-[11px] transition-colors ml-2">
          <Wallet size={12} className="text-gray-500" />
          <span>1</span>
          <span className="text-blue-400 font-bold">≡</span>
          <span>0</span>
          <ChevronDown size={12} className="text-gray-500" />
        </button>

        <Separator />

        {/* Settings Icon */}
        <button className="p-1.5 text-gray-500 hover:text-white transition-colors">
          <Settings size={14} />
        </button>

        {/* Navigation Items with Pink Dots */}
        <StatusItem icon={Wallet} label="Wallet" hasNotification />
        <StatusItem icon={Twitter} label="Twitter" hasNotification />
        <StatusItem icon={Compass} label="Discover" hasNotification />
        <StatusItem icon={Activity} label="Pulse" hasNotification />
        <StatusItem icon={BarChart3} label="PnL" />

        <Separator />

        {/* Game/Status Pills */}
        <div className="flex items-center gap-2 px-2 py-0.5 bg-[#15161a] rounded-full border border-gray-800/50">
           <div className="flex -space-x-1">
             <span className="text-[10px]">💊</span>
             <span className="text-[10px]">🦊</span>
           </div>
        </div>

        {/* SOL Price */}
        <div className="flex items-center gap-1.5 px-2">
          <span className="text-blue-400 font-bold text-[11px]">≡</span>
          <span className="text-[#14F195] text-[11px] font-mono">$130.51</span>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2">
        
        {/* Connection Status */}
        <div className="flex items-center gap-2 bg-[#064e3b]/30 border border-[#064e3b] px-3 py-0.5 rounded text-[11px] text-[#34d399]">
          <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></div>
          Connection is stable
        </div>

        {/* Global Dropdown */}
        <button className="flex items-center gap-1 text-gray-300 hover:text-white text-[11px] font-medium px-2">
          GLOBAL
          <ChevronDown size={12} />
        </button>

        <Separator />

        {/* Right Tools */}
        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
          <LayoutTemplate size={14} />
        </button>
        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
          <Bell size={14} />
        </button>
        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
          <Palette size={14} />
        </button>

        <Separator />

        {/* Socials & Docs */}
        <div className="flex items-center gap-3 px-2">
          <Gamepad2 size={14} className="text-gray-500 hover:text-[#5865F2] cursor-pointer" /> {/* Discord Placeholder */}
          <Twitter size={14} className="text-gray-500 hover:text-white cursor-pointer" />
          
          <button className="flex items-center gap-1 text-gray-400 hover:text-white text-[11px]">
            <FileText size={14} />
            Docs
          </button>
        </div>

      </div>
    </footer>
  );
};

export default StatusBar;