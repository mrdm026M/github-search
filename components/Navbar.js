import { VscGithubInverted } from "react-icons/vsc";
import Link from "next/link";

const navigation = [{ name: "Git Jobs", href: "#" }];

const Navbar = () => {
  return (
    <>
      <header className="px-16 py-6">
        <nav className="flex items-center justify-between px-8 py-2">
          <div>
            <Link href="/" passHref>
              <VscGithubInverted className="text-4xl" />
            </Link>
          </div>
          <div className="navbar">
            {navigation.map((items) => (
              <a
                key={items.name}
                href={items.href}
                className="px-6 py-2 text-lg font-medium border-2 border-gray-700 rounded-md hover:bg-gray-700 hover:text-white"
              >
                {items.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
