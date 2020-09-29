// Usage:
//
//  var pod : Pod = new Pod(Pod.Type.Laser);
//
//  console.log(pod)
//
//    "Laser"
//
//  console.log(Pod.toString(Pod.Type.Laser))
//
//    "Laser"
//
//  console.log(1)
//
//    "Laser"
//
// Notes:
//
//    * Uses Namespace Merging (for enum Pod.Type)
//
//      https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-namespaces-with-classes
//

/**
 * Represents an active or destroyed ship pod
 */
class Pod {
  /** the type of active or destroyed pod */
  type: number;

  constructor(type: number) {
    this.type = type;
  }

  _signaturePod() : void {}

  toString(): string {
    return this.type <= 100 ? Pod.TypeNames[this.type] : Pod.DestroyedTypeNames[this.type - 100];
  }

  /**
   * Returns a string representation of the Pod
   *
   * @param pod type
   * @return name
   */
  static toString(type: number): string {
    return type <= 100 ? Pod.TypeNames[type] : Pod.DestroyedTypeNames[type - 100];
  }

  /**
   * Returns the Pod type but destroyed
   * @param pod-type
   * @return pod-type (destroyed)
   */
  static destroy(type: number): number {
    return type + 100;
  }

  /**
   * Tests if pod is okay (not destroyed)
   * @param pod-type
   * @return true if undestroyed
   */
  static okay(type: number): boolean {
    return type > 0 && type < 100;
  }

  public static readonly Laser: number = 1;
  private static TypeNames:          string[] = ["Invalid", "Laser", "Cabin", "Cargo"];
  private static DestroyedTypeNames: string[] = ["Invalid", "Destroyed Laser", "Destroyed Cabin", "Destroyed Cargo"];
};


namespace Pod {
export enum Type {
  Invalid = 0,
  Laser = 1,
  Cabin,
  Cargo,
  DestroyedLaser = 101,
  DestroyedCabin,
  DestroyedCargo,
}
}
export default Pod;

module.exports = [Pod];
