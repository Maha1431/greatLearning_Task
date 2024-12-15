import { useEffect } from "react";
import { toast } from "react-toastify";
import config from "../config";
const useGetTask = (id, setTask) => {
	const getTask = () => {
		fetch(`${config.BACKENDURL}/api/task/${id}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((json) => {
				if (json?.message === "success") {
					setTask(json.data);
				} else {
					toast.error("Something went wrong");
					setTask(null);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error("Something went wrong");
			});
	};
	useEffect(() => {
		getTask();
	}, []);
};

export default useGetTask;