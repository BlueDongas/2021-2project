import { useState } from 'react'

const Main = () => {
  const [ color, setColor ] = useState('#000000');
  const onclick = async () => {
    const [tab] = await chrome.tabs.query({active: true});
    console.log(1)
    console.log(color)
    console.log(tab)
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color;
      }
    });
  }

  return (
    <>
      <div className="card">
        {/* <input type="color" onChange={(e) => setColor(e.currentTarget.value)}>{color}</input> */}
        <input type="color" onChange={(e) => setColor(e.currentTarget.value)}/>
        <button onClick={onclick}>Click Me</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Main
