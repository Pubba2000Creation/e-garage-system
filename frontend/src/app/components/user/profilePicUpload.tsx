import React from 'react';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { CiImageOn } from "react-icons/ci";

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const ProfilePicUpload: React.FC = () => (
  <Dragger {...props}>
    <div className="w-full h-full flex flex-col justify-center items-center text-gray">
        <CiImageOn  size={50} />
    </div>
    <p className=" text-gray">Drag and Drop your profile picture here or Choose file</p>
    
  </Dragger>
);

export default ProfilePicUpload;