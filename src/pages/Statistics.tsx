import React from 'react';
import { CalendarIcon, DownloadIcon } from 'lucide-react';
export const Statistics = () => {
  return <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Statystyki</h1>
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-md text-sm px-3 py-2">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm flex items-center hover:bg-gray-50 transition-colors">
            <DownloadIcon size={16} className="mr-2" />
            Eksportuj
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500 text-sm">Przychody (rok)</p>
          <p className="text-2xl font-bold mt-2">42 580,00 zł</p>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-xs font-medium">+15% </span>
            <span className="text-xs text-gray-500 ml-1">vs rok poprzedni</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500 text-sm">Koszty (rok)</p>
          <p className="text-2xl font-bold mt-2">24 320,00 zł</p>
          <div className="flex items-center mt-1">
            <span className="text-red-500 text-xs font-medium">+8% </span>
            <span className="text-xs text-gray-500 ml-1">vs rok poprzedni</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500 text-sm">Zysk (rok)</p>
          <p className="text-2xl font-bold mt-2">18 260,00 zł</p>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-xs font-medium">+23% </span>
            <span className="text-xs text-gray-500 ml-1">vs rok poprzedni</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500 text-sm">Dokumenty (rok)</p>
          <p className="text-2xl font-bold mt-2">87</p>
          <div className="flex items-center mt-1">
            <span className="text-green-500 text-xs font-medium">+12% </span>
            <span className="text-xs text-gray-500 ml-1">vs rok poprzedni</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">
              Przychody i koszty
            </h2>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Miesięcznie</option>
              <option>Kwartalnie</option>
            </select>
          </div>
          <div className="h-64 flex items-end">
            {Array.from({
            length: 12
          }).map((_, idx) => <div key={idx} className="flex-1 flex flex-col items-center">
                <div className="w-full px-1 flex flex-col items-center h-[90%]">
                  <div className="w-5 bg-blue-500 rounded-t-sm" style={{
                height: `${Math.max(20, Math.random() * 100)}%`,
                marginBottom: '2px'
              }}></div>
                  <div className="w-5 bg-red-400 rounded-t-sm" style={{
                height: `${Math.max(20, Math.random() * 60)}%`
              }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'][idx]}
                </div>
              </div>)}
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
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-6">
            Podział przychodów
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Usługi programistyczne</span>
                <span className="text-sm font-medium">26 500,00 zł</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{
                width: '62%'
              }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">62% całości</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Konsultacje</span>
                <span className="text-sm font-medium">8 300,00 zł</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{
                width: '20%'
              }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">20% całości</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Szkolenia</span>
                <span className="text-sm font-medium">5 200,00 zł</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{
                width: '12%'
              }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">12% całości</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Inne</span>
                <span className="text-sm font-medium">2 580,00 zł</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{
                width: '6%'
              }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">6% całości</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Miesięczne zestawienie
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3 font-medium">Miesiąc</th>
                  <th className="pb-3 font-medium">Przychody</th>
                  <th className="pb-3 font-medium">Koszty</th>
                  <th className="pb-3 font-medium">Zysk</th>
                  <th className="pb-3 font-medium">Dokumenty</th>
                </tr>
              </thead>
              <tbody>
                {['Maj', 'Kwiecień', 'Marzec', 'Luty', 'Styczeń'].map((month, idx) => <tr key={month} className="border-b border-gray-100">
                      <td className="py-3">{month} 2023</td>
                      <td className="py-3">{`${5240 - idx * 300},00 zł`}</td>
                      <td className="py-3">{`${3100 - idx * 100},00 zł`}</td>
                      <td className="py-3 font-medium text-green-600">{`${2140 - idx * 200},00 zł`}</td>
                      <td className="py-3">{14 - idx}</td>
                    </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <button className="text-blue-600 text-sm hover:underline">
              Zobacz cały rok
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Najlepsi klienci
          </h2>
          <div className="space-y-4">
            {[{
            name: 'Kowalski sp. z o.o.',
            amount: '12 500,00 zł',
            percentage: 29
          }, {
            name: 'ABC Design',
            amount: '8 200,00 zł',
            percentage: 19
          }, {
            name: 'XYZ Marketing',
            amount: '6 800,00 zł',
            percentage: 16
          }, {
            name: 'Jan Nowak',
            amount: '5 400,00 zł',
            percentage: 13
          }, {
            name: 'Pozostali klienci',
            amount: '9 680,00 zł',
            percentage: 23
          }].map((client, idx) => <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">{client.name}</span>
                  <span className="text-sm font-medium">{client.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-green-500' : idx === 2 ? 'bg-amber-500' : idx === 3 ? 'bg-purple-500' : 'bg-gray-500'}`} style={{
                width: `${client.percentage}%`
              }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {client.percentage}% całości
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};