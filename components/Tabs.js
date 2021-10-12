import { useState } from "react";
import { Tab } from "@headlessui/react";
import RepoInput from "./Input/ReposInput";
import UserInput from "./Input/UserInput";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Repos: [
      {
        input: <RepoInput />,
      },
    ],
    Users: [
      {
        input: <UserInput />,
      },
    ],
  });

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 py-6">
      <Tab.Group>
        <Tab.List className="flex px-8 py-2 rounded-lg space-x-14 bg-gray-900/95">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full px-4 py-2 text-md leading-5 font-roboto font-medium text-white rounded-md",
                  selected
                    ? "bg-white shadow text-black"
                    : "hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="m-4">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              {posts.map((post, idx) => (
                <div
                  key={idx}
                  className="relative p-3 border-2 border-red-700 rounded-md"
                >
                  {post.input}
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
