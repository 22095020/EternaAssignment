import { IconButton, Separator } from '@/components/shared';
import { Search, Bell, Settings, Star, LineChart } from 'lucide-react';

const SubNav = () => {
  return (
    <div className="bg-[#050505] border-b border-gray-800 h-[40px] flex items-center px-4 md:px-6">
      <div className="flex items-center gap-1">
        <IconButton icon={Settings} className="w-8 h-8 text-gray-500" />
        <Separator className="h-4 mx-1" />
        <IconButton icon={Star} className="w-8 h-8 text-gray-500" />
        <IconButton icon={LineChart} className="w-8 h-8 text-gray-500" />
        <Separator className="h-4 mx-1" />
      </div>
    </div>
  );
};

export default SubNav;
