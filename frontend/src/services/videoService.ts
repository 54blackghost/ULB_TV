const API_BASE_URL = 'http://localhost:3000/api/v1/videos';

export const createAdminVideo = async (videoData: { title: string; description: string; duration: number; videoUrl: string; thumbnail?: string }) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(videoData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create video');
    }

    return data;
  } catch (error) {
    console.error('Create video error:', error);
    throw error;
  }
};

export const getAllAdminVideos = async () => {
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
      throw new Error(data.message || 'Failed to fetch videos');
    }

    return data;
  } catch (error) {
    console.error('Get all videos error:', error);
    throw error;
  }
};

export const getAdminVideoById = async (id: string) => {
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
      throw new Error(data.message || 'Failed to fetch video');
    }

    return data;
  } catch (error) {
    console.error('Get video by ID error:', error);
    throw error;
  }
};

export const updateAdminVideo = async (id: string, videoData: { title?: string; description?: string; duration?: number; videoUrl?: string; thumbnail?: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(videoData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update video');
    }

    return data;
  } catch (error) {
    console.error('Update video error:', error);
    throw error;
  }
};

export const deleteAdminVideo = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return { status: 'success', message: 'Video deleted successfully' };
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete video');
    }

    return data;
  } catch (error) {
    console.error('Delete video error:', error);
    throw error;
  }
};
