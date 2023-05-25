import { CreateEventButton, SmallCalendar, Label } from ".";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Label />
    </aside>
  );
};

export default Sidebar;
