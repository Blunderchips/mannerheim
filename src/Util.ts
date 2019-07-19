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
     */
    static dist2(vecA: Vector2, vecB: Vector2): number {

        // console.log({ vecA, vecB });

        const x = vecA.x - vecB.x;
        const y = vecA.y - vecB.y;

        return (x * x) + (y * y);
    }
}

export default Util;