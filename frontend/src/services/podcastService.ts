const API_BASE_URL = 'http://localhost:3000/api/v1/podcasts';

export const createAdminPodcast = async (podcastData: { title: string; description: string; duration: number; audioFile: string }) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(podcastData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create podcast');
    }

    return data;
  } catch (error) {
    console.error('Create podcast error:', error);
    throw error;
  }
};

export const getAllAdminPodcasts = async () => {
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
      throw new Error(data.message || 'Failed to fetch podcasts');
    }

    return data;
  } catch (error) {
    console.error('Get all podcasts error:', error);
    throw error;
  }
};

export const getAdminPodcastById = async (id: string) => {
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
      throw new Error(data.message || 'Failed to fetch podcast');
    }

    return data;
  } catch (error) {
    console.error('Get podcast by ID error:', error);
    throw error;
  }
};

export const updateAdminPodcast = async (id: string, podcastData: { title?: string; description?: string; duration?: number; audioFile?: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(podcastData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update podcast');
    }

    return data;
  } catch (error) {
    console.error('Update podcast error:', error);
    throw error;
  }
};

export const deleteAdminPodcast = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return { status: 'success', message: 'Podcast deleted successfully' };
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete podcast');
    }

    return data;
  } catch (error) {
    console.error('Delete podcast error:', error);
    throw error;
  }
};
