import React from "react";
import userData from "./Data";

function Table() {
  return (
    // ===================Table Start==============================
    <table className="w-full mt-4">
      <thead>
        <tr className="">
          <th className=" py-3 pr-[20px] text-[#6C757D] whitespace-nowrap text-end border-r  border-gray-200  text-[14px] font-semibold max-w-[20px] w-[5%] rounded-s-sm min-w-[20px]">
            #
          </th>
          <th className=" text-[#6C757D] whitespace-nowrap py-3 pl-2 border-r border-gray-200 text-[14px] font-semibold w-[20%] min-w-[130px] max-w-[130px] text-left">
            <div className="flex justify-between pl-5 pr-2">
              Full Name{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"
                  />
                </svg>
              </span>
            </div>
          </th>
          <th className=" text-[#6C757D] py-3 pl-2 whitespace-nowrap border-r border-gray-200 text-[14px] font-semibold text-left w-[15%] min-w-[100px]">
            <div className="flex justify-between pl-5 pr-2">
              Phone{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"
                  />
                </svg>
              </span>
            </div>
          </th>
          <th className=" text-[#6C757D] pl-2 whitespace-nowrap py-3 border-r border-gray-200 text-[14px] font-semibold text-left w-[25%] min-w-[130px]">
            <div className="flex justify-between pl-5 pr-2">
              Email{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"
                  />
                </svg>
              </span>
            </div>
          </th>
          <th className=" text-[#6C757D] whitespace-nowrap pl-2 py-3 border-r border-gray-200 text-[14px] font-semibold text-left w-[15%] min-w-[100px]">
            <div className="flex justify-between  pl-5 pr-2">
              Created Date{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"
                  />
                </svg>
              </span>
            </div>
          </th>
          <th className=" text-[#6C757D] whitespace-nowrap pl-2 py-3 text-[14px] font-semibold text-left w-[20%] min-w-[160px]"></th>
        </tr>
      </thead>
      <tbody>
        {/* Table Row Start */}
        {userData.map((item, key) => (
          <tr>
            <td className="text-center  border-r  border-gray-200 pl-2">
              <div className="pl-5 pr-2 border-t h-full  border-gray-200 py-4 min-h-[58.4px] text-[#535556] custom-bg">
                {item.id}
              </div>
            </td>
            <td className=" border-r   border-gray-200 pl-2">
              <div className="pl-5 pr-2 py-4   border-t  border-gray-200 text-[#535556] min-h-[58.4px] custom-bg">
                {item.name}
              </div>
            </td>
            <td className=" border-r  border-gray-200 pl-2">
              <div className="pl-5 pr-2 border-t  border-gray-200 py-4 text-[#535556] min-h-[58.4px] bg-[#F8F9FA]">
                {item.phone}
              </div>
            </td>
            <td className=" border-r   border-gray-200 pl-2">
              <div className="pl-5 pr-2 border-t  border-gray-200 py-4 text-[#535556] min-h-[58.4px] custom-bg">
                {item.email}
              </div>
            </td>
            <td className=" border-r   border-gray-200 pl-2">
              <div className="pl-5 pr-2 border-t  border-gray-200 py-4 text-[#535556] min-h-[58.4px] custom-bg">
                {item.date}
              </div>
            </td>
            <td className=" border-r   border-gray-200 pl-2">
              <div className="pl-5 pr-2 border-t flex justify-center gap-x-2  border-gray-200 py-3 text-[#535556] custom-bg">
                <button className="bg-white py-1 px-2 rounded-md border border-gray-300">
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
                      stroke-width="1.5"
                      d="M6 18L18 6m0 0H9m9 0v9"
                    />
                  </svg>
                </button>
                <button className="bg-white py-1 px-2 rounded-md border border-gray-300">
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
                      d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8"
                    />
                  </svg>
                </button>
                <button className="bg-white py-1 px-2 rounded-md border border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
       {/* Table Row End */}
      </tbody>
    </table>
    // ===================Table ENd================================
  );
}

export default Table;
