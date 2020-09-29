// Usage:
//
//  var pod : Pod = new Pod(Pod.Laser);
//
//  console.log(pod)
//
//    "Laser"
//
//  console.log(Pod.toString(Pod.Laser))
//
//    "Laser"
//
//  console.log(1)
//
//    "Laser"
//

/**
 * Represents an active or destroyed ship pod
 */
class Pod {
  /** the type of active or destroyed pod */
  type: number;

  private constructor(type: number) {
    this.type = type;
  }

  private _signaturePod() : void {}

  public toString(): string {
    return this.type <= 100 ? Pod.TypeNames[this.type] : Pod.DestroyedTypeNames[this.type - 100];
  }

  /**
   * Returns a string representation of the Pod
   *
   * @param pod type
   * @return name
   */
  public static toString(type: number): string {
    return type <= 100 ? Pod.TypeNames[type] : Pod.DestroyedTypeNames[type - 100];
  }

  /**
   * Returns the Pod type but destroyed
   * @param pod-type
   * @return pod-type (destroyed)
   */
  public static destroy(type: number): number {
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

  public static readonly Invalid: number = 0;
  public static readonly Laser:   number = 1;
  public static readonly Cabin:   number = 2;
  public static readonly Cargo:   number = 3;
  public static readonly DestroyedLaser: number = 101;
  public static readonly DestroyedCabin: number = 102;
  public static readonly DestroyedCargo: number = 103;
  private static TypeNames:          string[] = ["Invalid", "Laser", "Cabin", "Cargo"];
  private static DestroyedTypeNames: string[] = ["Invalid", "Destroyed Laser", "Destroyed Cabin", "Destroyed Cargo"];
};

//type PodType = Pod.Invalid | Pod.Laser | Pod.Cabin | Pod.Cargo | Pod.DestroyedLaser | Pod.DestroyedCabin | Pod.DestroytedCargo;

module.exports = [Pod];
