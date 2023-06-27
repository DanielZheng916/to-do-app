import Link from "next/link";


export default function Home() {
  return (
    <>
        <header className="flex justify-between mb-4 items-center">
            <h1 className="text-2xl">To Do</h1>
            <Link 
              href="/new"
              className="border border-slate-100 rounded-md px-2 py-1
              hover:bg-slate-500 focus-within:bg-slate-500 outline-none">
                New
            </Link>
        </header>
        <ul>

        </ul>
    </>
  )
}
