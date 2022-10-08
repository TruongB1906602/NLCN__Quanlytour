const jwt = require('jsonwebtoken');
const user = require('../models/User');
const role = require('../models/Role');
const verifyToken = (req, res, next) => {
   const authHeader = req.headers.token;
   if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.JWT_SEC, (err, user) => {
         if (err) res.status(403).json('Token is not valid!');
         req.user = user;
         next();
      });
   } else {
      return res.status(401).json('You are not authenticated!');
   }
};

const verifyTokenAndAuthorization = (req, res, next) => {
   verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
         next();
      } else {
         res.status(403).json('You are not alowed to do that!');
      }
   });
};
const CheckRoleAdmin = (req, res, next) => {
   verifyToken(req, res, async () => {
      const user = await user.findById(req.user.id);
      const roleUser = await role.findById(user.roleId);

      if (roleUser.roleValue === 2) {
         next();
      } else {
         res.status(403).json('You are not alowed to do that!');
      }
   });
};
const CheckRoleCustomer = (req, res, next) => {
   verifyToken(req, res, async () => {
      const user = await user.findById(req.user.id);
      const roleUser = await role.findById(user.roleId);

      if (roleUser.roleValue === 1) {
         next();
      } else {
         res.status(403).json('You are not alowed to do that!');
      }
   });
};
const CheckRoleTourGuide = (req, res, next) => {
   verifyToken(req, res, async () => {
      const user = await user.findById(req.user.id);
      const roleUser = await role.findById(user.roleId);

      if (roleUser.roleValue === 2) {
         next();
      } else {
         res.status(403).json('You are not alowed to do that!');
      }
   });
};
module.exports = {
   verifyToken,
   verifyTokenAndAuthorization,
   CheckRoleAdmin,
   CheckRoleCustomer,
   CheckRoleTourGuide,
};
