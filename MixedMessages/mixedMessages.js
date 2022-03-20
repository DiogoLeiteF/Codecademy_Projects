const what1 = "broke a finger";
const what2 = "smash a nail";
const what3 = "broke a leg";

const where1 = "home";
const where2 = "the beach";
const where3 = "the city";
const where4 = "street";
const where5 = "space";

const how1 = "praying a lot";
const how2 = "robbing rich guys";
const how3 = "playing lottery";
const how4 = "eating some shit";



const what = [what1, what2, what3];
const where = [where1, where2, where3, where4, where5];
const how = [how1, how2, how3, how4];

// help get a random value for each const
function getRandom(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

// final output function
function mixedMessages() {
    return `You ${getRandom(what)} in ${getRandom(where)} while you where ${getRandom(how)}. Life is awesome!`;
};

console.log(mixedMessages())
