import express from 'express';
 const router = express.Router();
import { getAllNotes,getNoteById,createNote,updateNote,deleteNote } from '../controllers/notesController.js';



router.get('/',getAllNotes)
router.get('/:id',getNoteById)
router.post('/',createNote)
router.put('/:id',updateNote)
router.delete('/:id',deleteNote)

export default router;
// Z2J9VLQBlhyjRcoC
// 0
// wuttyee582_db_user