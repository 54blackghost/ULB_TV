const API_BASE_URL = 'http://localhost:3000/api/v1/articles';

export const createAdminArticle = async (articleData: { title: string; content: string; coverImage?: string; videoUrl?: string }) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Assuming you have a way to get the auth token, e.g., from localStorage
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(articleData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create article');
    }

    return data;
  } catch (error) {
    console.error('Create article error:', error);
    throw error;
  }
};

export const getAllAdminArticles = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch articles');
    }

    return data;
  } catch (error) {
    console.error('Get all articles error:', error);
    throw error;
  }
};

export const getAdminArticleById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch article');
    }

    return data;
  } catch (error) {
    console.error('Get article by ID error:', error);
    throw error;
  }
};

export const updateAdminArticle = async (id: string, articleData: { title?: string; content?: string; coverImage?: string; videoUrl?: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(articleData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update article');
    }

    return data;
  } catch (error) {
    console.error('Update article error:', error);
    throw error;
  }
};

export const deleteAdminArticle = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    // For a 204 No Content response, data will be empty
    if (response.status === 204) {
      return { status: 'success', message: 'Article deleted successfully' };
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete article');
    }

    return data;
  } catch (error) {
    console.error('Delete article error:', error);
    throw error;
  }
};
