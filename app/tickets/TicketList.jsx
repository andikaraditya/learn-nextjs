async function fetchData() {
    const res = await fetch("http://localhost:4000/tickets", {
        next: {
            revalidate: 0
        }
    })
    console.log(res)
    return res.json()
}

async function TicketList() {

    const tickets = await fetchData()
    return (
        <>
            {tickets.map((el) => {
                return (
                    <div
                        key={el.id}
                        className="card my-5"
                    >
                        <h3>{el.title}</h3>
                        <p>{el.body.slice(0, 200)}...</p>
                        <div className={`pill ${el.priority}`}>
                            {el.priority} priority
                        </div>
                    </div>
                )
            })}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets</p>
            )}
        </>
    );
}

export default TicketList;