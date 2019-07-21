export const KEY_SPACE = 32;

/**
 * 
 */
export interface Vector2 {

    x: number;
    y: number;
}

/**
 * 
 */
class Util {

    /**
     * 
     * 
     */
    static dist2(vecA: Vector2, vecB: Vector2): number {

        // console.log({ vecA, vecB });

        const x = vecA.x - vecB.x;
        const y = vecA.y - vecB.y;

        return (x * x) + (y * y);
    }


    static angle(vecA: Vector2, vecB: Vector2) {

        const cx = vecA.x;
        const cy = vecA.y;

        const ex = vecB.x;
        const ey = vecB.y;

        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); // range (-PI, PI]
        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
        if (theta < 0) theta = 360 + theta; // range [0, 360)
        return theta;
    }

    // https://gist.github.com/ashblue/3860114
    static movePointAtAngle(point: Vector2, angle: number, distance: number) {
        // console.log(angle);

        point.x += Math.cos(angle) * distance;
        point.y += Math.sin(angle) * distance;
        return point;
    }
}

export default Util;