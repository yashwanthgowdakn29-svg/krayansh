import { ImageResponse } from 'next/og';

export const alt = 'Krayansh software, hardware, IoT and AI engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#f6fafb',
          color: '#102332',
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: '#0ea5a5', marginBottom: 28 }}>
          KRAYANSH
        </div>
        <div style={{ fontSize: 66, lineHeight: 1.08, fontWeight: 800, maxWidth: 950 }}>
          Software, Hardware, IoT &amp; AI Engineering
        </div>
        <div style={{ fontSize: 28, color: '#5d7482', marginTop: 32 }}>
          Building reliable technology from code to circuit.
        </div>
      </div>
    ),
    size,
  );
}
