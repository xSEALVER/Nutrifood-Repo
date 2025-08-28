import { Link } from "react-router-dom";
import { Calendar, ScanLine } from "lucide-react";

function NavbarPost() {
  return (
    <nav className="bg-white shadow">
      <ul className="flex justify-between items-center px-8 py-4">
        {/* Left-aligned logo or brand name */}
        <li className="text-gray-800 text-lg">
          <Link className="text-3xl">
            Today
          </Link>
        </li>


        {/* Right-aligned authentication links */}
        <div className="flex space-x-6">
          <div className="flex space-x-8">
            <li>
              <Link
                to="/journal"
                className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition"
              >
                <Calendar size={48} />
              </Link>
            </li>
            <li>
              <Link
                to="/scan"
                className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition"
              >
                <ScanLine size={48} />
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavbarPost;
