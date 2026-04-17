// Import QRScannerMap component
// This component handles QR scanning + map interaction logic
import QRScannerMap from "../../components/QRScannerMap";

/**
 * ScanPage Component
 * --------------------------------------------------
 * Purpose:
 * - Acts as a wrapper page for QR scanning functionality
 * - Renders the QRScannerMap component
 * - Keeps page clean by delegating all logic to the component
 */
export default function ScanPage() {

  /**
   * Render QR Scanner Map
   * --------------------------------------------------
   * The QRScannerMap component is responsible for:
   * - Scanning QR codes
   * - Detecting reference points
   * - Displaying map with user position
   */
  return <QRScannerMap />;
}