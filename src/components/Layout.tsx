import React from "react";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
  main: React.ReactNode;
}
function Layout({ left, main, right }: Props) {
  return (
    <div className="flex flex-col h-screen bg-red-500">
      <aside className="h-full">{left}</aside>
      <main className="flex-1"> {main} </main>
      <aside>{right}</aside>
    </div>
  );
}

export default Layout;
