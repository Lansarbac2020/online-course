"use client";
import { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Globe, 
  Bell, 
  Shield, 
  User, 
  Mail, 
  Smartphone,
  ChevronRight,
  Save
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AccountSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
    marketing: false
  });

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
  ];

  const handleSaveSettings = () => {
    // Implement your save logic here
    console.log('Settings saved');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Paramètres du compte
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Gérez vos préférences et personnalisez votre expérience
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-8">
          {/* Appearance Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Apparence
              </h2>

              <div className="mt-6 space-y-6">
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isDarkMode ? 
                      <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : 
                      <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    }
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Mode sombre
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Ajustez le thème de l'interface
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={setIsDarkMode}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Language Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Langue et région
              </h2>

              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Langue de l'interface
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sélectionnez votre langue préférée
                    </p>
                  </div>
                  <Select
                    value={selectedLanguage}
                    onValueChange={setSelectedLanguage}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </h2>

              <div className="mt-6 space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {key === 'email' ? <Mail className="w-5 h-5" /> :
                       key === 'push' ? <Smartphone className="w-5 h-5" /> :
                       <Bell className="w-5 h-5" />}
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {key === 'email' ? 'Notifications par email' :
                           key === 'push' ? 'Notifications push' :
                           key === 'updates' ? 'Mises à jour du produit' :
                           'Communications marketing'}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {key === 'email' ? 'Recevez des notifications par email' :
                           key === 'push' ? 'Activez les notifications push' :
                           key === 'updates' ? 'Soyez informé des nouvelles fonctionnalités' :
                           'Recevez nos newsletters'}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({...prev, [key]: checked}))}
                      className="data-[state=checked]:bg-blue-600"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Accès rapides
              </h2>
              
              <div className="space-y-2">
                {[
                  { icon: User, label: 'Informations personnelles' },
                  { icon: Shield, label: 'Sécurité et connexion' },
                  { icon: Mail, label: 'Préférences de communication' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSaveSettings}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;