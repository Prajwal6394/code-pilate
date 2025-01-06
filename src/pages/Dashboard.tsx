import { useNavigate } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
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
        <button 
          onClick={() => navigate('/upload')}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-500 transition-colors"
        >
          Upload Code
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <RecentActivity />
      </div>
    </>
  );
}