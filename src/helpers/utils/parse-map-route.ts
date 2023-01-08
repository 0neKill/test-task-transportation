import type { MapRoute, Waypoint } from '__types__';

export const parseWaypoints = (waypoint: Waypoint): Pick<MapRoute, | 'steps'> => {
    const steps = waypoint.routes[0].legs[0].steps;
    const result: Array<[number, number]> = [];
    for (let i = 0; i < steps.length; i++) {
        const intersection = steps[i].intersections;
        for (let j = 0; j < intersection.length; j++) {
            const location = intersection[j].location;
            result.push([location[1], location[0]]);
        }
    }
    return {
        steps: result,
    };
};
