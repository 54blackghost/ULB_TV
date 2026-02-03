import React, { useEffect, useState } from 'react';
import { getAllAdminArticles, deleteAdminArticle } from '../services/articleService';
import { Link } from 'react-router-dom';
import  {Article}  from '../components/types.js'; // Assuming Article type is defined

const AdminArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await getAllAdminArticles();
      setArticles(response.data.articles);
    } catch (err: unknown) { // Changed to unknown
      setError((err instanceof Error) ? err.message : 'Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteAdminArticle(id);
        fetchArticles(); // Refresh the list after deletion
      } catch (err: unknown) { // Changed to unknown
        alert((err instanceof Error) ? err.message : 'Failed to delete article');
      }
    }
  };

  if (loading) {
    return <div className="text-white">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] text-white">
      <h1 className="text-4xl font-bold mb-8">Manage Articles</h1>
      <Link to="/admin/articles/new" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Create New Article
      </Link>

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left border-b border-gray-700">Title</th>
                <th className="py-3 px-4 text-left border-b border-gray-700">Author</th>
                <th className="py-3 px-4 text-left border-b border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id} className="border-b border-gray-700 last:border-b-0">
                  <td className="py-3 px-4">{article.title}</td>
                  <td className="py-3 px-4">{article.author.name}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <Link to={`/admin/articles/edit/${article._id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1 px-3 rounded">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminArticles;
