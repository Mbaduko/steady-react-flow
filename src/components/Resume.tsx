
import { mockData } from '@/data/mockData';

const Resume = () => {
  const { resume } = mockData;

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Resume</h1>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
          <div className="space-y-6">
            {resume.education.map((edu, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                <p className="text-gray-400 mb-1">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
          <div className="space-y-6">
            {resume.experience.map((exp, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                <p className="text-teal-400 mb-2">{exp.position}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💻</span>
                  <h3 className="text-white font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="block text-gray-400 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resume.languages.map((lang, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-white font-semibold flex items-center">
                  <span className="mr-2">🌐</span>
                  {lang.name}
                </h3>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resume.interests.map((interest, index) => (
              <div key={index} className="bg-slate-800 p-4 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🎯</span>
                <span className="text-white">{interest}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
