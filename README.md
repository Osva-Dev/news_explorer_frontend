# 📰 News Explorer - Frontend

Aplicación web para explorar noticias, guardar artículos favoritos y gestionar tu contenido personalizado. Desarrollada con React y Vite, integra la API de noticias de terceros (News API) para obtener información actualizada.

---

## 🚀 Características principales

- **Búsqueda de noticias**: Encuentra artículos por palabra clave utilizando la API de noticias.
- **Página de artículos guardados**: Visualiza, organiza y elimina tus artículos guardados.
- **Diseño responsive**: Adaptado a dispositivos móviles, tablets y escritorio según los diseños de Figma.
- **Interfaz moderna**: Construida con componentes reutilizables y metodología BEM apartir de un diseño de Figma.
- **Rutas dinámicas**: Navegación entre la página principal (`/`) y la página de artículos guardados (`/saved-news`).
- **Preloader y manejo de estados**: Carga, errores y mensajes de "No se encontró nada" gestionados con `useState` y `useEffect`.

---

## 🛠️ Tecnologías utilizadas

- **React 18** (con Hooks y componentes funcionales)
- **Vite** (entorno de desarrollo rápido)
- **React Router DOM** (enrutamiento)
- **CSS Modules / BEM** (estilos modulares)
- **Fetch API** (solicitudes a News API)
- **localStorage** (persistencia de sesión mock y artículos guardados)
- **News API** (consumo de noticias)

---

---

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/news-explorer-frontend.git
cd news-explorer-frontend
npm install
VITE_NEWS_API_KEY=tu_api_key_aqui (Nota: Obtén tu clave gratuita en News API)
npm run dev
```

## 📖 Uso

### Búsqueda de noticias

- Escribe una palabra clave en el campo de búsqueda y presiona **"Buscar"**.
- Los resultados se muestran en tarjetas con imagen, título, descripción, fuente y fecha.
- Si hay más de 3 resultados, aparece el botón **"Mostrar más"** que carga 3 adicionales cada vez hasta mostrar todos los resultados disponibles.
- Mientras se cargan los datos, se muestra un **preloader**.
- Si no se encuentran resultados, se muestra un mensaje personalizado con el texto: _"No se encontró nada"_.
- En caso de error en la API, se muestra un mensaje claro indicando el problema.

### Autenticación simulada (mock)

- Usuario predefinido: `test@test.com` / `123456`.
- Al iniciar sesión, se muestra el nombre del usuario y la interfaz cambia:
  - Aparece el enlace **"Artículos Guardados"** en el menú de navegación.
  - El botón **"Iniciar sesión"** se reemplaza por el nombre del usuario y un botón de **logout**.
- El login/registro se simula con `localStorage` (no hay backend real en esta versión).
- Al cerrar sesión, la interfaz vuelve al estado inicial (sin artículos guardados visibles).

### Página de artículos guardados

- Muestra un resumen con:
  - El nombre del usuario.
  - El número total de artículos guardados.
  - Las palabras clave asociadas a los artículos guardados (extraídas automáticamente).
- Las tarjetas incluyen:
  - La etiqueta de la palabra clave (arriba a la izquierda).
  - Un icono de eliminar (arriba a la derecha) que al hacer clic borra el artículo de la lista y del `localStorage`.
- Diseño idéntico al de la página principal (grid de 3 columnas en desktop, 2 en tablet y 1 en móvil).

### Modales interactivos

- Los modales de **Inicio de sesión** y **Registro** se abren al hacer clic en el botón correspondiente.
- Se cierran de las siguientes formas:
  - Haciendo clic en el botón de cierre (✕).
  - Haciendo clic fuera del modal (en el overlay).
  - Pulsando la tecla **Esc**.
- Los formularios incluyen validación de campos (campos obligatorios).
- Al registrarse, aparece un modal de éxito con el mensaje: _"¡El registro se ha completado con éxito!"_.

## 📱 Responsive

La aplicación se adapta a diferentes tamaños de pantalla:

- **Desktop (≥1280px)**: 3 columnas, padding lateral de 104px.
- **Tablet (768px – 1023px)**: 3 columnas, padding de 40px.
- **Móvil (≤767px)**: 1 columna, padding de 16px, menú hamburguesa en navegación.

## 📌 Mejoras futuras

- [ ] Conectar con backend real (autenticación JWT, guardado en base de datos).
- [ ] Paginación nativa de la API (en lugar de "Mostrar más" con slice).
- [ ] Pruebas unitarias con React Testing Library.
- [ ] Soporte para múltiples usuarios (registro real).
- [ ] Mejora en la accesibilidad (ARIA, etiquetas semánticas).
- [ ] Modo oscuro.

---

## 🙌 Créditos

- **Desarrollador**: Osvaldo Ochoa
- **Diseño**: Basado en el UI Kit de TripleTen (Figma)
- **API de noticias**: News API (newsapi.org)
- **Sitio Web**: [https://osva-dev.github.io/news_explorer_frontend/](https://osva-dev.github.io/news_explorer_frontend/)

---

## 📄 Licencia

Este proyecto es de uso educativo y no tiene licencia comercial.

---

¡Gracias por explorar News Explorer! ✨
