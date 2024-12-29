import React from 'react';
import UploadArea from '../components/upload/UploadArea';

export default function Upload() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Upload Code for Review
      </h1>
      <UploadArea />
    </div>
  );
}