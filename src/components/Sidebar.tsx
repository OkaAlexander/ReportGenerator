import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const menuItems = [
  { name: "Academic Tracker", path: "/" },
  { name: "Admissions", path: "/admissions" },
  { name: "Fee Payment", path: "/fee-payment" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-card shadow-md h-screen overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">Menu</h1>
      </div>
      <nav className="mt-8">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "block px-4 py-2 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors",
                  location.pathname === item.path &&
                    "bg-secondary font-semibold text-primary"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
