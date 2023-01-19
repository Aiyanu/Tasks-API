import {Router} from "express"
import { addTask, deleteTask, getAllTasks, getSingleTask, updateTask,editTask } from "../controllers/tasksController";

const router = Router();

router.route("/").get(getAllTasks).post(addTask)
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask).put(editTask)

export default router