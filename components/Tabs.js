import { Tab } from "@headlessui/react";

const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab
          className={({ selected }) =>
            selected ? "bg-blue-500 text-white" : "bg-white text-black"
          }
        >
          Repos
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? "bg-blue-500 text-white" : "bg-white text-black"
          }
        >
          Users
        </Tab>
        <Tab
          className={({ selected }) =>
            selected ? "bg-blue-500 text-white" : "bg-white text-black"
          }
        >
          Languages
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
