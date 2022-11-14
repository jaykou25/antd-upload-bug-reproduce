import { Button, Upload } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

export default function HomePage() {
  const [fileList, setFileList] = useState([]);
  return (
    <div style={{ padding: "30px" }}>
      <h1>Upload组件受控时fileList不对</h1>
      <Upload
        action="/api/upload"
        multiple
        fileList={fileList}
        onChange={(info) => {
          console.log(
            "onChange",
            info.file.uid,
            info.file.status,
            info.fileList
          );
          setFileList(info.fileList);
        }}
      >
        <Button>上传</Button>
      </Upload>
    </div>
  );
}
