import { PathPoint } from "./types";

/**
* Calculate walking a path at a given speed
* See how many staps of the path you can walk in a given speed
* You will often have to resume walking a path you've already started
 *
 * @param x the starting x position of the character,
 * this will often be a little more / less than one of the path points
 * @param y the starting y position of the character,
 * this will often be a little more / less than one of the path points
 * @param startIndex The index of the last whole path point you touched
 * @param path A list of coordinate points on the map that make up a path for a
 * character to walk
 * @param speed How many points to walk in a given tick
 */
export const calculateReachablePoints = ({ x, y, path, startIndex, speed }: {
  x: number;
  y: number;
  path: { x: number, y:number }[],
  startIndex: number;
  speed: number
}): [
  reachablePoints: PathPoint[],
  lastReachableIndex: number,
  leftoverSpeed: number,
  destinationPoint: PathPoint
] => {
  const points = [];
  let distanceTravelled = 0;
  let lastPosition = { x, y };

  console.log('x: ', x);
  console.log('y: ', y);
  console.log('path: ', path);
  console.log('startIndex: ', startIndex);
  console.log('speed: ', speed);

  for(var i = startIndex; i < path.length; i++) {
    const point = path[i];
    const pointX = point.x;
    const pointY = point.y;
    const distanceToGo = speed - distanceTravelled;
    const distanceDifference = Math.abs(
      (Math.abs(pointX) + Math.abs(pointY)) - (Math.abs(lastPosition.x) + Math.abs(lastPosition.y))
    );

    const isWithinReach = distanceToGo - distanceDifference > 0;

    // Once we hit the speed limit, end the function
    if(!isWithinReach) return [points, i, distanceToGo, point];
  
    points.push(point);
    distanceTravelled += distanceDifference;
    lastPosition = { x: pointX, y: pointY };
  }
}


/**
 * Figure out what % a number is of another number
 * @example
 * const part = 20;
 * const total = 200;
 * const percent = calcPercentOfTotal(part, total);
 * console.log(percent) // 10
 *
 * @param part the number you're trying to find the % of
 * @param total the number representing 100%
 */
const numberToPercent = (part: number, total: number) => (part / total) * 100;

/**
 * Figure out the numerical value from a percent and total
 * @example
 * const percent = 10;
 * const total = 200;
 * const part = calcPercentOfTotal(percent, total);
 * console.log(percent) // 20
 * 
 * @param percent the percent value
 * @param total the number representing 100%
 */
const percentToNumber = (percent: number, total: number) => (percent / 100) * total;

export const getBetweenCoordinates = (
  startPoint: PathPoint,
  endPoint: PathPoint,
  speed: number
) => {
  // console.log('startPoint: ', startPoint);
  // console.log('endPoint: ', endPoint);
  // console.log('speed: ', speed);

  // console.log(': ', );

  const normalDifferenceX = Math.abs(Math.abs(endPoint.x) - Math.abs(startPoint.x));
  const normalDifferenceY = Math.abs(Math.abs(endPoint.y) - Math.abs(startPoint.y));

  const totalDifference = normalDifferenceX + normalDifferenceY;

  const percentDifferenceX = numberToPercent(normalDifferenceX, totalDifference);
  const percentDifferenceY = numberToPercent(normalDifferenceY, totalDifference);

  

  const extraX = percentToNumber(percentDifferenceX, speed);
  const extraY = percentToNumber(percentDifferenceY, speed);


  const modifierX = endPoint.x > startPoint.x ? 1 : -1;
  const modifierY = endPoint.y > startPoint.y ? 1 : -1;

  const finalX = (startPoint.x + (extraX * modifierX));
  const finalY = (startPoint.y + (extraY * modifierY));


  // console.log('percentDifferenceX: ', percentDifferenceX);
  // console.log('percentDifferenceY: ', percentDifferenceY);
  // console.log('totalDifference: ', totalDifference);
  // console.log('extraX: ', extraX);
  // console.log('extraY: ', extraY);
  // console.log('finalX: ', finalX);
  // console.log('finalY: ', finalY);
  // console.log(': ', );
 


  return [ finalX, finalY ];
}
