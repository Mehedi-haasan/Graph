import db from '../config/db.js';

export const resolvers = {
    Query: {
        games() {
            return db.games; // Assuming db.games contains the games data
        },
        reviews() {
            return db.reviews; // Assuming db.reviews contains the reviews data
        },
        authors() {
            return db.authors; // Assuming db.author contains the author data
        },
        review(_, args){
            return db.reviews.find((review)=>review.id === args.id)
        },
        game(_, args){
            return db.games.find((review)=>review.id === args.id)
        },
        author(_, args){
            return db.authors.find((au)=>au.id === args.id)
        }
    },
    Game:{
        review(parent, agrs){
            return db.reviews.filter((re)=>re.gameId === parent.id)
        }
    }
};
