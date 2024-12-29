import React from 'react';
import ReviewResults from '../components/review/ReviewResults';

export default function Review() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Code Review Results
      </h1>
      <ReviewResults />
    </div>
  );
}