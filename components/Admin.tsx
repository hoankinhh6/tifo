import React, { useState, useEffect } from 'react';
import { SiteData } from '../data';

interface AdminProps {
  data: SiteData;
  setData: React.Dispatch<React.SetStateAction<SiteData>>;
}

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
        <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">{title}</h2>
        {children}
    </div>
);

const Field: React.FC<{ label: string, children: React.ReactNode }> = ({ label, children }) => (
    <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">{label}</label>
        {children}
    </div>
);

const Admin: React.FC<AdminProps> = ({ data, setData }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState<SiteData>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleChange = (path: string, value: any) => {
    setFormData(prev => {
        const keys = path.split('.');
        let current: any = prev;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        return { ...prev };
    });
  };
  
  const handleSave = () => {
    setData(formData);
    localStorage.setItem('siteData', JSON.stringify(formData));
    alert('Content saved successfully!');
  };

  const handleExport = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(formData, null, 2)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "siteData.json";
    link.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-white text-2xl mb-4">Admin Login</h1>
          <Field label="Username">
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </Field>
          <button type="submit" className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded mt-2">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Admin Panel</h1>
            <div className="flex gap-4">
                 <button onClick={handleSave} className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                </button>
                <button onClick={handleExport} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Export JSON
                </button>
            </div>
        </div>

        {/* Header Section */}
        <Section title="Header Navigation">
          {formData.header.navLinks.map((link, index) => (
            <div key={index} className="flex gap-2 mb-2 items-center">
              <input 
                type="text" 
                value={link.name}
                placeholder="Link Name"
                onChange={e => handleChange(`header.navLinks.${index}.name`, e.target.value)}
                className="flex-1 p-2 bg-gray-700 rounded"
              />
              <input 
                type="text" 
                value={link.href}
                placeholder="Link Href"
                onChange={e => handleChange(`header.navLinks.${index}.href`, e.target.value)}
                className="flex-1 p-2 bg-gray-700 rounded"
              />
            </div>
          ))}
        </Section>
        
        {/* Hero Section */}
        <Section title="Hero Section">
            <Field label="Title Line 1">
                <input type="text" value={formData.hero.titleLine1} onChange={e => handleChange('hero.titleLine1', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
            <Field label="Title Line 2 (Gradient Text)">
                <input type="text" value={formData.hero.titleLine2} onChange={e => handleChange('hero.titleLine2', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
            <Field label="Subtitle">
                <textarea value={formData.hero.subtitle} onChange={e => handleChange('hero.subtitle', e.target.value)} className="w-full p-2 bg-gray-700 rounded h-24" />
            </Field>
             <Field label="Video URL">
                <input type="text" value={formData.hero.videoUrl} onChange={e => handleChange('hero.videoUrl', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
        </Section>

        {/* Video Section */}
        <Section title="Video Section (How To)">
             <Field label="Title">
                <input type="text" value={formData.videoSection.title} onChange={e => handleChange('videoSection.title', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
            <Field label="Subtitle">
                <input type="text" value={formData.videoSection.subtitle} onChange={e => handleChange('videoSection.subtitle', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
             <Field label="Video URL (Vimeo)">
                <input type="text" value={formData.videoSection.videoUrl} onChange={e => handleChange('videoSection.videoUrl', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
        </Section>
        
        {/* Download Section */}
        <Section title="Download Links">
            <Field label="Title">
                <input type="text" value={formData.download.title} onChange={e => handleChange('download.title', e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
            </Field>
             {formData.download.downloads.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-2 mb-2">
                    <input type="text" value={item.os} onChange={e => handleChange(`download.downloads.${index}.os`, e.target.value)} className="w-full p-2 bg-gray-700 rounded" placeholder="OS Name" />
                    <input type="text" value={item.href} onChange={e => handleChange(`download.downloads.${index}.href`, e.target.value)} className="w-full p-2 bg-gray-700 rounded" placeholder="Download URL" />
                </div>
             ))}
        </Section>

        {/* Pricing Section */}
        <Section title="Pricing">
             {formData.pricing.plans.map((plan, index) => (
                <div key={index} className="bg-gray-700/50 p-4 rounded mb-4">
                    <h3 className="text-xl font-semibold mb-2">Plan {index + 1}</h3>
                     <Field label="Plan Name">
                        <input type="text" value={plan.plan} onChange={e => handleChange(`pricing.plans.${index}.plan`, e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
                    </Field>
                     <Field label="Price">
                        <input type="text" value={plan.price} onChange={e => handleChange(`pricing.plans.${index}.price`, e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
                    </Field>
                     <Field label="Description">
                        <input type="text" value={plan.description} onChange={e => handleChange(`pricing.plans.${index}.description`, e.target.value)} className="w-full p-2 bg-gray-700 rounded" />
                    </Field>
                     <Field label="Features (comma-separated)">
                        <input type="text" value={plan.features.join(',')} onChange={e => handleChange(`pricing.plans.${index}.features`, e.target.value.split(','))} className="w-full p-2 bg-gray-700 rounded" />
                    </Field>
                </div>
             ))}
        </Section>

      </div>
    </div>
  );
};

export default Admin;