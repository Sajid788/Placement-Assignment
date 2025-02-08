import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface TaskFormProps {
  task: { _id: string; title: string; description: string } | null | undefined;
  fetchTasks: () => void;
  closeModal: () => void;
}

const TaskForm = ({ fetchTasks, closeModal, task }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [task]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const payload = {
      title,
      description,
    };

    setLoading(true);

    try {
      if (task) {
        const response = await axios.put(
          `http://localhost:8080/api/tasks/update/${task._id}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success(response.data.message);
      } else {
        const response = await axios.post(
          "http://localhost:8080/api/tasks/create",
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success(response.data.message);
      }

      fetchTasks();
      closeModal();
    } catch {
      toast.error("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-5">
        {task ? "Update Task" : "Create New Task"}
      </h2>
      <div>
        <label className="block text-gray-600 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 p-2 text-white font-medium rounded-md ${
          loading ? "bg-[#1abc9c] cursor-not-allowed" : "bg-[#2ECC71] hover:bg-[#1abc9c]"
        }`}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 108 8h-4l3 3 3-3h-4a8 8 0 01-8 8z"
            ></path>
          </svg>
        )}
        {loading ? (task ? "Updating..." : "Creating...") : task ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default TaskForm;
