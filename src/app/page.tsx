'use client'
import { useState } from 'react'

// Don't change order!
const DATA = [
  { id: 'PADDING1', sign: '' },
  { id: 'clear', sign: 'CE' },
  { id: 'clearLast', sign: 'C' },
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
  { id: 'PADDING2', sign: '' },
  { id: 'zero', sign: '0' },
  { id: 'decimal', sign: '.' },
  { id: 'equals', sign: '=' },
]

export default function Home() {
  const [display, setDisplay] = useState<string>('0')

  const buttons = DATA.map((item) => (
    <button
      key={item.id}
      id={item.id}
      // Use different color for 'equals' sign
      // TODO add #333233 for operators
      className={`rounded-md hover:brightness-125 active:bg-red-500
      ${item.id == 'equals' ? 'bg-[#4dc2fe]' : 'bg-[#3a3a3b]'}`}
      onClick={handleClick}
    >
      {item.sign}
    </button>
  ))

  // Calculator Logic
  function handleClick(e: any) {
    const sign = e.target.innerText
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operators = ['+', '-', '*', '/']

    const displayLength = display.length as number
    const lastValue = display.at(-1) as string

    if (sign == 'CE') {
      return setDisplay('0')
    }

    if (sign == 'C') {
      if (display == '0') return
      if (display != '0' && displayLength == 1) return setDisplay('0')
      if (display != '0' && displayLength > 1) return setDisplay(display.slice(0, -1))
    }

    if (sign == '=') {
      let result = eval(display).toString()
      // If result have float with length bigger then 4 digits, cut off
      if (result.includes('.') && result.split('.')[1].length > 4) {
        result = Number.parseFloat(eval(result)).toFixed(4)
      }
      return setDisplay(result)
      // Calculate equation. Alternative stringMath https://github.com/devrafalko/string-math
    }

    if (sign == '.') {
      const regex = /[0-9]+\.[0-9]+$/g // Check if last value contain '.'
      if (display.match(regex)) return
      if (operators.includes(lastValue) || lastValue == '.') return
      return setDisplay(display + sign)
    }

    if (operators.includes(sign)) {
      if (sign == '-') return setDisplay(display + sign)
      if (display == '0') return setDisplay(sign)
      if (operators.includes(lastValue) || lastValue == '.') {
        if (operators.includes(display.at(-2)!)) {
          return setDisplay(display.slice(0, -2) + sign)
        }
        return setDisplay(display.slice(0, -1) + sign)
      }
      if (operators.includes(display)) return setDisplay(sign)
      if (displayLength >= 1) return setDisplay(display + sign)
    }

    if (numbers.includes(sign)) {
      if (display == '0') return setDisplay(sign)
      if (displayLength >= 1) return setDisplay(display + sign)
    }
  }

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] text-center">
      <header className="text-2xl m-8">JavaScript Calculator</header>

      <main className="flex flex-col items-center">
        <div className="min-w-[260px] max-w-[260px] h-96 bg-[#202121] rounded-md">
          <div id="display" className="w-full h-1/4 py-8 px-2 text-2xl text-right">
            {display}
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
