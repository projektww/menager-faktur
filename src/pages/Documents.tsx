import React from 'react';
import { SearchIcon, FilterIcon, PlusIcon } from 'lucide-react';
export const Documents = () => {
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dokumenty</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center transition-colors">
          <PlusIcon size={16} className="mr-2" />
          Nowy dokument
        </button>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input type="text" placeholder="Szukaj dokumentów..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>
          <div className="flex gap-2">
            <select className="border border-gray-300 rounded-md text-sm px-3 py-2">
              <option>Wszystkie typy</option>
              <option>Faktury</option>
              <option>Rachunki</option>
              <option>Umowy</option>
            </select>
            <select className="border border-gray-300 rounded-md text-sm px-3 py-2">
              <option>Wszystkie statusy</option>
              <option>Opłacone</option>
              <option>Oczekujące</option>
              <option>Przeterminowane</option>
            </select>
            <button className="border border-gray-300 rounded-md p-2 text-gray-500 hover:bg-gray-50">
              <FilterIcon size={18} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="px-6 py-3 font-medium">Typ</th>
                <th className="px-6 py-3 font-medium">Numer</th>
                <th className="px-6 py-3 font-medium">Klient</th>
                <th className="px-6 py-3 font-medium">Data wystawienia</th>
                <th className="px-6 py-3 font-medium">Termin płatności</th>
                <th className="px-6 py-3 font-medium">Kwota</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({
              length: 8
            }).map((_, idx) => <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">Faktura</td>
                  <td className="px-6 py-4">FV/2023/0{idx + 1}</td>
                  <td className="px-6 py-4">Klient {idx + 1}</td>
                  <td className="px-6 py-4">{`${idx + 1}.05.2023`}</td>
                  <td className="px-6 py-4">{`${idx + 15}.05.2023`}</td>
                  <td className="px-6 py-4 font-medium">{`${(idx + 1) * 500},00 zł`}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${idx % 3 === 0 ? 'bg-amber-100 text-amber-800' : idx % 3 === 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {idx % 3 === 0 ? 'Oczekująca' : idx % 3 === 1 ? 'Opłacona' : 'Przeterminowana'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:underline">
                        Podgląd
                      </button>
                      <button className="text-blue-600 hover:underline">
                        PDF
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Pokazuje 1-8 z 24 dokumentów
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border rounded text-sm text-gray-500">
              Poprzednia
            </button>
            <button className="px-3 py-1 border rounded bg-blue-50 text-blue-600 text-sm">
              1
            </button>
            <button className="px-3 py-1 border rounded text-sm text-gray-500">
              2
            </button>
            <button className="px-3 py-1 border rounded text-sm text-gray-500">
              3
            </button>
            <button className="px-3 py-1 border rounded text-sm text-gray-500">
              Następna
            </button>
          </div>
        </div>
      </div>
    </div>;
};