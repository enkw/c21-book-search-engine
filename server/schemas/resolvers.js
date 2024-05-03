const { User } = require('../models');
const { AuthenticationError } = require('apollo/server/express4');
const { signToken } = require('../utils/auth');

const resolvers = {};

module.exports = resolvers;