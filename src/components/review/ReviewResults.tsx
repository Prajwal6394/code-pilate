import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import type { CodeIssue, IssueType, IssueSeverity } from '../../types';

const mockIssues: CodeIssue[] = [
  {
    id: '1',
    fileName: 'App.tsx',
    type: 'error',
    severity: 'critical',
    description: 'Memory leak in useEffect cleanup',
    suggestedFix: 'Add cleanup function to useEffect hook',
    lineNumber: 42
  },
  {
    id: '2',
    fileName: 'api.service.ts',
    type: 'warning',
    severity: 'major',
    description: 'Unhandled promise rejection',
    suggestedFix: 'Add try/catch block or error handling',
    lineNumber: 23
  },
  {
    id: '3',
    fileName: 'utils.ts',
    type: 'suggestion',
    severity: 'minor',
    description: 'Consider using optional chaining',
    suggestedFix: 'Replace obj && obj.prop with obj?.prop',
    lineNumber: 15
  }
] as CodeIssue[];

const issueTypeIcons = {
  error: AlertCircle,
  warning: AlertTriangle,
  suggestion: Info
};

const severityColors = {
  critical: 'text-red-500',
  major: 'text-orange-500',
  minor: 'text-blue-500'
};

export default function ReviewResults() {
  const [selectedType, setSelectedType] = useState<IssueType | 'all'>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<IssueSeverity | 'all'>('all');

  const filteredIssues = mockIssues.filter((issue) => {
    const typeMatch = selectedType === 'all' || issue.type === selectedType;
    const severityMatch = selectedSeverity === 'all' || issue.severity === selectedSeverity;
    return typeMatch && severityMatch;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as IssueType | 'all')}
        >
          <option value="all">All Types</option>
          <option value="error">Errors</option>
          <option value="warning">Warnings</option>
          <option value="suggestion">Suggestions</option>
        </select>

        <select
          className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2"
          value={selectedSeverity}
          onChange={(e) => setSelectedSeverity(e.target.value as IssueSeverity | 'all')}
        >
          <option value="all">All Severities</option>
          <option value="critical">Critical</option>
          <option value="major">Major</option>
          <option value="minor">Minor</option>
        </select>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                File
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Line
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredIssues.map((issue) => {
              const Icon = issueTypeIcons[issue.type];
              return (
                <tr key={issue.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Icon className={`h-5 w-5 ${severityColors[issue.severity]}`} />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        {issue.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {issue.fileName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <p>{issue.description}</p>
                      {issue.suggestedFix && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Suggestion: {issue.suggestedFix}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {issue.lineNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                      Apply Fix
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}