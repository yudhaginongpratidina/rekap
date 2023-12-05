import React from "react";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";
import Pesan from "./components/Pesan";

const Message = () => {
  return (
    <div>
      <HeaderAdmin />
      <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SidebarAdmin />

        <div
          id="main-content"
          class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <Pesan />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Message;
