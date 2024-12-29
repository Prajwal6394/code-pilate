import React from 'react';
import SettingsForm from '../components/settings/SettingsForm';

export default function Settings() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Settings
      </h1>
      <SettingsForm />
    </div>
  );
}