// import { Search, MoreVertical, ChevronsRight, Bell, Star } from 'lucide-react';

// const Header = () => (
//   <header className="bg-gray-900 p-4 flex items-center justify-between border-b border-gray-700">
//     <div className="flex items-center">
//       <div className="text-2xl font-bold mr-6">AXIOM</div>
//       <nav className="flex items-center space-x-4">
//         <a href="#" className="text-gray-300 hover:text-white">Discover</a>
//         <a href="#" className="text-white font-bold">Pulse</a>
//         <a href="#" className="text-gray-300 hover:text-white">Trackers</a>
//         <a href="#" className="text-gray-300 hover:text-white">Perpetuals</a>
//         <a href="#" className="text-gray-300 hover:text-white">Yield</a>
//         <a href="#" className="text-gray-300 hover:text-white">Vision</a>
//         <a href="#" className="text-gray-300 hover:text-white">Portfolio</a>
//       </nav>
//     </div>
//     <div className="flex items-center space-x-4">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//         <input type="text" placeholder="Search by token or CA..." className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
//       </div>
//       <button className="bg-gray-800 p-2 rounded-lg">
//         <ChevronsRight size={20} />
//       </button>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">Deposit</button>
//       <button className="p-2">
//         <Star size={20} />
//       </button>
//       <button className="p-2">
//         <Bell size={20} />
//       </button>
//       <button className="p-2">
//         <MoreVertical size={20} />
//       </button>
//     </div>
//   </header>
// );

// export default Header;

import React from 'react';
import { Search, Bell, Star, ChevronDown, Wallet, UserCog, Layers, DollarSign } from 'lucide-react';

const Header = () => (
  <header className="bg-[#050505] px-6 h-[72px] flex items-center justify-between border-b border-gray-800 text-gray-200 font-sans">
    
    {/* Left Section: Logo & Nav */}
    <div className="flex items-center gap-12">
      {/* Logo: White Pyramid/Triangle */}
      <div className="flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="transform -translate-y-0.5">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8 text-[15px] font-medium">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Discover</a>
        <a href="#" className="text-[#4d8cff] hover:text-blue-400 transition-colors">Pulse</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Trackers</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Perpetuals</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Yield</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Vision</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">Portfolio</a>
      </nav>
    </div>

    {/* Right Section: Actions */}
    <div className="flex items-center gap-3">
      
      {/* Search Icon (Circular) */}
      <button className="w-10 h-10 rounded-full bg-[#1a1b1e] flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-800/50">
        <Search size={18} />
      </button>

      {/* Network Selector (SOL) */}
      <button className="h-10 px-4 rounded-full bg-[#0d1f1f] border border-[#1a3333] flex items-center gap-2 text-white hover:bg-[#132b2b] transition-colors">
        {/* Mocking the Solana gradient icon */}
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center">
          <Layers size={10} className="text-black" />
        </div>
        <span className="font-semibold text-sm">SOL</span>
        <ChevronDown size={14} className="text-gray-400" />
      </button>

      {/* Deposit Button */}
      <button className="h-10 px-6 rounded-full bg-[#4365ff] hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(67,101,255,0.3)]">
        Deposit
      </button>

      {/* Star Icon */}
      <button className="w-10 h-10 rounded-full bg-[#1a1b1e] flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-800/50">
        <Star size={18} />
      </button>

      {/* Bell Icon */}
      <button className="w-10 h-10 rounded-full bg-[#1a1b1e] flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-800/50">
        <Bell size={18} />
      </button>

      {/* Wallet Balance Display */}
      <button className="h-10 pl-4 pr-2 rounded-full bg-[#1a1b1e] border border-gray-800 flex items-center gap-3 text-white hover:bg-gray-800 transition-colors">
        <Wallet size={18} className="text-white" />
        
        {/* SOL Balance */}
        <div className="flex items-center gap-1.5">
           {/* Mock Solana Icon small */}
           <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-teal-400 rounded-sm"></div>
           <span className="font-medium text-sm">0</span>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-gray-700"></div>

        {/* USDC/USD Balance */}
        <div className="flex items-center gap-1.5">
           <div className="w-4 h-4 bg-teal-900 rounded-full flex items-center justify-center border border-teal-500">
             <DollarSign size={10} className="text-teal-400" />
           </div>
           <span className="font-medium text-sm">0</span>
        </div>

        <ChevronDown size={14} className="text-gray-400 ml-1" />
      </button>

      {/* User Profile / Settings */}
      <button className="w-10 h-10 rounded-full bg-[#1a1b1e] flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-800/50 ml-1">
        <UserCog size={18} />
      </button>

    </div>
  </header>
);

export default Header;