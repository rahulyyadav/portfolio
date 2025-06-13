import Link from "next/link";
import {
  UserCircleIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  LightBulbIcon,
  HeartIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Info", path: "/other", icon: UserCircleIcon },
  { name: "Resume", path: "/resume", icon: DocumentTextIcon },
  { name: "University", path: "/university", icon: AcademicCapIcon },
  { name: "Projects", path: "/Projects", icon: LightBulbIcon },
  { name: "Personal Life", path: "/personal", icon: HeartIcon },
  { name: "Address", path: "/address", icon: MapPinIcon },
];

export default function Navigation() {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className="group relative w-14 h-14 rounded-full border border-white/20 
                     flex items-center justify-center transition-all duration-300 overflow-hidden
                     hover:w-40 hover:rounded-[2rem] hover:border-white/60 hover:bg-[var(--nav-button-hover)]"
        >
          <item.icon
            className="w-6 h-6 text-white absolute left-4 transition-all duration-300
                               group-hover:left-3"
          />
          <span
            className="absolute left-12 opacity-0 transition-all duration-300 whitespace-nowrap
                          translate-x-4 group-hover:translate-x-0 group-hover:opacity-100"
          >
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}
