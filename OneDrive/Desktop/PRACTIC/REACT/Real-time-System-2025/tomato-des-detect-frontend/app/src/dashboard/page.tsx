/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { LayoutDashboard, History, FileText, Settings, Plus, Cpu, Search } from "lucide-react";


export default function DashboardLayout({
  children,
  activePage = 'dashboard',

}: {
  children: React.ReactNode;
  activePage?: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <div className="rounded-md bg-red-500 p-2 mr-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="8" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" strokeWidth="2" />
            </svg>
          </div>
          <span className="font-bold text-xl text-red-500">Tomato Health Monitor</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        <Search className="w-6 h-6 text-gray-600" />
        </div>
        <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
          <img src="/passport.jpg" alt=" avatar" className="w-full h-full border border-gray-200  rounded-full" />
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 min-h-screen border-r border-gray-200 p-4">
        <nav className="space-y-2 sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-hidden">
            <Link href="/src/dashboard" 
              className={`flex items-center p-4 rounded-lg ${activePage === 'dashboard' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-100'}`}>
              <LayoutDashboard className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </Link>
            
            <Link href="/src/upload" 
              className={`flex items-center p-4 rounded-lg ${activePage === 'upload' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Plus className="w-5 h-5 mr-3" />
              <span>Upload Images</span>
            </Link>
            <Link href="/src/imageprocessing" 
              className={`flex items-center p-4 rounded-lg ${activePage === 'imageProcessing' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-100'}`}>
             <Cpu className="w-5 h-5 mr-3" />
              <span>Image Processing</span>
            </Link>
            <Link href="/src/result" 
              className={`flex items-center p-4 rounded-lg ${activePage === 'results' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-100'}`}>
              <History className="w-5 h-5 mr-3" />
              <span>Analysis Results</span>
            </Link>
            
            <Link href="/reports" 
              className={`flex items-center p-4 rounded-lg ${activePage === 'reports' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-100'}`}>
              <FileText className="w-5 h-5 mr-3" />
              <span>Reports</span>
            </Link>
            
            <Link href="/settings" 
              className={`flex items-center p-4 rounded-lg ${activePage === 'settings' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-100'}`}>
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {children}
          <div>
            This is place for Dashboard
          </div>
        </main>
      </div>
    </div>
  );
}