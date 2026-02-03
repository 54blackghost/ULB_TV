import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createAdminArticle, getAdminArticleById, updateAdminArticle } from '../services/articleService';
import { Article } from '../components/types'; // Assuming Article type is defined
import toast from 'react-hot-toast'; // Assuming react-hot-toast is available

interface ArticleFormProps {
  isEditing?: boolean;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ isEditing = false }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (isEditing && id) {
      const fetchArticle = async () => {
        setLoading(true);
        try {
          const response = await getAdminArticleById(id);
          const article: Article = response.data.article;
          setTitle(article.title);
          setContent(article.content);
          setCoverImage(article.coverImage || '');
          setVideoUrl(article.videoUrl || '');
        } catch (err: unknown) {
          const errorMessage = (err instanceof Error) ? err.message : 'Failed to fetch article for editing';
          setError(errorMessage);
          toast.error(errorMessage);
        } finally {
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [isEditing, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const articleData = { title, content, coverImage, videoUrl };

    try {
      if (isEditing && id) {
        await updateAdminArticle(id, articleData);
        toast.success('Article updated successfully!');
      } else {
        await createAdminArticle(articleData);
        toast.success('Article created successfully!');
      }
      navigate('/admin/articles');
    } catch (err: unknown) {
      const errorMessage = (err instanceof Error) ? err.message : 'Failed to save article';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[url('/logo.png')] bg-cover bg-center overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="sm:w-87.5 w-full text-center bg-gray-900 border border-gray-800 rounded-2xl px-8 py-8 z-10"
      >
        <h1 className="text-white text-3xl mt-2 font-medium">
          {isEditing ? 'Edit Article' : 'Create New Article'}
        </h1>

        {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

        <div className="flex flex-col gap-4 mt-6"> {/* Use flex-col and gap for vertical spacing */}
          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="title"
              placeholder="Article Title"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex items-start w-full bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden pl-6 py-3 gap-2"> {/* Adjust height for textarea */}
            <textarea
              name="content"
              placeholder="Article Content"
              rows={6} // Adjust rows for better appearance
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none resize-none" // resize-none to prevent manual resizing
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="coverImage"
              placeholder="Cover Image URL"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>

          <div className="flex items-center w-full bg-gray-800 border border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              name="videoUrl"
              placeholder="YouTube Video URL"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Article'}
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
