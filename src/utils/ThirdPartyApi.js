const BASE_URL = "https://nomoreparties.co/news/v2";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

if (!API_KEY) {
  console.error(
    "Falta la clave de API. Asegúrate de tener un archivo .env con VITE_NEWS_API_KEY",
  );
}

export const getNews = async ({ keyword, from, to, pageSize = 100 }) => {
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(keyword)}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error en la solicitud a News API:", error);
    throw error;
  }
};
