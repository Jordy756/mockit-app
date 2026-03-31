# Mockit

<div align="center">

![Mockit Logo](public/favicon.svg)

### Genera APIs REST mock en segundos

**Acelera tu desarrollo frontend sin esperar al backend**

[🚀 Ver Demo](http://mocktit-app-frontend-3nxh5g-612650-144-225-147-108.traefik.me/) • [🐛 Reportar Bug](https://github.com/Jordy756/mockit-app/issues)

[![Astro](https://img.shields.io/badge/Astro-6.1.1-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.2-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

</div>

---

## 🎯 ¿Qué es Mockit?

**Mockit** es una plataforma web que elimina la dependencia entre equipos de desarrollo frontend y backend. Simplemente pega una plantilla JSON y obtén instantáneamente una API REST completamente funcional con operaciones CRUD, paginación, filtrado y más.

### El Problema

- ⏸️ **Frontend bloqueado** esperando que las APIs del backend estén listas
- 🔄 **Datos mock poco realistas** que no reflejan casos de uso reales
- ⚙️ **Configuración compleja** de servidores mock locales
- 🔌 **Falta de persistencia** en soluciones mock tradicionales

### La Solución

✅ **Generación instantánea** de APIs funcionales en segundos  
✅ **Datos inteligentes** generados automáticamente desde descripciones  
✅ **CRUD completo** con GET, POST, PUT, PATCH, DELETE  
✅ **Persistencia real** en base de datos SQLite  
✅ **Sin configuración** - solo pega JSON y comienza a trabajar

---

## ✨ Características

### 🚀 Generación Inteligente de Datos

Mockit interpreta descripciones en lenguaje natural y genera datos realistas:

```json
{
  "id": "número",
  "name": "string entre 5 y 20 caracteres",
  "price": "número entre 10 y 999.99",
  "category": "de videojuegos",
  "email": "email",
  "createdAt": "fecha"
}
```

### 🔍 Capacidades de Consulta Avanzadas

- **Paginación**: `?page=1&limit=10`
- **Filtrado**: `?category=RPG&price=49.99`
- **Ordenamiento**: `?sortBy=price&order=asc`
- **Búsqueda**: Filtra por cualquier campo de tu plantilla

### 🎨 Interfaz Moderna y Minimalista

- Diseño limpio y profesional con Tailwind CSS 4
- Experiencia de usuario intuitiva
- Responsive design para todos los dispositivos
- Tipografía JetBrains Mono para código

### ⚡ Rendimiento Optimizado

- Construido con Astro 6 para máxima velocidad
- Archivos estáticos optimizados
- Carga instantánea de páginas
- Zero JavaScript por defecto (Islands Architecture)

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Astro** | 6.1.1 | Framework web moderno y ultra-rápido |
| **Tailwind CSS** | 4.2.2 | Framework CSS utility-first |
| **TypeScript** | 5.x | Tipado estático y seguridad de tipos |
| **Node.js** | ≥22.12.0 | Runtime de JavaScript |
| **pnpm** | 10.x | Gestor de paquetes eficiente |

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** ≥ 22.12.0
- **pnpm** ≥ 10.x

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Jordy756/mockit-app.git
cd mockit-app

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
```

### Configuración

Edita el archivo `.env`:

```env
PUBLIC_API_URL=http://localhost:3000/api
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo (puerto 4321)
pnpm dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Producción

```bash
# Construir para producción
pnpm build

# Previsualizar build de producción
pnpm preview
```

---

## 📁 Estructura del Proyecto

```
mockit-app/
├── public/              # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── icons/       # Iconos SVG
│   │   ├── layout/      # Componentes de layout
│   │   ├── sections/    # Secciones de página
│   │   └── ui/          # Componentes UI
│   ├── layouts/         # Layouts de Astro
│   ├── pages/           # Páginas (file-based routing)
│   │   └── index.astro  # Página principal
│   ├── scripts/         # Scripts del cliente
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

---

## 🎨 Componentes Principales

### Arquitectura de Componentes

```
Página Principal (index.astro)
  ├── Layout Principal
  │   ├── Header
  │   ├── Hero Section
  │   ├── Template Input Section
  │   │   └── JSON Editor
  │   ├── API Configuration
  │   │   └── Method Selector
  │   ├── Generated API Display
  │   │   └── URL & Documentation
  │   └── Footer
  └── Client Scripts (TypeScript)
      ├── Template Parser
      ├── API Client
      └── UI Handlers
```

### Características de los Componentes

- **Tipado completo** con TypeScript
- **Props validadas** con interfaces
- **Estilos modulares** con Tailwind CSS
- **Interactividad selectiva** con Astro Islands

---

## 🌐 Despliegue

### CubePath (Producción)

Este proyecto está desplegado en **CubePath** para el **Hackathon CubePath 2026**.

**Especificaciones del servidor:**
- VPS gp.micro (2 vCPU, 4 GB RAM, 80 GB SSD)
- URL pública automática vía Traefik
- Gestión de tráfico HTTP/HTTPS sin configuración manual

**Demo en vivo:** [http://mocktit-app-frontend-3nxh5g-612650-144-225-147-108.traefik.me/](http://mocktit-app-frontend-3nxh5g-612650-144-225-147-108.traefik.me/)

---

## 🧪 Desarrollo

### Scripts Disponibles

```bash
pnpm dev      # Servidor de desarrollo con hot-reload
pnpm build    # Build de producción optimizado
pnpm preview  # Previsualizar build localmente
pnpm astro    # CLI de Astro
```

### Convenciones de Código

- **TypeScript strict mode** habilitado
- **Componentes tipados** con interfaces
- **Tailwind CSS** para todos los estilos
- **Sin inline styles** - usar clases de Tailwind
- **Nombres descriptivos** para componentes y funciones

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar Mockit:

1. **Fork** el repositorio
2. Crea una **rama de feature**: `git checkout -b feature/nueva-caracteristica`
3. **Commit** tus cambios: `git commit -m "feat: agregar nueva característica"`
4. **Push** a la rama: `git push origin feature/nueva-caracteristica`
5. Abre un **Pull Request**

### Guías de Contribución

- Sigue las convenciones de código existentes
- Escribe código TypeScript tipado
- Usa Tailwind CSS para estilos
- Documenta funciones y componentes complejos
- Prueba tu código antes de hacer PR

---

## 👥 Equipo

Desarrollado con ❤️ para el **Hackathon CubePath 2026** por:

- **[@Jordy756](https://github.com/Jordy756)**
- **[@ErnestoVegaRodriguez](https://github.com/ErnestoVegaRodriguez)**
- **[@KennethTorres](https://github.com/KennethTorres)**

---

## 📄 Licencia

Este proyecto está bajo la licencia **ISC**. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🔗 Enlaces

- **Demo en Vivo**: [http://mocktit-app-frontend-3nxh5g-612650-144-225-147-108.traefik.me/](http://mocktit-app-frontend-3nxh5g-612650-144-225-147-108.traefik.me/)
- **Repositorio Backend**: [mockit-api](https://github.com/Jordy756/mockit-api)
- **Documentación Astro**: [astro.build/docs](https://astro.build)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)

---

<div align="center">

**Hecho con ❤️ para el Hackathon CubePath 2026 — desplegado en CubePath**

⭐ Si te gusta este proyecto, dale una estrella en GitHub

</div>