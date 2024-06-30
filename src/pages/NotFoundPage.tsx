import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-2">404 - Not Found</h1>
      <a href="/tasks" className="p-2 bg-blue-500 text-white rounded">
        Go to Tasks
      </a>
    </div>
  );
};

export default NotFoundPage;
