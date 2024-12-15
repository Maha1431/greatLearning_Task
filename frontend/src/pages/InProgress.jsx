import { useSelector } from "react-redux";
import TaskBox from "../Components/TaskBox";

const InProgress = ({ progressCollapse }) => {
	const inProgress = useSelector((store) => store.task.inProgress);
	return (
		<div className="task-container">
			{inProgress?.map((task, index) => (
				<TaskBox
					key={index}
					task={task}
					progressCollapse={progressCollapse}
				/>
			))}
		</div>
	);
};

export default InProgress;