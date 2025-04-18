import React from 'react';
import { BellIcon, CheckIcon, AlertCircleIcon, CalendarIcon, FileTextIcon, CreditCardIcon } from 'lucide-react';
export const Notifications = () => {
  const notifications = [{
    id: 1,
    type: 'tax',
    title: 'Zbliża się termin płatności podatku VAT',
    description: 'Termin płatności podatku VAT za kwiecień 2023 upływa 25 maja 2023.',
    date: '19.05.2023',
    isNew: true
  }, {
    id: 2,
    type: 'invoice',
    title: 'Niezapłacona faktura',
    description: 'Faktura FV/2023/04/003 dla klienta ABC Design nie została opłacona. Termin płatności minął 3 dni temu.',
    date: '18.05.2023',
    isNew: true
  }, {
    id: 3,
    type: 'tax',
    title: 'Zbliża się termin płatności składek ZUS',
    description: 'Termin płatności składek ZUS za kwiecień 2023 upływa 20 maja 2023.',
    date: '15.05.2023',
    isNew: false
  }, {
    id: 4,
    type: 'invoice',
    title: 'Faktura opłacona',
    description: 'Faktura FV/2023/04/002 dla klienta Kowalski sp. z o.o. została opłacona.',
    date: '12.05.2023',
    isNew: false
  }, {
    id: 5,
    type: 'system',
    title: 'Aktualizacja systemu',
    description: 'System został zaktualizowany do najnowszej wersji. Sprawdź nowe funkcje w zakładce "Ustawienia".',
    date: '10.05.2023',
    isNew: false
  }];
  return <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Powiadomienia</h1>
        <button className="text-sm text-blue-600 hover:underline">
          Oznacz wszystkie jako przeczytane
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <BellIcon size={18} className="text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-800">
              Wszystkie powiadomienia
            </h2>
          </div>
          <select className="border border-gray-300 rounded-md text-sm px-3 py-1">
            <option>Wszystkie</option>
            <option>Nieprzeczytane</option>
            <option>Faktury</option>
            <option>Podatki</option>
            <option>System</option>
          </select>
        </div>
        <div>
          {notifications.map(notification => <div key={notification.id} className={`p-4 border-b ${notification.isNew ? 'bg-blue-50' : ''}`}>
              <div className="flex">
                <div className={`p-2 rounded-full mr-4 ${notification.type === 'tax' ? 'bg-amber-100' : notification.type === 'invoice' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {notification.type === 'tax' ? <CalendarIcon size={20} className="text-amber-600" /> : notification.type === 'invoice' ? <FileTextIcon size={20} className="text-blue-600" /> : <BellIcon size={20} className="text-gray-600" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">
                      {notification.title}
                    </h3>
                    <div className="flex items-center">
                      {notification.isNew && <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">
                          Nowe
                        </span>}
                      <span className="text-xs text-gray-500">
                        {notification.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.description}
                  </p>
                  <div className="mt-3 flex space-x-3">
                    {notification.type === 'tax' && <button className="text-xs text-blue-600 hover:underline flex items-center">
                        <CalendarIcon size={12} className="mr-1" />
                        Dodaj do kalendarza
                      </button>}
                    {notification.type === 'invoice' && notification.title.includes('Niezapłacona') && <button className="text-xs text-blue-600 hover:underline flex items-center">
                          <CreditCardIcon size={12} className="mr-1" />
                          Przypomnij klientowi
                        </button>}
                    <button className="text-xs text-blue-600 hover:underline flex items-center">
                      <CheckIcon size={12} className="mr-1" />
                      Oznacz jako przeczytane
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="p-4 text-center">
          <button className="text-blue-600 text-sm hover:underline">
            Załaduj więcej
          </button>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Ustawienia powiadomień
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Powiadomienia e-mail</p>
              <p className="text-sm text-gray-500">
                Otrzymuj powiadomienia na adres e-mail
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                Powiadomienia o zbliżających się terminach
              </p>
              <p className="text-sm text-gray-500">
                Przypomnienia o terminach podatkowych i płatnościach
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                Powiadomienia o niezapłaconych fakturach
              </p>
              <p className="text-sm text-gray-500">
                Informacje o fakturach, które nie zostały opłacone w terminie
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Powiadomienia systemowe</p>
              <p className="text-sm text-gray-500">
                Informacje o aktualizacjach i zmianach w systemie
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>;
};