import { Router } from "express";
import noteControllers from "../controllers/notes.controllers";
import { ensureToken } from "../middlewares/ensureToken";

const router = Router();

router.post("/create", ensureToken, noteControllers.createNote); // Create user notes
router.put("/modify", ensureToken, noteControllers.modifyNote); // Modify user notes
router.put("/toggle", ensureToken, noteControllers.toggleNoteImportance); // Toggle importance user notes
router.delete("/delete", ensureToken, noteControllers.deleteNote); // Delete user notes
router.get("/", ensureToken, noteControllers.getNotes); // Get user notes

export default router;
