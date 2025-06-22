
import { Phone, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { mockData } from '@/data/mockData';

const Contact = () => {
  const { profile } = mockData;

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-400 mb-8">Let's connect and discuss opportunities to work together.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <Phone className="text-teal-400" size={20} />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">{profile.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <Mail className="text-teal-400" size={20} />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">{profile.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <MapPin className="text-teal-400" size={20} />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">{profile.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <Github className="text-teal-400" size={20} />
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400">{profile.contact.github}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-lg">
                <Linkedin className="text-teal-400" size={20} />
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400">{profile.contact.linkedin}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 focus:border-teal-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 focus:border-teal-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full p-3 bg-slate-700 text-white rounded border border-slate-600 focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
