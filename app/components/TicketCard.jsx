import Link from "next/link";

function TicketCard({ticket}) {
    return (
        <Link href={`/tickets/${ticket.id}`}>
            <div className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </Link>
    );
}

export default TicketCard;