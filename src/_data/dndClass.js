// const { AssetCache } = require("@11ty/eleventy-fetch");
// const axios = require('axios');



// module.exports = async function () {
//     const classList = [
//         "Barbarian",
//         "Bard",
//         "Cleric",
//         "Druid",
//         "Fighter",
//         "Monk",
//         "Paladin",
//         "Ranger",
//         "Rogue",
//         "Sorcerer",
//         "Warlock",
//         "Wizard"
//     ];

//     // let url = `https://www.dnd5eapi.co/api/classes${classList[0]}`;

//     // /* This returns a promise */
//     // return EleventyFetch(url, {
//     //     duration: "1d", // save for 1 day
//     //     type: "json"    // we’ll parse JSON for you
//     // });

//     // GET request for remote image in node.js

//     let asset = new AssetCache("dndclasses");

//     // check if the cache is fresh within the last day
//     if (asset.isCacheValid("1s")) {
//         // return cached data.
//         return asset.getCachedValue(); // a promise
//     }

//     let classData = [];

//     for (let i = 0; i < classList.length; i++) {
//         //console.log(classList[i])
//         axios({
//             method: 'get',
//             url: `https://www.dnd5eapi.co/api/classes/${classList[i].toLowerCase()}`
//         })
//             .then(function (response) {
//                 // console.log(response.data)
//                 // const res = response.data;
//                 // classData.push(res);
//                 let temp = {
//                     name: classList[i].toLowerCase(),
//                     data: response.data
//                 }
//                 classData.push(temp);
//                 console.log(temp)
//             })
//             .catch((error) => {
//                 console.error(error);
//             })
//             .finally(() => {
//                 console.log("request resolved")
//             });
//     }


//     await asset.save(classData, "json");

//     return classData;
// };