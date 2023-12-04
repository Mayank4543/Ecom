import { sampleprodduct } from "./data"


function App() {


  return (
    <>
      <header>
        <main>
          {sampleprodduct.map((product) => (
            <ul>
              <li key={product.slug}>
                {product.name}
              </li>
            </ul>
          ))}
        </main>
      </header>
    </>
  )
}

export default App
