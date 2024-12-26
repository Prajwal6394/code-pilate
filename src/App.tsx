import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RecentActivity from './components/dashboard/RecentActivity';
import UploadArea from './components/upload/UploadArea';
import ReviewResults from './components/review/ReviewResults';
import SettingsForm from './components/settings/SettingsForm';
import { Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code2 className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to the AI Code Review Tool!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Upload your code to get started with AI-powered code analysis
          </p>
          <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition-colors">
            Upload Code
          </button>
        </div>

        {/* Recent Activity Section */}
        <div className="max-w-4xl mx-auto">
          <RecentActivity />
        </div>

        {/* Other sections are commented out but can be enabled based on routing */}
        {/* <UploadArea /> */}
        {/* <ReviewResults /> */}
        {/* <SettingsForm /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;