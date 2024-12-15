import { lazy, Suspense } from "react";
import { useSelector } from 'react-redux';
import Navbar from "./Navbar";
const Board = lazy(() => import("./Board.jsx"));
const Analytics = lazy(() => import("./Analytics.jsx"));
const Settings = lazy(() => import("./Settings.jsx"));
import "../css/Dashboard.css"
import {
	AddedPeople,
	AddPeople,
	Logout,
	TaskCard,
	TaskDelete,
	UpdateCategory,
} from "../Components/Model";

const Dashboard = () => {
  const state = useSelector((store) => store.state);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        {state.dashboardSection === "board" && <Board />}
        {state.dashboardSection === "analytics" && <Analytics />}
        {state.dashboardSection === "settings" && <Settings />}
      </Suspense>
      {state.addPeopleM && <AddPeople />}
      {state.addedPeopleM && <AddedPeople />}
      {state.logoutM && <Logout />}
      {state.taskDeleteM && <TaskDelete />}
      {state.taskCardM && <TaskCard />}
      {state.updateCategoryM && <UpdateCategory />}
    </>
  );
};

export default Dashboard;
