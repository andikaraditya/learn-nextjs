import { Suspense } from "react";
import TicketCard from "../components/TicketCard";
import Loading from "../loading";

async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    
    const res = await fetch("http://localhost:4000/tickets", {
        next: {
            revalidate: 0
        }
    })
    return res.json()
}
async function Tickets() {
    const tickets = await fetchData()
    return (
        <main>
            <nav>
                <div>
                    <h1>Tickets</h1>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            {tickets.map((el) => {
                return (
                    <TicketCard 
                    ticket={el}
                    key={el.id}
                    />
                    )
                })}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets</p>
                )}
        </main>
    );
}

export default Tickets;