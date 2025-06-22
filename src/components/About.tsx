
import { mockData } from '@/data/mockData';

const About = () => {
  const { about } = mockData;

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {about.description}
        </p>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {about.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-slate-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* What I Can Do Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">What I Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-750 transition-colors">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
