import { render, screen } from "@testing-library/react"
import App from "../App"

test("Menyapa Dims ada", () => {
    render(<App />)
    const text = screen.getByText("Hello Dims")
    expect(text).toBeInTheDocument()
})