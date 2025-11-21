// 

'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Twitter, 
  MessageCircle, 
  Zap, 
  SlidersHorizontal, 
  ShieldCheck, 
  Flame,
} from 'lucide-react';

// --- 1. TYPES ---
type TokenData = {
  id: string;
  name: string;
  ticker: string;
  imageUrl: string;
  marketCap: number; // Changed to number for calculations
  timeElapsed: string;
  volume: number;    // Changed to number for calculations
  txCount: number;
  badges: string[];
  changes: {
    m5: number;
    h1: number;
  };
  isHighlighted?: boolean;
};

// --- 2. HELPER: CURRENCY FORMATTER ---
const formatCurrency = (val: number) => {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `$${(val / 1000).toFixed(1)}K`;
  return `$${val.toFixed(0)}`;
};

// --- 3. SUB-COMPONENT: TOKEN CARD ---
const TokenCard = ({ data }: { data: TokenData }) => {
  // Check if values are positive for coloring
  const isM5Positive = data.changes.m5 >= 0;
  const isH1Positive = data.changes.h1 >= 0;

  return (
    <div className={`
      relative p-3 rounded-xl mb-3 border transition-all duration-300 hover:bg-[#16171b] cursor-pointer group
      ${data.isHighlighted 
        ? 'bg-[#0f1219] border-blue-900/50 shadow-[0_0_15px_rgba(30,58,138,0.2)]' 
        : 'bg-[#0B0C0F] border-gray-800/50 hover:border-gray-700'}
    `}>
      {/* Header Row: Image, Name, Market Cap */}
      <div className="flex gap-3 mb-2">
        <div className="relative w-12 h-12 flex-shrink-0">
          <img 
            src={data.imageUrl} 
            alt={data.name}
            className="w-full h-full rounded-md object-cover bg-gray-800 group-hover:scale-105 transition-transform" 
          />
          <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full p-0.5">
             <div className="w-3 h-3 bg-green-500 rounded-full border border-black"></div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="font-bold text-gray-200 text-sm truncate">{data.ticker}</span>
              <span className="text-xs text-gray-500 truncate max-w-[100px]">{data.name}</span>
            </div>
            <div className="text-right">
              {/* Market Cap with animation transition */}
              <div className="text-blue-400 font-bold text-sm font-mono transition-all duration-500">
                MC {formatCurrency(data.marketCap)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Metrics */}
      <div className="flex justify-between items-center mb-2 text-xs">
        <div className="flex items-center gap-2 text-green-400 font-mono">
          <span>{data.timeElapsed}</span>
          <div className="flex gap-1 text-gray-500">
            <Globe size={12} className="hover:text-gray-300 cursor-pointer" />
            <Twitter size={12} className="hover:text-blue-400 cursor-pointer" />
            <MessageCircle size={12} className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
        
        <div className="flex flex-col items-end text-[10px] text-gray-400 font-mono leading-tight">
           <div className="flex items-center gap-1">
             <span className="text-gray-500">V</span> 
             <span className="text-white transition-all duration-500">{formatCurrency(data.volume)}</span>
           </div>
           <div className="flex items-center gap-1">
             <span className="text-gray-500">Tx</span> 
             <span className="text-white transition-all duration-500">{data.txCount}</span>
           </div>
        </div>
      </div>

      {/* Third Row: Percentage Grid */}
      <div className="grid grid-cols-4 gap-1 text-[10px] font-mono border-t border-gray-800/50 pt-2">
        
        {/* 5m Change */}
        <div className={`flex items-center gap-1 transition-colors duration-500 ${isM5Positive ? 'text-green-400' : 'text-red-400'}`}>
           <span className="opacity-50">5m</span>
           {Math.abs(data.changes.m5).toFixed(2)}%
        </div>

        {/* 1h Change */}
        <div className={`flex items-center gap-1 transition-colors duration-500 ${isH1Positive ? 'text-green-400' : 'text-red-400'}`}>
           <span className="opacity-50">1h</span>
           {Math.abs(data.changes.h1).toFixed(2)}%
        </div>

        <div className="text-gray-500 text-right col-span-2 flex justify-end gap-2">
           <span className="text-red-400 flex items-center gap-0.5"><Flame size={10}/> 1</span>
           <span className="text-green-400 flex items-center gap-0.5"><ShieldCheck size={10}/> 0</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-gray-800 rounded-full overflow-hidden">
         <div className={`h-full w-1/3 ${data.isHighlighted ? 'bg-blue-500/50' : 'bg-green-500/50'}`}></div>
      </div>
    </div>
  );
};

// --- 4. SUB-COMPONENT: COLUMN HEADER ---
const ColumnHeader = ({ title, count }: { title: string, count?: number }) => (
  <div className="flex items-center justify-between mb-4 px-1">
    <div className="flex items-center gap-2">
      <h2 className="text-gray-200 font-bold text-sm">{title}</h2>
      {count !== undefined && (
        <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-800/50 px-1.5 py-0.5 rounded">
          <Zap size={10} className="text-yellow-500 fill-yellow-500" />
          {count}
        </div>
      )}
    </div>
    <div className="flex items-center gap-2">
       <div className="flex bg-gray-900 rounded-md p-0.5 border border-gray-800">
          <button className="px-1.5 py-0.5 text-[10px] text-blue-400 bg-gray-800 rounded shadow-sm font-mono">P1</button>
          <button className="px-1.5 py-0.5 text-[10px] text-gray-500 font-mono hover:text-gray-300">P2</button>
          <button className="px-1.5 py-0.5 text-[10px] text-gray-500 font-mono hover:text-gray-300">P3</button>
       </div>
       <SlidersHorizontal size={14} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
    </div>
  </div>
);

// --- 5. MAIN COMPONENT ---
export default function TokenDashboard() {
  // Initialize state for our 3 columns
  const [newPairs, setNewPairs] = useState<TokenData[]>([]);
  const [finalStretch, setFinalStretch] = useState<TokenData[]>([]);
  const [migrated, setMigrated] = useState<TokenData[]>([]);

  // --- DATA GENERATOR ---
  // Creates 10 random tokens for a given category
  const generateTokens = (prefix: string, isHigh: boolean = false): TokenData[] => {
    const names = ['Pepe', 'Doge', 'Shiba', 'Floki', 'Bonk', 'Wif', 'Popcat', 'Mog', 'Brett', 'Andy', 'Wolf', 'Trump', 'Biden', 'Cat', 'Moon'];
    
    return Array.from({ length: 10 }).map((_, i) => {
      const name = names[Math.floor(Math.random() * names.length)] + (Math.random() > 0.5 ? ' Inu' : '');
      return {
        id: `${prefix}-${i}`,
        name: `${name} on Sol`,
        ticker: name.split(' ')[0].toUpperCase(),
        imageUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${prefix}${i}`,
        marketCap: Math.floor(Math.random() * 500000) + 5000,
        timeElapsed: `${Math.floor(Math.random() * 59)}m`,
        volume: Math.floor(Math.random() * 10000) + 500,
        txCount: Math.floor(Math.random() * 100),
        badges: [],
        changes: {
          m5: parseFloat((Math.random() * 20 - 10).toFixed(2)),
          h1: parseFloat((Math.random() * 100 - 20).toFixed(2)),
        },
        isHighlighted: isHigh
      };
    });
  };

  // 1. Mount: Generate the data
  useEffect(() => {
    setNewPairs(generateTokens('new'));
    setFinalStretch(generateTokens('final', true));
    setMigrated(generateTokens('mig'));
  }, []);

  // 2. Live Update Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      
      // Function to randomly update a list of tokens
      const updateList = (list: TokenData[]) => list.map(token => {
        // 40% chance to update this token on this tick
        if (Math.random() > 0.6) {
          const changeDelta = (Math.random() - 0.5) * 2; // Random change between -1% and +1%
          
          return {
            ...token,
            marketCap: Math.max(1000, token.marketCap * (1 + (changeDelta / 100))),
            volume: token.volume + Math.floor(Math.random() * 200), // Volume always grows
            txCount: token.txCount + (Math.random() > 0.7 ? 1 : 0), // Random transaction
            changes: {
              m5: parseFloat((token.changes.m5 + changeDelta).toFixed(2)),
              h1: parseFloat((token.changes.h1 + changeDelta).toFixed(2))
            }
          };
        }
        return token;
      });

      setNewPairs(prev => updateList(prev));
      setFinalStretch(prev => updateList(prev));
      setMigrated(prev => updateList(prev));

    }, 2000); // Updates every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1600px] mx-auto">
        
        {/* Column 1: New Pairs */}
        <div className="flex flex-col">
          <ColumnHeader title="New Pairs" count={newPairs.length} />
          <div className="flex flex-col gap-0">
            {newPairs.map(token => <TokenCard key={token.id} data={token} />)}
          </div>
        </div>

        {/* Column 2: Final Stretch */}
        <div className="flex flex-col border-x border-gray-800/30 px-2 md:px-4">
          <ColumnHeader title="Final Stretch" count={finalStretch.length} />
          <div className="flex flex-col gap-0">
            {finalStretch.map(token => <TokenCard key={token.id} data={token} />)}
          </div>
        </div>

        {/* Column 3: Migrated */}
        <div className="flex flex-col">
          <ColumnHeader title="Migrated" count={migrated.length} />
          <div className="flex flex-col gap-0">
            {migrated.map(token => <TokenCard key={token.id} data={token} />)}
          </div>
        </div>

      </div>
    </div>
  );
}
