export default function manifest() {
  return {
    name: 'Krayansh',
    short_name: 'Krayansh',
    description: 'Software, hardware, IoT, embedded systems, cloud, and AI engineering services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6fafb',
    theme_color: '#0ea5a5',
    icons: [
      {
        src: '/tab-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
