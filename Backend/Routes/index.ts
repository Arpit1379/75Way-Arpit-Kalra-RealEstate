import  express from 'express';
const router = express.Router();
import  { ensureAuthenticated, forwardAuthenticated } from '../middleware/auth';

router.get('/', forwardAuthenticated, (req:any, res:any) => res.render('welcome'));

router.get('/', ensureAuthenticated, (req:any, res:any) =>
  res.redirect('/', {
    user: req.user
  })
);

export default router;