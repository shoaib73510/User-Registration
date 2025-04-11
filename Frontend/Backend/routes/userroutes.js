import express from "express"
import { CreateUser , getAllUsers , getUserById ,updateUser, deleteUser} from "../controllers/usercontrollers.js"

const router = express.Router()

router.post("/",CreateUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);

router.post("/",CreateUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;