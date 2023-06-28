import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  // await prisma.todo.create({ data: {title:"Test", complete:false}})
  const todos = await prisma.todo.findMany()
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
      <ul className="pl-4">
        {/* {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))} */}
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo}/>
        ))}
      </ul>
    </>
  )
}
