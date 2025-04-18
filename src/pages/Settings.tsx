import React from 'react';
import { UserIcon, BuildingIcon, CreditCardIcon, FileTextIcon, BellIcon, ShieldIcon } from 'lucide-react';
export const Settings = () => {
  return <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Ustawienia</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
          Zapisz zmiany
        </button>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b">
          <nav className="flex overflow-x-auto">
            <button className="px-6 py-4 text-blue-600 border-b-2 border-blue-600 font-medium text-sm whitespace-nowrap">
              Dane działalności
            </button>
            <button className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Konta bankowe
            </button>
            <button className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Faktury i dokumenty
            </button>
            <button className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Powiadomienia
            </button>
            <button className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium text-sm whitespace-nowrap">
              Bezpieczeństwo
            </button>
          </nav>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-md mb-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                  <BuildingIcon size={40} className="text-gray-500" />
                </div>
                <div className="mt-4 text-center">
                  <button className="text-blue-600 text-sm hover:underline">
                    Zmień logo
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Podgląd danych na fakturze</h3>
                <div className="text-sm">
                  <p className="font-medium">Twoja Firma Sp. z o.o.</p>
                  <p>ul. Przykładowa 1/2</p>
                  <p>00-001 Warszawa</p>
                  <p>NIP: 1234567890</p>
                  <p>REGON: 123456789</p>
                  <p className="mt-2">Tel: +48 123 456 789</p>
                  <p>E-mail: kontakt@twojafirma.pl</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Dane działalności
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nazwa firmy
                  </label>
                  <input type="text" defaultValue="Twoja Firma Sp. z o.o." className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NIP
                  </label>
                  <input type="text" defaultValue="1234567890" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    REGON
                  </label>
                  <input type="text" defaultValue="123456789" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    KRS
                  </label>
                  <input type="text" defaultValue="0000123456" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-800 mt-6 mb-4">
                Adres
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ulica i numer
                  </label>
                  <input type="text" defaultValue="ul. Przykładowa 1/2" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kod pocztowy
                  </label>
                  <input type="text" defaultValue="00-001" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Miejscowość
                  </label>
                  <input type="text" defaultValue="Warszawa" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Województwo
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                    <option>mazowieckie</option>
                    <option>dolnośląskie</option>
                    <option>małopolskie</option>
                    <option>śląskie</option>
                    <option>wielkopolskie</option>
                  </select>
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-800 mt-6 mb-4">
                Dane kontaktowe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input type="text" defaultValue="+48 123 456 789" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" defaultValue="kontakt@twojafirma.pl" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Strona WWW
                  </label>
                  <input type="text" defaultValue="www.twojafirma.pl" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
              </div>
              <div className="mt-6">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">
                    Wyświetlaj dane kontaktowe na fakturach
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <div size={20} className="text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-800">Konta bankowe</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Zarządzaj kontami bankowymi, które będą wyświetlane na fakturach.
          </p>
          <button className="text-blue-600 text-sm hover:underline">
            Zarządzaj kontami
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <FileTextIcon size={20} className="text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-800">
              Szablony dokumentów
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Dostosuj wygląd faktur, rachunków i innych dokumentów.
          </p>
          <button className="text-blue-600 text-sm hover:underline">
            Edytuj szablony
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <ShieldIcon size={20} className="text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-800">
              Bezpieczeństwo
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Zmień hasło, włącz uwierzytelnianie dwuskładnikowe i inne ustawienia
            bezpieczeństwa.
          </p>
          <button className="text-blue-600 text-sm hover:underline">
            Ustawienia bezpieczeństwa
          </button>
        </div>
      </div>
    </div>;
};