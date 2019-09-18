/* 
You are given given a list of rectangles represented by min and max x- and y-coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.

EXAMPLE:

{
    "top_left": (1, 4),
    "dimensions": (3, 3) # width, height
},
{
    "top_left": (-1, 3),
    "dimensions": (2, 1)
},
{
    "top_left": (0, 5),
    "dimensions": (4, 3)
}

Should return true because 1st and 3rd overlap

*/


const recs = [
    {
        "top_left": [1, 4],
        "dimensions": [3, 3]
    },
    {
        "top_left": [-1,3],
        "dimensions": [2, 1]
    },
    {
        "top_left": [0, 5],
        "dimensions": [4, 3]
    }
]

const overlapping_rects = (recs) => {
    let coordinates = {}
    let currentCoordinate;
    let currentType;
    for (let rec of recs) {
        for (let i = 0; i < rec.dimensions[0]; i++) {
            for (let j = 0; j < rec.dimensions[1]; j++) {
                currentCoordinate = [rec.top_left[0] + i, rec.top_left[1] - j];
                
                // If we've already seen a coordinate before and it was an inner coordinate,
                // then we have overlapping recs -> return true
                if (coordinates[String(currentCoordinate)] === 'inner') {
                    return true
                }


                // if we haven';'t seen a coordinate before, mark it as 'edge' or 'inner' and move on
                if(
                    currentCoordinate[0] === rec.top_left[0]
                    ||
                    currentCoordinate[1] === rec.top_left[1]
                    ||
                    currentCoordinate[0] === rec.top_left[0] + rec.dimensions[0] - 1
                    ||
                    currentCoordinate[1] === rec.top_left[1] - rec.dimensions[1] + 1
                ){
                    coordinates[String(currentCoordinate)] = 'edge'
                } else {
                    coordinates[String(currentCoordinate)] = 'inner'
                }

            }
        }
    }
    // console.log(coordinates)
    return false
}

console.log(overlapping_rects(recs))