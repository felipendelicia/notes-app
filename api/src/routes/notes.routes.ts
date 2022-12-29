import { Router } from "express";
import noteControllers from "../controllers/notes.controllers";
import { ensureToken } from "../middlewares/ensureToken";

const router = Router();

router.post("/create", ensureToken, noteControllers.createNote); // Create user notes
router.put("/modify", noteControllers.modifyNote); // Modify user notes
router.put("/toggle", noteControllers.toggleNoteImportance); // Toggle importance user notes
router.delete("/delete", noteControllers.deleteNote); // Delete user notes
router.get("/", noteControllers.getNotes); // Get user notes

export default router;
