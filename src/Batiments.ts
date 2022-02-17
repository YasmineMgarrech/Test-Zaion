/**
 * @class
 */
class Batiments {
  private batiments: Array<number>;
  /**
    * @constructor Batiments
    * @param {number[]} batiments
    */
  constructor(batiments: Array<number>) {
    /** @private */
    this.batiments = batiments;
  }

  /**
   * Simple solution for our problem of finding the maximum amount of rain water trapped
   * @returns the final result of the maximum surface of water stored
   */
  solutionSimple(): number {
    let resultatFinale: number = 0;
    for (let i = 0; i < this.batiments.length; i++) {
      let maxL: number = 0;
      let maxR: number = 0;
      for (let j = i; j >= 0; j--) {
        maxL = Math.max(maxL, this.batiments[j]);
      }
      for (let k = i; k < this.batiments.length; k++) {
        maxR = Math.max(maxR, this.batiments[k]);
      }
      resultatFinale += Math.min(maxL, maxR) - this.batiments[i];
    }
    return resultatFinale;
  }
  /**
   * Optimal solution for our problem of finding the maximum amount of rain water trapped
   * @returns the final result of the maximum surface of water stored
   */
  solutionOptimale(): number {
    let indexL: number = 0;
    let indexR: number = this.batiments.length - 1;
    let maxL: number = 0;
    let maxR: number = 0;
    let resultatFinale: number = 0;
    while (indexL <= indexR) {
      if (maxR <= maxL) {
        resultatFinale += Math.max(0, maxR - this.batiments[indexR]);
        maxR = Math.max(maxR, this.batiments[indexR]);
        indexR -= 1;
      } else {
        resultatFinale += Math.max(0, maxL - this.batiments[indexL]);
        maxL = Math.max(maxL, this.batiments[indexL]);
        indexL += 1;
      }
    }
    return resultatFinale;
  }
}

export default Batiments