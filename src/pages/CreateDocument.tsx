import React from 'react';
import { PlusIcon, TrashIcon, SaveIcon, DownloadIcon, SendIcon } from 'lucide-react';
export const CreateDocument = () => {
  return <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Nowy dokument</h1>
        <div className="flex space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm flex items-center hover:bg-gray-50 transition-colors">
            <SaveIcon size={16} className="mr-2" />
            Zapisz jako szkic
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center transition-colors">
            <DownloadIcon size={16} className="mr-2" />
            Generuj PDF
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Typ dokumentu
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Faktura VAT</option>
                <option>Faktura proforma</option>
                <option>Rachunek</option>
                <option>Umowa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numer
              </label>
              <input type="text" value="FV/2023/05/009" readOnly className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data wystawienia
              </label>
              <input type="date" defaultValue="2023-05-25" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Termin płatności
              </label>
              <input type="date" defaultValue="2023-06-08" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Sprzedawca
              </h3>
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="font-medium">Twoja Firma Sp. z o.o.</p>
                <p className="text-sm">ul. Przykładowa 1/2</p>
                <p className="text-sm">00-001 Warszawa</p>
                <p className="text-sm">NIP: 1234567890</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Nabywca
              </h3>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2">
                <option>Wybierz klienta...</option>
                <option>Nowy klient</option>
                <option>Kowalski sp. z o.o.</option>
                <option>ABC Design</option>
              </select>
              <div className="p-3 bg-white rounded-md border border-gray-200">
                <input type="text" placeholder="Nazwa firmy" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2" />
                <input type="text" placeholder="Adres" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2" />
                <input type="text" placeholder="NIP" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-b">
          <h3 className="text-sm font-medium text-gray-700 mb-4">
            Pozycje na fakturze
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3 font-medium">Lp.</th>
                  <th className="pb-3 font-medium">Nazwa</th>
                  <th className="pb-3 font-medium">Ilość</th>
                  <th className="pb-3 font-medium">J.m.</th>
                  <th className="pb-3 font-medium">Cena netto</th>
                  <th className="pb-3 font-medium">VAT</th>
                  <th className="pb-3 font-medium">Wartość brutto</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map(item => <tr key={item} className="border-b border-gray-100">
                    <td className="py-3">{item}</td>
                    <td className="py-3">
                      <input type="text" defaultValue={item === 1 ? 'Usługi programistyczne' : ''} placeholder="Nazwa towaru/usługi" className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm" />
                    </td>
                    <td className="py-3">
                      <input type="number" defaultValue={item === 1 ? '10' : ''} className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm" />
                    </td>
                    <td className="py-3">
                      <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                        <option>godz.</option>
                        <option>szt.</option>
                        <option>usł.</option>
                      </select>
                    </td>
                    <td className="py-3">
                      <input type="text" defaultValue={item === 1 ? '100,00' : ''} className="w-24 border border-gray-300 rounded-md px-2 py-1 text-sm" />
                    </td>
                    <td className="py-3">
                      <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                        <option>23%</option>
                        <option>8%</option>
                        <option>5%</option>
                        <option>0%</option>
                      </select>
                    </td>
                    <td className="py-3 font-medium">
                      {item === 1 ? '1 230,00 zł' : ''}
                    </td>
                    <td className="py-3">
                      <button className="text-red-500 hover:bg-red-50 p-1 rounded">
                        <TrashIcon size={16} />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <button className="mt-4 border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center hover:bg-gray-50 transition-colors">
            <PlusIcon size={16} className="mr-1" />
            Dodaj pozycję
          </button>
          <div className="flex justify-end mt-6">
            <div className="w-64">
              <div className="flex justify-between py-2 text-sm">
                <span>Suma netto:</span>
                <span className="font-medium">1 000,00 zł</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span>Podatek VAT (23%):</span>
                <span className="font-medium">230,00 zł</span>
              </div>
              <div className="flex justify-between py-2 text-sm font-medium border-t">
                <span>Razem do zapłaty:</span>
                <span>1 230,00 zł</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sposób płatności
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Przelew bankowy</option>
                <option>Gotówka</option>
                <option>Karta płatnicza</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Konto bankowe
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>mBank: 11 1111 2222 3333 4444 5555 6666</option>
                <option>Santander: 66 6666 5555 4444 3333 2222 1111</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Uwagi
            </label>
            <textarea placeholder="Dodatkowe informacje, uwagi..." rows={3} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition-colors">
          Anuluj
        </button>
        <div className="flex space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm flex items-center hover:bg-gray-50 transition-colors">
            <SaveIcon size={16} className="mr-2" />
            Zapisz jako szkic
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm flex items-center hover:bg-blue-50 transition-colors">
            <DownloadIcon size={16} className="mr-2" />
            Generuj PDF
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center transition-colors">
            <SendIcon size={16} className="mr-2" />
            Wystaw i wyślij
          </button>
        </div>
      </div>
    </div>;
};