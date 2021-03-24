import {Router} from 'express';

const router = Router();


router.get('/', (req,res) => {
    res.send({message:'use router'});
})

export default router;

