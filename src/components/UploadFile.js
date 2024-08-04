import uploadFiles from "@/assets/icons/upload-files.svg";
import secure from "@/assets/icons/secure.svg";
import pause from "@/assets/icons/pause.svg";
import cancel from "@/assets/icons/cancel.svg";
const UploadFiles = ({ acceptedFiles = "jpg and png only." }) => {
  return (
    <div className="form-wrapper p-3 p-md-4">
      {/* File Upload  */}
      <div className="upload-files-wrapper text-center position-relative">
        <div>
          <img src={uploadFiles.src} data-aos="flip-left"
            data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
            data-aos-duration="500" className="img-fluid" alt="icon" />
          <h5 className="mt-2">
            <span className="text-primary">Drap your file(s) or</span> <span className="text-danger">browse</span></h5>
        </div>
        <input type="file" className="position-absolute w-100 h-100 start-0 top-0 opacity-0" />
      </div>
      {/* Instructions  */}
      <div className="d-flex flex-column flex-sm-row gap-1 align-items-center mt-2 mb-3 justify-content-between">
        <p><span className="text-primary">Accepted File Type :</span> <span className="fw-light">{acceptedFiles}</span></p>
        <p className="text-primary d-flex align-items-center">
          <img src={secure.src} alt="icon" />
          <span className="fw-medium ms-2">100% Secure. Zero Spam</span>
        </p>
      </div>
      {/* uploading  */}
      <div className="uploading-wrapper">
        <h5 className="text-primary">Uploading...</h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="text-gray opacity-50">39% - 5 seconds left</p>
          <div className="d-inline-flex gap-2 align-items-center">
            <button type="button" className="link-btn">
              <img src={pause.src} alt="icon" />
            </button>
            <button type="button" className="link-btn">
              <img src={cancel.src} alt="icon" />
            </button>
          </div>
        </div>
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: "39%" }} ></div>
        </div>
      </div>
    </div>
  );
}

export default UploadFiles;