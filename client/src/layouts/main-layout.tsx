import { Header, } from "../components"
import type React from "react"

type MainLayoutProps = {
  children: React.ReactNode
}

const Mainlayout = ({ children }: MainLayoutProps) => {
  return (
    <main>
      { }
      <div className="sticky top-0 z-50">
        <Header />
        {/* </div> */}
      </div>
      {children}
    </main>
  )
}

export default Mainlayout