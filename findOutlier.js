function createPoints() {

  var outlierIndex = Math.floor(Math.random() * 10);
  var startY = Math.random() * 100;
  var slope = Math.random();
  var points = [];
  for (var i = 0; i < 10; i++) {
    var x = Math.random() * 100;
    points.push({x: x, y: x * slope + startY});
  }
  var outlier = points[outlierIndex];
  outlier.y += Math.random() > 0.5 ? 10 : -10;

  return points;

}

function getLineSlope(slopes) {

    // when we see two repeating slopes
    // we can assume that is the correct slope
    // the outlier will produce at most 1 repeating slope

    let lineSlope = slopes[0].slope;

    // runs a max of 4 times, when outlier is at point 3
    for (let i = 1; i < slopes.length; i++) {

        if (slopes[i].slope.toFixed(3) === lineSlope.toFixed(3)) {

           return {
               lineSlope: slopes[i].slope, 
               slopes
           }; 
        }
        
        else { 
            lineSlope = slopes[i].slope;
        }

    }

    return {lineSlope, slopes};

}

function calcSlope (a,b) {
    return (b.y - a.y)/(b.x - a.x);
}

function generateSlopes(points) {


    let slopes = [];

    for (let i = 0; i < points.length - 1; i++) {
        slopes.push({
            slope: calcSlope(points[i], points[i + 1]),
            start: i,
            end: i + 1
        });
    }

    return slopes;

}
function findOutlier(points) {

    points.sort((p1,p2) => p1.x - p2.x);  

    let { lineSlope, slopes } = getLineSlope(generateSlopes(points));

    slopes.sort(function(a,b) {
        return a.slope - b.slope;
    });

    let first = slopes[0];
    let last = slopes[slopes.length - 1];
    let point;

    // middle outlier
    // if both boundary slopes differ from line slope,
    if (first.slope.toFixed(3) !== lineSlope.toFixed(3) && last.slope.toFixed(3) !== lineSlope.toFixed(3))
        point = (first.start < last.start) ? points[first.end] : points[last.start];

    //
    // end outlier
    // else the first and points are outliers 
    else {
        if (first.slope.toFixed(3) === lineSlope.toFixed(3)) {
            point = points[last.start];
        }
        else {
            point = points[first.end];
        }

    }
    return point;

}

let points = [
    { x: -5, y: -3},
    { x: -3, y: -1},
    //{ x: 0,  y: 0},
    { x: 4,  y: 0},
    { x: 1,  y: 3},
    { x: 3,  y: 5}
];

/*
let points = createPoints();
let points = [
    { x: -3, y: -1},
    { x: 0,  y: 1},
    { x: 3,  y: 3},
    { x: 6,  y: 5},
    { x: -4,  y: -3},
    //{ x: 7,  y: 0},
];
*/



const outlierPoint = findOutlier(points);
console.log(outlierPoint); 
