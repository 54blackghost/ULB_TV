import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../services/api';
import { BackendArticle } from '../components/types';
import BlurCircle from '../components/BlurCircle';
import ArticleCard from '../components/ArticleCard';
import Loading from '../components/Loading';

const Article = () => {
  const [articles, setArticles] = useState<BackendArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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

  return articles.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44 overflow-hidden min-h[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link to={`/blog/${article.slug}`} key={article._id}>
            <ArticleCard
              title={article.title}
              excerpt={article.content.substring(0, 150) + '...'}
              author={{
                name: article.author.name,
                avatar: `https://i.pravatar.cc/150?u=${article.author._id}`, // Placeholder avatar
              }}
              publishedAt={new Date(article.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              readTime="5 min de lecture" // Placeholder
              views={1000} // Placeholder
              likes={150} // Placeholder
              category="Tech" // Placeholder
              vote_average="7.5" // Placeholder
              image={article.coverImage} // Assuming coverImage is a full URL or mappable to one
            />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">Aucun Blog disponible</h1>
    </div>
  );
};

export default Article;
