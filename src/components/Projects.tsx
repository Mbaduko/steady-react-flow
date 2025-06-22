
import { mockData } from '@/data/mockData';

const Projects = () => {
  const { projects } = mockData;
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-gray-400 mb-8">A selection of projects I've worked on, showcasing my skills and experience.</p>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-white text-6xl">📱</div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-750 transition-colors">
                <div className="flex items-center mb-3">
                  <span className="text-gray-400 mr-2">💻</span>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
