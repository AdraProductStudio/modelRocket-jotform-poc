import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { LuUpload } from 'react-icons/lu';
import { BsFiletypeCsv } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import axiosInstance from '../Services/axiosInstance';

const ViewOnboardingSubmission = () => {

  const [excelData, setExcelData] = useState([]);
  const [uploadingFile, setUploadingfile] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const onDropResume = useCallback((acceptedFiles) => {
    // var fileSize = acceptedFiles[0].size
    // if (fileSize <= 5242880) {
    console.log(acceptedFiles)
    setExcelData(acceptedFiles);
    // } else {
    //   toast.error("Please ensure that the file size remains below 5MB")
    // }
  }, []);

  const {
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    isDragActive: isDragActiveResume,
  } = useDropzone({
    onDrop: onDropResume,
    maxFiles: 1,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-excel": []
    }
  });

  const handleUploadXlfile = async () => {
    setUploadingfile(true);
    setProgressPercentage(0);

    try {
      const formData = new FormData();
      formData.append("file", excelData[0]);

      const config = {
        onUploadProgress: function (progressEvent) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 99) / progressEvent.total
          );
          setProgressPercentage(percentCompleted);
        }
      }


      const response = await axiosInstance.post("/upload",formData,config)


      if (response.data.error_code === 0) {
        setUploadingfile(false);
        setProgressPercentage(0);
        setExcelData(null)
      } else {
        setUploadingfile(false);
      }
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='h-100 w-100 d-flex flex-wrap align-items-center justify-content-center'>
      <div className="col-10 col-md-9 col-lg-8 col-xxl-6">
        <div className="card uploadXLCard rounded-4">
          {
            excelData.length > 0 ?
              <div className="card-body p-0">
                <div className="w-100 py-5">
                  <div className="py-5 d-flex flex-wrap justify-content-center">
                    <div className="col-11 d-inline-flex">
                      <div className="col-1">
                        <BsFiletypeCsv className="fs-4" />
                      </div>
                      <div className="col-10">
                        <p className="resume-name">
                          {excelData[0].name ? excelData[0].name : null}
                        </p>
                      </div>
                      <div className="col-1">
                        {/* <button type="button" className='btn' onClick={() => { setExcelData([]) }}> */}
                        <button type="button" className='btn border-0' onClick={() => { setExcelData([]) }} disabled={uploadingFile}>
                          <AiTwotoneDelete className="fs-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-flex flex-wrap justify-content-center">
                    <div className="col-8 col-lg-6">
                      {
                        uploadingFile ?
                          <>
                            <button type="button" className='btn btn-md btn-primary w-100 rounded-3' disabled>
                              <div className="text-center align-middle">
                                <div className="spinner-border" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                                <span className='ps-3'>Uploading</span>
                              </div>
                            </button>

                            <div className="col-12 mt-3">
                              <div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped bg-primary" style={{ width: `${progressPercentage}%` }}></div>
                              </div>
                            </div>
                          </>
                          :
                          <button type="button" className='btn btn-md btn-primary w-100 rounded-3' onClick={handleUploadXlfile}>Upload</button>
                      }
                    </div>
                  </div>
                </div>
              </div>

              :

              <div {...getRootProps()} className="cursorPointer">

                <input {...getInputProps()} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                {isDragActiveResume ? (
                  <div className="card-body p-0">
                    <div className="w-100 py-5 text-center">
                      <div className="py-5">
                        <div className='mb-3'>
                          <BsFiletypeCsv className="fs-4" />
                        </div>
                        <p className="mb-0 apply-job-brand-color">Drop the files here ...</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card-body p-0">
                    <div className="w-100 py-5 text-center">
                      <div className='mb-3'>
                        <LuUpload className="fs-4" />
                      </div>

                      {/* <h6 className='mb-2'>Drag &amp; Drop</h6> */}
                      <p className='mb-2'>Select files to upload</p>
                      <p className="text-secondary"> Supports: xls only</p>
                    </div>
                  </div>
                )}

              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ViewOnboardingSubmission