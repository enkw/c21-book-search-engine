// Referenced https://www.apollographql.com/tutorials/side-quest-intermediate-schema-design/03-the-input-type
// to learn how to take in user input for the book search
const typeDefs = `
 type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
 }

 type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
 }

 type Query {
    me: User
 }

 input BookSearch {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
 }

 type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: BookSearch!): User
    removeBook(bookId: ID!): User
 }

 type Auth {
    token: ID!
    user: User
 }
`;

module.exports = typeDefs;