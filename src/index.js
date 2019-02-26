/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 1; i <= preferences.length; i++) {

        let pichonees1Lover = i;
        let pichonees2Lover = preferences[pichonees1Lover - 1];
        let pichonees3Lover = preferences[pichonees2Lover - 1];
        if (preferences[pichonees3Lover - 1] == pichonees1Lover)
            counter1++;
        if (counter1 == 3) {
            counter2++;
            counter1 = 0;
        }



    }
    return counter2
};