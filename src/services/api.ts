const API_BASE_URL = 'https://user-backend-usjt.onrender.com/api';

// Type definitions
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

interface Content {
    _id: string;
    title: string;
    content: string;
    category: string;
    slug: string;
    order: number;
    published?: boolean;
}

// Fetch all content
export const getAllContent = async (published: string | null = null): Promise<ApiResponse<Content[]>> => {
    try {
        let url = `${API_BASE_URL}/content`;
        if (published !== null) {
            url += `?published=${published}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Fetch single content by ID
export const getContentById = async (id: string): Promise<ApiResponse<Content>> => {
    try {
        const response = await fetch(`${API_BASE_URL}/content/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};
