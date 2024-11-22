export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      }
    });

    if (!response.ok) {
      const message = `Fetch failed with status ${response.status}: ${response.statusText}`;
      throw new Error(message);
    }

    // Handle cases where the response might be empty
    if (response.status === 204) {
      return {} as T; // Return an empty object for 204 No Content
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

