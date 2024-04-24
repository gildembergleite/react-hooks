import { useState } from 'react'
import { useHexToRgba } from './hooks/useHexToRgba'

export default function App() {
  const { rgba, updateRgba } = useHexToRgba()

  const [hexColor, setHexColor] = useState('')
  const [opacity, setOpacity] = useState(1)

  return (
    <main className="flex w-full h-full min-h-screen justify-center items-center">
      <section className="flex flex-col gap-4">
        <div className="w-full text-center">
          <h1>Converter Cores Hex para RGBA</h1>
        </div>
        <div className="grid grid-cols-2">
          <label>Cor em hexadecimal:</label>
          <input
            type="text"
            value={hexColor}
            onChange={(e) => setHexColor(e.target.value)}
            className="border border-zinc-500"
          />
        </div>

        <div className="grid grid-cols-2">
          <label>Opacidade (0.1 - 1):</label>
          <input
            type="number"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="border border-zinc-500"
          />
        </div>

        <button
          onClick={() => updateRgba(hexColor, opacity)}
          className="w-full bg-sky-700 text-white py-2"
        >
          Converter cor
        </button>

        <div className="grid grid-cols-2">
          <label>Cor em RGBA:</label>
          {rgba ?? ''}
        </div>
      </section>
    </main>
  )
}
