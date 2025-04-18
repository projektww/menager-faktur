import React from 'react';
import { LayoutDashboardIcon, FileTextIcon, FilePlusIcon, BarChart3Icon, SettingsIcon, BellIcon, LogOutIcon } from 'lucide-react';
interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}
export const Sidebar = ({
  activePage,
  setActivePage
}: SidebarProps) => {
  const menuItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    id: 'documents',
    label: 'Dokumenty',
    icon: <FileTextIcon size={20} />
  }, {
    id: 'createDocument',
    label: 'Nowy dokument',
    icon: <FilePlusIcon size={20} />
  }, {
    id: 'statistics',
    label: 'Statystyki',
    icon: <BarChart3Icon size={20} />
  }, {
    id: 'notifications',
    label: 'Powiadomienia',
    icon: <BellIcon size={20} />
  }, {
    id: 'settings',
    label: 'Ustawienia',
    icon: <SettingsIcon size={20} />
  }];
  return <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">Biznes Manager</h1>
        <p className="text-xs text-gray-500 mt-1">
          Panel zarządzania działalnością
        </p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map(item => <li key={item.id}>
              <button onClick={() => setActivePage(item.id)} className={`w-full flex items-center px-4 py-3 rounded-md text-sm transition-colors ${activePage === item.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}>
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <LogOutIcon size={20} className="mr-3" />
          Wyloguj się
        </button>
      </div>
    </div>;
};