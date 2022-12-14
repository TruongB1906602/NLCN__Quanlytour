const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization, CheckRoleAdmin } = require('./verifyToken');

const router = require('express').Router();
const CryptoJS = require('crypto-js');
//UPDATE

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
   try {
      console.log(req.body);
      const updatedUser = await User.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
            // password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
         },
         { new: true },
      );
      res.status(200).json(updatedUser);
   } catch (err) {
      res.status(500).json(err);
   }
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
   try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted...');
   } catch (err) {
      res.status(500).json(err);
   }
});

//GET USER
router.get('/find/:id', CheckRoleAdmin, async (req, res) => {
   try {
      const user = await User.findById(req.params.id);

      const { password, ...others } = user._doc;
      res.status(200).json(others);
   } catch (err) {
      res.status(500).json(err);
   }
});

//GET ALL USER
router.get('/', CheckRoleAdmin, async (req, res) => {
   const query = req.query.new;
   try {
      const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
      res.status(200).json(users);
   } catch (err) {
      res.status(500).json(err);
   }
});
module.exports = router;
