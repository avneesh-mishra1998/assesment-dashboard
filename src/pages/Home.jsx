import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import Table from "../component/Table";
import Pagination from "../component/Pagination";

function Home() {
  return (
    <div className="mt-3 px-3">
      <div className="bg-white w-full rounded-md min-h-[calc(100vh-90px)] px-4 py-5">
        <div className="flex justify-between">
          <Link
            to="/add-user"
            className="border-2 flex items-center border-[#2148c0] text-[#2148c0] font-medium rounded-md px-2 md:px-5 py-1"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                />
              </svg>
            </span>
            Add New User
          </Link>
          <label className="border-2 flex items-center border-[#cccccc] rounded-md px-2 w-32 md:w-64">
            <span className="text-[#cccccc]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full placeholder:text-[#cccccc] bg-transparent border-none outline-none focus:border-none focus:outline-none py-1 cursor-pointer px-3 text-[#000]"
            />
          </label>
        </div>

        <div className="table-part shadow-sm overflow-x-auto overflow-y-hidden">
          {/* ================Table Part==================== */}
          <Table />
        </div>
        {/* ==================Pagination Part=============== */}
         <Pagination />
      </div>
    </div>
  );
}

export default Home;
