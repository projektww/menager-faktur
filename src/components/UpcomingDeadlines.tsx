import React from 'react';
import { CalendarIcon, AlertCircleIcon } from 'lucide-react';
export const UpcomingDeadlines = () => {
  const deadlines = [{
    id: 1,
    title: 'Podatek VAT',
    date: '25.05.2023',
    daysLeft: 5,
    type: 'tax'
  }, {
    id: 2,
    title: 'ZUS',
    date: '20.05.2023',
    daysLeft: 0,
    type: 'tax'
  }, {
    id: 3,
    title: 'Faktura FV/2023/04/005',
    date: '28.05.2023',
    daysLeft: 8,
    type: 'invoice'
  }];
  return <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Nadchodzące terminy
      </h2>
      <div className="space-y-3">
        {deadlines.map(deadline => <div key={deadline.id} className={`p-3 rounded-md border ${deadline.daysLeft <= 0 ? 'border-red-200 bg-red-50' : deadline.daysLeft <= 5 ? 'border-amber-200 bg-amber-50' : 'border-gray-200'}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{deadline.title}</p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <CalendarIcon size={14} className="mr-1" />
                  {deadline.date}
                </p>
              </div>
              {deadline.daysLeft <= 5 && <div className={`p-1 rounded-full ${deadline.daysLeft <= 0 ? 'bg-red-100' : 'bg-amber-100'}`}>
                  <AlertCircleIcon size={16} className={deadline.daysLeft <= 0 ? 'text-red-500' : 'text-amber-500'} />
                </div>}
            </div>
            <div className="mt-2 text-xs">
              {deadline.daysLeft <= 0 ? <span className="text-red-600 font-medium">Dziś!</span> : <span className={deadline.daysLeft <= 5 ? 'text-amber-600' : 'text-gray-500'}>
                  Pozostało dni: {deadline.daysLeft}
                </span>}
            </div>
          </div>)}
      </div>
      <button className="w-full mt-4 text-blue-600 text-sm hover:underline">
        Zobacz wszystkie terminy
      </button>
    </div>;
};