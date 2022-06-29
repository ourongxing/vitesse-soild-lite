import "@unocss/reset/tailwind.css"
import "~/styles/main.css"
import "uno.css"
import App from "./App"

render(
  () => (
    <>
      <Router>
        <App />
      </Router>
    </>
  ),
  document.getElementById("root")!
)
