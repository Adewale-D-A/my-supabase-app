import { useCallback, useState } from "react";
import { jsonToCSVuriConverter, isSample } from "adewale-utils-toolbox";
import { TriggerDownload } from "adewale-ui-toolbox";
const dataset = [
  {
    name: "Adewale",
    age: 26,
    occupation: "Engineer",
    address: "Ilupeju",
  },
];
export default function ExportToCSV() {
  const [exportedUri, setExportedUri] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  const [doneExporting, setDoneExporting] = useState(false);
  const { extractUri } = jsonToCSVuriConverter({
    dataset,
    jsonToCSVReformerter,
  });

  const handleDownload = useCallback(() => {
    const sampleHandler = isSample("randooms");
    console.log({ sampleHandler });
    setIsExporting(true);
    const csv = extractUri();
    setExportedUri(csv);
    setIsExporting(false);
    setDoneExporting(true);
  }, []);
  return (
    <>
      {!doneExporting ? (
        <button onClick={() => handleDownload()}>
          {isExporting ? "...loading" : "Export to CSV"}
        </button>
      ) : (
        <TriggerDownload
          uri={exportedUri}
          filename="many-examples"
          label="Download"
        />
      )}
    </>
  );
}

const jsonToCSVReformerter = (item: { [key: string]: string }) => {
  return [
    ["name", item?.name],
    ["age", item?.age],
    ["occupation", item?.occupation],
    ["address", item?.address],
  ];
};
