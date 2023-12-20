import TicketList from "./TicketList";

function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h1>Tickets</h1>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            <TicketList/>
        </main>
    );
}

export default Tickets;