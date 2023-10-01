'use client'

// Don't change order!
const DATA = [
  { id: 'PADDING', sign: '' },
  { id: 'PADDING', sign: '' },
  { id: 'clear', sign: 'CE' },
  { id: 'divide', sign: '/' },
  { id: 'seven', sign: '7' },
  { id: 'eight', sign: '8' },
  { id: 'nine', sign: '9' },
  { id: 'multiply', sign: '*' },
  { id: 'four', sign: '4' },
  { id: 'five', sign: '5' },
  { id: 'six', sign: '6' },
  { id: 'subtract', sign: '-' },
  { id: 'one', sign: '1' },
  { id: 'two', sign: '2' },
  { id: 'three', sign: '3' },
  { id: 'add', sign: '+' },
  { id: 'PADDING', sign: '' },
  { id: 'zero', sign: '0' },
  { id: 'decimal', sign: '.' },
  { id: 'equals', sign: '=' },
]

export default function Home() {
  const buttons = DATA.map((item) => (
    <button
      key={item.id}
      id={item.id}
      // Use different color for 'equals sign
      className={`rounded-md hover:brightness-125 active:bg-red-500
      ${item.id == 'equals' ? 'bg-[#4dc2fe]' : 'bg-[#3a3a3b]'}`}
    >
      {item.sign}
    </button>
  ))

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] text-center">
      <header className="text-2xl m-8">JavaScript Calculator</header>

      <main className="flex flex-col items-center">
        <div className="min-w-[260px] max-w-[260px] h-96 bg-[#202121] rounded-md">
          <div id="display" className="w-full h-1/4 py-8 px-2 text-2xl text-right">
            1234567890{' '}
          </div>

          <div id="buttons" className="w-full h-3/4 p-1 grid grid-cols-4 grid-rows-5 gap-1">
            {buttons}
          </div>
        </div>
      </main>

      <footer className="text-sm m-4">
        Made by <a href="https://github.com/webdev4422">webdev4422</a>
      </footer>

      <script defer src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
