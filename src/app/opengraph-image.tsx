import { ImageResponse } from 'next/og'

export const alt = 'Milos Dostanic, Senior Product Designer for complex B2B products and design systems'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          color: '#f2f5fa',
          background: '#06070b',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: '#8f98aa' }}>
          <span>Milos Dostanic</span>
          <span style={{ color: '#6c83ff' }}>Portfolio</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1020 }}>
          <div style={{ fontSize: 82, lineHeight: 0.98, letterSpacing: -4, fontWeight: 700 }}>
            I design complex B2B products teams can build.
          </div>
          <div style={{ marginTop: 32, fontSize: 25, color: '#aeb5c2' }}>
            Senior Product Designer · Design systems & complex B2B · Serbia / CET
          </div>
        </div>
      </div>
    ),
    size,
  )
}
