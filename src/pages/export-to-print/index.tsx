import { useCallback } from "react";

export default function ExportToPrint() {
  const export2Pdf = useCallback(() => {
    window.print();
  }, []);

  return (
    <div>
      <div id="pdf-content">
        <h1>Export This Page to PDF</h1>
        <p>This content will be formatted and saved as a PDF.</p>

        <p className=" text-red-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          nisi id libero vehicula posuere.
        </p>

        <div className="page-break"></div>

        <h2>New Page Content</h2>
        <p>Additional content will appear on a new page.</p>
      </div>
      <button onClick={() => export2Pdf()} className="no-print">
        Export
      </button>
    </div>
  );
}
