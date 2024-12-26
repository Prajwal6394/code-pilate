import React, { useState } from 'react';
import { Save } from 'lucide-react';
import type { UserPreferences } from '../../types';

const initialPreferences: UserPreferences = {
  languages: ['javascript', 'typescript', 'python'],
  theme: 'light',
  notifications: true
};

export default function SettingsForm() {
  const [preferences, setPreferences] = useState<UserPreferences>(initialPreferences);

  const handleLanguageToggle = (language: string) => {
    setPreferences((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save preferences logic here
    console.log('Saving preferences:', preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
          Language Preferences
        </h3>
        <div className="space-y-2">
          {['javascript', 'typescript', 'python', 'java', 'go', 'rust'].map((language) => (
            <label
              key={language}
              className="flex items-center space-x-3"
            >
              <input
                type="checkbox"
                checked={preferences.languages.includes(language)}
                onChange={() => handleLanguageToggle(language)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700 dark:text-gray-300 capitalize">
                {language}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
          Theme
        </h3>
        <div className="space-x-4">
          {['light', 'dark'].map((theme) => (
            <label key={theme} className="inline-flex items-center">
              <input
                type="radio"
                name="theme"
                value={theme}
                checked={preferences.theme === theme}
                onChange={(e) => setPreferences((prev) => ({
                  ...prev,
                  theme: e.target.value as 'light' | 'dark'
                }))}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300 capitalize">
                {theme}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
          Notifications
        </h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={(e) => setPreferences((prev) => ({
              ...prev,
              notifications: e.target.checked
            }))}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="text-gray-700 dark:text-gray-300">
            Enable notifications for review completions
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors"
      >
        <Save className="h-5 w-5" />
        Save Settings
      </button>
    </form>
  );
}