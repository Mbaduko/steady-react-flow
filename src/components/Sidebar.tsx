
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { mockData } from '@/data/mockData';

const Sidebar = () => {
  const { profile } = mockData;

  return (
    <div className="w-80 bg-slate-900 h-screen p-8 flex flex-col">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 mx-auto mb-6 flex items-center justify-center overflow-hidden">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-white text-2xl font-bold mb-2">{profile.name}</h2>
        <p className="text-gray-400 text-lg mb-1">{profile.title}</p>
        <p className="text-gray-500 text-sm">{profile.location}</p>
      </div>

      {/* Contact Section */}
      <div className="space-y-6">
        <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <Phone size={18} />
            <span className="text-sm">{profile.contact.phone}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-300">
            <Mail size={18} />
            <span className="text-sm">{profile.contact.email}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-300">
            <Github size={18} />
            <span className="text-sm">{profile.contact.github}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-300">
            <Linkedin size={18} />
            <span className="text-sm">{profile.contact.linkedin}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
