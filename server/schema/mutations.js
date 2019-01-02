const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      // req (aka context) is the request object
      resolve(parentValue, { email, password }, req) {
        // email and password come from args (2nd param to resolve)
        return AuthService.signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
