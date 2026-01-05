interface Content {
    _id: string;
    title: string;
    content: string;
    category: string;
    slug: string;
    order: number;
    published?: boolean;
}

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export function getAllContent(published?: string | null): Promise<ApiResponse<Content[]>>;
export function getContentById(id: string): Promise<ApiResponse<Content>>;
