import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  type = "text",
  error,
  helpText,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 shadow-sm ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-400/50" : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/50"
        } ${props.disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white dark:bg-gray-800"}`}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400 animate-pulse">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}