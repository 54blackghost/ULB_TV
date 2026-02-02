import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug } from '../services/api';
import { BackendArticle } from '../components/types';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const ArticleDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BackendArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('Article slug is missing.');
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const fetchedArticle = await getArticleBySlug(slug);
        setArticle(fetchedArticle);
      } catch (err) {
        setError('Failed to fetch article. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center text-red-500">{error}</h1>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-center">Article non trouvé</h1>
      </div>
    );
  }

  return (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{article.title}</h1>
        <div className="flex items-center text-gray-600 mb-8 text-sm">
          <img
            src={`https://i.pravatar.cc/50?u=${article.author._id}`} // Placeholder avatar
            alt={article.author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Par {article.author.name}</span>
          <span className="mx-2">•</span>
          <span>
            Publié le{' '}
            {new Date(article.createdAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        {article.coverImage && (
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
          />
        )}

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}>
          {/* Article content will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;