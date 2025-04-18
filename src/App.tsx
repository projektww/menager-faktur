import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Documents } from './pages/Documents';
import { CreateDocument } from './pages/CreateDocument';
import { Statistics } from './pages/Statistics';
import { Settings } from './pages/Settings';
import { Notifications } from './pages/Notifications';
export function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const pages = {
    dashboard: <Dashboard />,
    documents: <Documents />,
    createDocument: <CreateDocument />,
    statistics: <Statistics />,
    settings: <Settings />,
    notifications: <Notifications />
  };
  return <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 overflow-auto">{pages[activePage]}</div>
    </div>;
}