const BASE_URL = "https://6a3734bbc105017aa638ceb3.mockapi.io/";

export const registerUser = async (email, password, name) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al registrar usuario");
  }
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(
    `${BASE_URL}/users?email=${encodeURIComponent(email)}`,
  );
  if (!response.ok) {
    throw new Error("Error al buscar usuario");
  }
  const users = await response.json();
  if (users.length === 0) {
    throw new Error("Usuario no encontrado");
  }
  const user = users[0];
  if (user.password !== password) {
    throw new Error("Contraseña incorrecta");
  }
  return user;
};

export const getSavedArticles = async (userId) => {
  const response = await fetch(`${BASE_URL}/saved-articles?userId=${userId}`);
  if (response.status === 404) {
    return [];
  }
  if (!response.ok) {
    throw new Error("Error al obtener artículos guardados");
  }
  return response.json();
};

export const saveArticle = async (userId, article) => {
  const allArticles = await getSavedArticles(userId);
  const exists = allArticles.some((saved) => saved.articleId === article.id);
  if (exists) {
    return allArticles.find((saved) => saved.articleId === article.id);
  }
  const response = await fetch(`${BASE_URL}/saved-articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      articleId: article.id,
      image: article.image || "",
      date: article.date || "",
      title: article.title || "",
      description: article.description || "",
      source: article.source || "",
      keyword: article.keyword || "",
    }),
  });
  if (!response.ok) {
    throw new Error("Error al guardar artículo");
  }
  return response.json();
};

export const deleteSavedArticle = async (savedArticleId) => {
  const response = await fetch(`${BASE_URL}/saved-articles/${savedArticleId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar artículo");
  }
  return response.json();
};
