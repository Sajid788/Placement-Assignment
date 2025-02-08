import { useCallback, useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Modal from "../components/Model";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const fetchTasks = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:8080/api/tasks/mytasks",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Filter tasks based on search query and status filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && task.completed) ||
      (statusFilter === "pending" && !task.completed);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-[90%] m-auto mt-10">
      <div className="flex gap-4 justify-between items-center">
        
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 items-center">
          <h1 className="text-3xl md:text-xl font-bold">All Tasks</h1>

          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-neutral-500 lg:w-52 w-40 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1abc9c]"
          />

          {/* Status Filter Dropdown */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-neutral-500 focus:outline-none rounded-lg   focus:ring-2 focus:ring-[#1abc9c] transition-all  text-gray-700 cursor-pointer"
            >
              <option value="all">📋 All Tasks</option>
              <option value="completed">✅ Completed</option>
              <option value="pending">⏳ Pending</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2ECC71] text-white font-medium px-4 lg:py-1.5 py-2 hover:bg-[#6261fd] transition-all duration-700 lg:rounded-2xl rounded-md cursor-pointer"
        >
          Add a new Task
        </button>

      </div>

      <TaskList
        tasks={filteredTasks}
        fetchTasks={fetchTasks}
        onEdit={handleEditTask}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTask(null);
        }}
      >
        <TaskForm
          fetchTasks={fetchTasks}
          closeModal={() => setIsModalOpen(false)}
          task={selectedTask}
        />
      </Modal>
    </div>
  );
};

export default Tasks;
