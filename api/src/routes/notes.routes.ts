import { Router } from "express";
import noteControllers from "../controllers/notes.controllers";

const router = Router();

router.get("/", noteControllers.getNotes); // Get user notes
router.put("/modify", noteControllers.modifyNote); // Modify user notes
router.put("/toggle", noteControllers.toggleNoteImportance); // Toggle importance user notes
router.delete("/delete", noteControllers.deleteNote); // Delete user notes
router.post("/create", noteControllers.createNote); // Create user notes

export default router;
