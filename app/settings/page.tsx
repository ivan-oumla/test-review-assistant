'use client';

import { useState } from 'react';
import SettingsForm from '@/components/SettingsForm';
import { validateEmail, validateUrl } from '@/lib/validation';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    email: '',
    webhookUrl: '',
    notificationsEnabled: true,
    theme: 'light',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!validateEmail(settings.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (settings.webhookUrl && !validateUrl(settings.webhookUrl)) {
      newErrors.webhookUrl = 'Please enter a valid URL';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save settings (mock for now)
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

          <SettingsForm
            settings={settings}
            errors={errors}
            onChange={setSettings}
            onSubmit={handleSubmit}
          />

          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
