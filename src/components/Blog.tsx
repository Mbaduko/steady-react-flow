
import { mockData } from '@/data/mockData';

const Blog = () => {
  const { blog } = mockData;

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-400 mb-8">Explore my thoughts on software development, technology trends, and personal insights.</p>

        <div className="space-y-8">
          {blog.map((post) => (
            <article key={post.id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-white text-xl font-semibold mb-2 hover:text-teal-400 cursor-pointer transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                {post.featured && (
                  <div className="ml-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">📖</span>
                    </div>
                  </div>
                )}
              </div>
              <button className="bg-slate-700 text-gray-300 px-4 py-2 rounded hover:bg-slate-600 transition-colors text-sm">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
