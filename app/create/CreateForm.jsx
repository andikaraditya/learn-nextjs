"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

function CreateForm() {
    const router = useRouter()
    const [form, setForm] = useState({
        title: "",
        body: "",
        priority: "low",
        user_email: "mario@netninja.dev"
    })

    function inputHandler(e) {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch("http://localhost:4000/tickets", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            if (res.status === 201) {
                router.refresh()
                router.push("/tickets")
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [loading, setLoading] = useState(false)

    return (
        <form 
        onSubmit={handleSubmit}
        className="w-1/2">
            <label htmlFor="title">Title: </label>
            <input 
            onChange={inputHandler}
            type="text" name="title" id="title" />
            <label htmlFor="body">Body: </label>
            <input 
            onChange={inputHandler}
            type="text" name="body" id="body" />
            <label htmlFor="priority">Priority: </label>
            <select 
            onChange={inputHandler}
            defaultValue={form.priority}
            name="priority" id="priority">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
            <button
            disabled={loading}
            >
                {loading ? "Adding...": "Submit"}
            </button>
        </form>
    );
}

export default CreateForm;