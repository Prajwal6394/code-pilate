import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import type { CodeReview } from '../../types';

const mockReviews: CodeReview[] = [
  {
    id: '1',
    fileName: 'App.tsx',
    uploadDate: '2024-03-10T10:00:00Z',
    issuesCount: 3,
    status: 'completed'
  },
  {
    id: '2',
    fileName: 'api.service.ts',
    uploadDate: '2024-03-09T15:30:00Z',
    issuesCount: 5,
    status: 'completed'
  },
  {
    id: '3',
    fileName: 'utils.ts',
    uploadDate: '2024-03-09T09:15:00Z',
    issuesCount: 1,
    status: 'completed'
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Activity</h2>
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">{review.fileName}</p>
                <p className="text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {new Date(review.uploadDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <AlertCircle className="h-4 w-4" />
              <span>{review.issuesCount} issues</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}