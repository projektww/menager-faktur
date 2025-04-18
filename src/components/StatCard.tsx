import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral' | 'warning';
}
export const StatCard = ({
  title,
  value,
  change,
  icon,
  trend
}: StatCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500 bg-green-50';
      case 'down':
        return 'text-red-500 bg-red-50';
      case 'warning':
        return 'text-amber-500 bg-amber-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUpIcon size={14} />;
      case 'down':
        return <ArrowDownIcon size={14} />;
      default:
        return <MinusIcon size={14} />;
    }
  };
  return <div className="bg-white rounded-lg shadow p-5">
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <div className={`p-2 rounded-full ${getTrendColor()}`}>{icon}</div>
      </div>
      <p className="text-2xl font-bold mt-2 mb-1">{value}</p>
      <div className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${getTrendColor()}`}>
        {getTrendIcon()}
        <span className="ml-1">{change}</span>
      </div>
    </div>;
};