import React from "react";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center">
      {children}
    </main>
  );
};
