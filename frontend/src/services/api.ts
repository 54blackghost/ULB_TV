const API_BASE_URL = 'http://localhost:3000/api/v1';

export const getAllArticles = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.articles;
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    throw error;
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${slug}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.article;
  } catch (error) {
    console.error(`Failed to fetch article with slug ${slug}:`, error);
    throw error;
  }
};

export const getAllPodcasts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/podcasts`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.podcasts;
  } catch (error) {
    console.error('Failed to fetch podcasts:', error);
    throw error;
  }
};

export const getPodcastBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/podcasts/${slug}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.podcast;
  } catch (error) {
    console.error(`Failed to fetch podcast with slug ${slug}:`, error);
    throw error;
  }
};

export const getAllVideos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.videos;
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    throw error;
  }
};

export const getVideoBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/videos/${slug}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.video;
  } catch (error) {
    console.error(`Failed to fetch video with slug ${slug}:`, error);
    throw error;
  }
};
