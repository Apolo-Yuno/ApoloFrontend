# Apolo Frontend - Yuno

A modern, high-performance Merchant Dashboard and CRM application built for Yuno. This application allows efficient management of merchant profiles, interaction tracking, and CRM analytics.

<div align="center">
  <img src="/vite.svg" alt="Apolo Logo" width="100" />
</div>

## 🚀 Key Features

*   **Merchant View**: Real-time "Live Profile" of merchants.
*   **Interaction Timeline**: Unified chronological log of communications (Slack, Email, Audio, Contracts).
*   **Audio Simulation**: Built-in capability to simulate incoming audio calls and webhooks.
*   **CRM Dashboard**: Detailed analytics including Account Segmentation, Stakeholders, Usage Trends, and Sentiment Analysis.
*   **Smart Summary**: AI-driven context summaries for quick insights.
*   **Responsive Design**: Built with Tailwind CSS for a seamless experience across devices.

## 🛠️ Tech Stack

*   **Core**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   **Language**: JavaScript / JSX
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **Utilities**:
    *   `jspdf` for document generation.
    *   `@react-google-maps/api` for map integrations.

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Apolo-Yuno/ApoloFrontend.git
    cd ApoloFrontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173` (by default).

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (Images, Global README)
├── components/      # Reusable UI components
│   ├── crm/         # CRM specific widgets
│   ├── dashboard/   # Merchant Dashboard components
│   ├── layout/      # Sidebar, Layout wrappers
│   └── timeline/    # Interaction Feed & Input
├── context/         # Global State (MerchantContext)
├── pages/           # Main Route Pages (MerchantPage, CRMPage)
├── services/        # API integration (mocks/real)
└── main.jsx         # Entry point
```

## 🎨 Design System

The application uses a "Dark Mode" first aesthetic (`bg-background-dark`), featuring:
*   **Primary Color**: Purple/Indigo palette.
*   **Surface Colors**: Deep greys/blacks for cards and containers.
*   **Typography**: Modern sans-serif font stack.

---
### Stack Tecnológico
- **Core**: React 18, Vite.
- **Estilos**: Tailwind CSS (con configuración personalizada de colores y fuentes).
- **Rutas**: React Router 7.
- **Estado**: Context API (`MerchantContext`).
- **Iconos**: Material Symbols Outlined.

## 3. Gestión de Estado (`MerchantContext`)

El corazón de la aplicación es `MerchantContext.jsx`. Este contexto maneja:

1.  **Datos del Merchant**: Información estática y dinámica del cliente (Nombre, ID, Estado, Resumen IA).
2.  **Historial de Interacciones**: Lista cronológica de todos los eventos (Mensajes, Llamadas, Emails).
3.  **Lógica de "Ingesta"**: La función `handleIngest` centraliza la lógica para procesar nuevas interacciones, ya sean de texto o archivos (audio).
4.  **Feedback Simulado**: Muestra actualizaciones optimistas en la UI mientras procesa datos.

---

## 4. Componentes Principales

### 4.1Vista de CRM (`/crm`)
Una vista analítica compuesta por widgets modulares:
- **SegmentationCard**: Segmentación rápida (VIP, Sector).
- **StakeholdersCard**: Lista de tomadores de decisiones.
- **TrendsCard**: Gráfico de barras simple para tendencias de uso.
- **SentimentCard**: Análisis de sentimiento (NPS, CSAT).

### 4.2 Vista de Merchant (`/`)
La vista operativa diaria, dividida en dos columnas:

#### Columna Izquierda: Comunicación
- **InteractionFeed**: Muestra el historial. Usa `TimelineCard` para renderizar diferentes tipos de eventos (Llamadas, Notas, Sistema) con estilos visuales distintos.
- **InteractionInput**: Área de entrada compleja.
    - Soporta múltiples canales: Nota, Email, Audio, Contrato.
    - **Simulación de Audio**: Permite simular una llamada entrante (`webhooks`) usando un archivo de demo (`demoAudio.mp3`).
    - **Carga Manual**: Si se selecciona el canal "Audio", permite subir archivos `.mp3` manualmente.

#### Columna Derecha: Dashboard "Vivo"
- **MerchantHeader**: Muestra el estado del ciclo de vida (Sales -> Integration -> Live).
- **SmartSummary**: Tarjeta con un resumen generado por IA, alertas de riesgo y datos contextuales (Países, Métodos de pago).
- **ConfigMap**: Visualización de la configuración global del merchant.

---

## 5. Flujos Clave

### 5.1 Simulación de Llamada Entrante
1.  El usuario hace clic en "Simulate Webhook" en `InteractionInput`.
2.  El sistema descarga internamente `demoAudio.mp3` desde la carpeta `public`.
3.  Se crea un objeto `File` javascript.
4.  Se invoca `handleIngest(file, 'CALL')`.
5.  El sistema muestra un estado de "Receiving..." y actualiza el feed con una entrada de llamada.

### 5.2 Subida Manual de Audio
1.  El usuario selecciona "Audio" en el menú desplegable.
2.  Aparece un input de archivo.
3.  El usuario selecciona un archivo y envía.
4.  El sistema detecta el archivo y lo envía a través de `handleIngest`.

---

## 6. Integración con Backend (`api.js`)

La capa de servicios (`src/services/api.js`) define los métodos para conectar con el backend (endpoint `/api` proxy configurado en `vite.config.js`).

- `ingestText(text, type, ...)`: Envía notas y textos.
- `ingestAudio(file)`: Envía archivos de audio mediante `FormData`.
- `getMerchantData(id)`: Recupera la información inicial.

---

## 7. Estilos y Diseño

El proyecto utiliza un sistema de diseño "Dark Mode" con paletas de colores semánticos:
- **Fondos**: `#141118` (Background Dark), Surface Dark/Light.
- **Primario**: Violeta/Índigo.
- **Alertas**: Rojo (Riesgos), Verde (Éxito sistema), Naranja (Llamadas).

Las animaciones y transiciones se manejan con clases de utilidad de Tailwind (`transition-all`, `hover:scale`, etc.) y keyframes personalizados en `index.css`.
