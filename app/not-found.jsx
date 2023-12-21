import Link from "next/link";

function NotFound() {
    return (
        <main className="text-center">
            <h1 className="text-4xl">Page Not Found</h1>
            <p className="text-9xl">404</p>
            <p>We cannot find the page you were looking for</p>
            <Link href="/" className="text-blue-700 underline">back to dashboard</Link>
        </main>
    );
}

export default NotFound;