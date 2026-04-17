/**
 * places Object
 * --------------------------------------------------
 * Purpose:
 * - Maps QR code values to indoor reference points
 * - Used by QR scanner to identify user location
 * - Provides coordinates for displaying marker on map
 */
export const places = {

  /**
   * Key: QR Code Value
   * --------------------------------------------------
   * This value must match the scanned QR code text
   */
  1: {

    // Description of the location (used for tooltip/display)
    info: "Stairs reference",

    /**
     * Position Coordinates (Relative)
     * --------------------------------------------------
     * top and left are percentage-based values (0 to 1)
     * Used to place marker correctly on the map image
     */

    // Vertical position (60% from top)
    top: 0.60,

    // Horizontal position (62% from left)
    left: 0.62,
  },
};