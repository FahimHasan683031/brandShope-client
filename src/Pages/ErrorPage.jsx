import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="text-9xl font-extrabold text-purple-700 tracking-widest">404</h1>
                <div className="bg-white px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <a
                        className="relative inline-block text-sm font-medium text-purple-700 group active:text-purple-700 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-700 group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <Link to='/'>Go Home</Link>
                        </span>
                    </a>
                </button>
            </main>
        </div>
    );
};

export default ErrorPage;