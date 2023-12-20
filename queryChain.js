const { Person } = require("./myApp");

const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({ favoriteFoods: foodToSearch })
        .sort({ name: desc })
        .limit()
        .select("name", "favoriteFoods")
        .exec();
    done(null /*, data*/);
};
