import { Sidebar } from "./Sidebar";
import { AppBar } from "./AppBar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-foreground font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AppBar />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
