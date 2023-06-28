type TodoItemProps = {
    title: string
    id: string
    complete: boolean
}

export function TodoItem({title, id, complete}: TodoItemProps) {
    return (
        <li className="flex gap-1 items-center">
            <input id={id} type="checkbox" className="cursor-pointer peer"/>
            <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">
                {title}
            </label>
        </li>
    )
}