import { prisma } from "@/db";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { revalidatePath } from "next/cache";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("invalid title")
    }

    await prisma.todo.create({ data: { title, complete: false } })

    revalidatePath('/')
    redirect("/")
}

export default function Page() {
    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="title"
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 
                    outline-none focus-within:border-slate-100"
                />
                <div className="flex gap-1 justify-between">
                    <Link href="..">
                        Cancel
                    </Link>
                    <button type="submit"
                        className="border border-slate-100 rounded-md px-2 py-1
                        hover:bg-slate-500 focus-within:bg-slate-500 outline-none">
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}