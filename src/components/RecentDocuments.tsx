import React from 'react';
import { FileTextIcon, FileIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
export const RecentDocuments = () => {
  const documents = [{
    id: 1,
    type: 'Faktura',
    number: 'FV/2023/05/001',
    client: 'Kowalski sp. z o.o.',
    date: '15.05.2023',
    amount: '1 250,00 zł',
    status: 'paid'
  }, {
    id: 2,
    type: 'Faktura',
    number: 'FV/2023/05/002',
    client: 'ABC Design',
    date: '20.05.2023',
    amount: '850,00 zł',
    status: 'pending'
  }, {
    id: 3,
    type: 'Rachunek',
    number: 'R/2023/05/001',
    client: 'Jan Nowak',
    date: '22.05.2023',
    amount: '600,00 zł',
    status: 'pending'
  }, {
    id: 4,
    type: 'Umowa',
    number: 'U/2023/05/001',
    client: 'XYZ Marketing',
    date: '10.05.2023',
    amount: '2 500,00 zł',
    status: 'paid'
  }];
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">
          Ostatnie dokumenty
        </h2>
        <button className="text-blue-600 text-sm hover:underline">
          Zobacz wszystkie
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-3 font-medium">Typ</th>
              <th className="pb-3 font-medium">Numer</th>
              <th className="pb-3 font-medium">Klient</th>
              <th className="pb-3 font-medium">Data</th>
              <th className="pb-3 font-medium">Kwota</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => <tr key={doc.id} className="border-b border-gray-100">
                <td className="py-3 flex items-center">
                  {doc.type === 'Faktura' ? <FileTextIcon size={16} className="mr-2 text-blue-600" /> : <FileIcon size={16} className="mr-2 text-gray-600" />}
                  {doc.type}
                </td>
                <td className="py-3">{doc.number}</td>
                <td className="py-3">{doc.client}</td>
                <td className="py-3">{doc.date}</td>
                <td className="py-3 font-medium">{doc.amount}</td>
                <td className="py-3">
                  {doc.status === 'paid' ? <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-50 text-green-600">
                      <CheckCircleIcon size={12} className="mr-1" />
                      Opłacona
                    </span> : <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-amber-50 text-amber-600">
                      <AlertCircleIcon size={12} className="mr-1" />
                      Oczekująca
                    </span>}
                </td>
                <td className="py-3 text-right">
                  <button className="text-blue-600 hover:underline text-xs">
                    Szczegóły
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};