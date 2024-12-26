import React from 'react';
import { Mail, FileText, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy Policy
            </a>
            <a href="/support" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Support
            </a>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Code Review Tool. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}