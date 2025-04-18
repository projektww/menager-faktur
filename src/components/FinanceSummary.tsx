import React from 'react';
export const FinanceSummary = () => {
  // Przykładowe dane dla wykresu
  const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj'];
  const incomeData = [3200, 4100, 3800, 4500, 5240];
  const expenseData = [2100, 2300, 2500, 2800, 3100];
  // Znajdujemy najwyższą wartość dla skalowania wykresu
  const maxValue = Math.max(...incomeData, ...expenseData);
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">
          Podsumowanie finansowe
        </h2>
        <select className="text-sm border rounded-md px-2 py-1">
          <option>Ostatnie 5 miesięcy</option>
          <option>Ostatni rok</option>
          <option>Bieżący rok</option>
        </select>
      </div>
      <div className="h-64">
        <div className="flex h-full items-end">
          {months.map((month, index) => <div key={month} className="flex-1 flex flex-col items-center">
              <div className="w-full px-2 flex flex-col items-center h-[90%]">
                <div className="w-4 bg-blue-500 rounded-t-sm" style={{
              height: `${incomeData[index] / maxValue * 100}%`,
              marginBottom: '2px'
            }}></div>
                <div className="w-4 bg-red-400 rounded-t-sm" style={{
              height: `${expenseData[index] / maxValue * 100}%`
            }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">{month}</div>
            </div>)}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
          <span className="text-sm text-gray-600">Przychody</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-400 rounded-sm mr-2"></div>
          <span className="text-sm text-gray-600">Koszty</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
        <div>
          <p className="text-gray-500 text-xs">Przychód (maj)</p>
          <p className="text-lg font-semibold">5 240,00 zł</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Koszty (maj)</p>
          <p className="text-lg font-semibold">3 100,00 zł</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Zysk (maj)</p>
          <p className="text-lg font-semibold text-green-600">2 140,00 zł</p>
        </div>
      </div>
    </div>;
};