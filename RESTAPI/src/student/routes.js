import { express, Router } from 'express';
import getStudents from './controller';
const router = Router.express();

router.get('/', getStudents);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${precess.env.PORT}`);
});

module.exports = router;
