import { numberToPercent, percentToNumber } from "../../../../../../utils";
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
export const calculateReachablePoints = ({ x, y, path, startIndex, speed, loop }: {
  x: number;
  y: number;
  path: { x: number, y:number }[],
  startIndex: number;
  speed: number,
  loop: boolean
}): [
  reachablePoints: PathPoint[],
  lastReachableIndex: number,
  leftoverSpeed: number,
  destinationPoint: PathPoint
] => {
  const points = [];
  let distanceTravelled = 0;
  let lastPosition = { x, y };

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

  // If we reach here, we've run out of points in the path, but still have speed to spend

  // If not looping, return the last point in the path, as the npc has reached the end
  if(!loop) return [points, path.length - 1, 0, path.at(-1)];

  // If looping, keep going, starting from the beginning of the path
  for(var i = 0; i < path.length - points.length; i++) {
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

export const getBetweenCoordinates = (
  startPoint: PathPoint,
  endPoint: PathPoint,
  speed: number
) => {
  if(speed === 0) return [endPoint.x, endPoint.y];

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

  return [ finalX, finalY ];
}



