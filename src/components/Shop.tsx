import { ReactNode } from "react"

export const Shop = ({ children }:{ children:ReactNode }) => {
  return (
    <section id="shop">
        <h2>모두를 위한 세련된 패션</h2>

        <ul id="products">
          {children}
        </ul>
    </section>
  )
}
