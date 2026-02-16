interface SettingsFormProps {
  settings: {
    email: string;
    webhookUrl: string;
    notificationsEnabled: boolean;
    theme: string;
  };
  errors: Record<string, string>;
  onChange: (settings: any) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SettingsForm({
  settings,
  errors,
  onChange,
  onSubmit,
}: SettingsFormProps) {
  const handleChange = (field: string, value: any) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={settings.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-700 mb-2">
          Webhook URL (Optional)
        </label>
        <input
          type="text"
          id="webhookUrl"
          value={settings.webhookUrl}
          onChange={(e) => handleChange('webhookUrl', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.webhookUrl ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="https://your-webhook.com/endpoint"
        />
        {errors.webhookUrl && (
          <p className="mt-1 text-sm text-red-600">{errors.webhookUrl}</p>
        )}
      </div>

      <div>
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
          Theme
        </label>
        <select
          id="theme"
          value={settings.theme}
          onChange={(e) => handleChange('theme', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="notifications"
          checked={settings.notificationsEnabled}
          onChange={(e) => handleChange('notificationsEnabled', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
          Enable email notifications
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Settings
        </button>
        <button
          type="button"
          onClick={() => onChange({
            email: '',
            webhookUrl: '',
            notificationsEnabled: true,
            theme: 'light',
          })}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
