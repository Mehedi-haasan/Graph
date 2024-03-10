export const typeDefs = `#graphql
  type Game {
    id:ID,
    title:String,
    platform:[String],
    review:[Review]
  }

  type Review {
    id:ID,
    rating:Int,
    content:String,
    author:Author,
    gameId:Game
  }

  type Author {
    id:ID,
    name:String,
    verifide:Boolean
  }

  type Query {
    reviews:[Review],
    review(id:ID!):Review,
    games:[Game],
    game(id:ID!):Game,
    authors:[Author],
    author(id:ID!):Author
  }
  type Mutation{
    deleteGame(id:ID!):[Game]
  }
`