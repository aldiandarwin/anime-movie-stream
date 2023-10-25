import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
  return (
    <div className="flex items-center justify-center max-w-xl min-h-screen mx-auto">
      <div className="flex flex-col items-center justify-center gap-4">
        <FileSearch size={44} className="bg-color-accent" />
        <h3 className="text-4xl font-bold text-color-accent">NOT FOUND</h3>
        <Link
          href="/"
          className="underline transition-all text-color-primary hover:text-color-accent"
        >
          kembali
        </Link>
      </div>
    </div>
  )
}

export default Page
