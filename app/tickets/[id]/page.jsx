async function fetchData(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}

async function TicketDetail({params}) {
    const {id} = params
    const ticket = await fetchData(id)
    return (
        <main>
            <nav>
                <h1>Ticket Details</h1>
            </nav>
            <div className="card">
                <h2>{ticket.title}</h2>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    );
}

export default TicketDetail;