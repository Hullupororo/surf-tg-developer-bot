<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1QVvkS8-CqDZH9Jf37id82_AOXEirBPlb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Features

### Interactive World Map
- **Global Surf Destinations**: View all surf trip locations on an interactive world map
- **Custom Markers**: Each destination is marked with an animated surf pin
- **Click to Explore**: Click any marker to open a popup with trip details or open the full modal
- **Dark Theme**: Map uses a dark theme that matches the overall design aesthetic
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices

### Trip Cards & Modal
- Browse curated surf expeditions in a grid layout
- Click any trip card or map marker to view detailed information
- Smooth modal transitions with trip details, features, and booking form

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Leaflet** - Interactive maps
- **React-Leaflet** - React components for Leaflet
