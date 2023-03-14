import { Link } from "react-router-dom";

export default function HeaderLogin() {
  return (
    <>
      <header className=" lg:px-[150px] sm:px-2 bg-red-600 flex">
        <div className="grid lg:grid-cols-12 lg:gap-4 sm:grid-cols-5 w-full">
          <div className="lg:col-span-2 sm:col-span-1">
            <Link to={"/"} className="outline-none">
              <i className="inline-block bg-ficon bg-repeat w-[160px] h-[48px]"></i>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
