import { useCallback } from "react";

export default function ExportToPdf() {
  const export2Pdf = useCallback(() => {
    // Get the element to convert
    const element = document.getElementById("pdf-content") as any;

    // Create a canvas
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as any;

    // Set canvas size based on element size
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Convert HTML content to an image using the Canvas API
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.font = "16px Arial";
    context.fillStyle = "black";

    // Convert element text to image format
    context.fillText(element.innerText, 20, 50); // Adjust positioning if needed

    // Convert the canvas to a Blob (PDF format)
    canvas.toBlob((blob: any) => {
      const url = URL.createObjectURL(blob);

      // Create a download link
      const link = document.createElement("a");
      link.href = url;
      link.download = "exported.pdf";
      link.click();

      // Cleanup
      URL.revokeObjectURL(url);
    }, "application/pdf");
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
