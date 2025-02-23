import { ReactNode } from "react";
import "./index.css";
export default function TriggerDownload({
  uri,
  filename,
  label,
  className,
  startIcon,
  endIcon,
}: {
  uri: string;
  filename: string;
  label?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}) {
  const handleTrigger = () => {
    try {
      if (uri) {
        const link = document?.createElement("a");
        link.href = uri;
        link.target = "_blank";
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
      }
    } catch (error) {}
  };
  return (
    <button
      onClick={() => handleTrigger()}
      className={className || "aad-btn-download-trigger"}
    >
      {startIcon} {label || "Download"} {endIcon}
    </button>
  );
}
