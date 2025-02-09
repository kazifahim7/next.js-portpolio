import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Oops! The page you&apos;re looking for doesn&#39;t exist.</p>
            <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
