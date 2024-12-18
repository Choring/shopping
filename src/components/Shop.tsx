import { ReactNode } from "react"

export const Shop = ({ children }:{ children:ReactNode }) => {
  return (
    <section id="shop">
        <h2 className="pb-4 font-bold">모두를 위한 세련된 패션</h2>
        <ul id="products">
          {children}
        </ul>
    </section>
  )
}
