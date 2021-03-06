import React from "react";

import { Link } from "react-router-dom";
import FileDownloadConatainer from "../FileDownload/FileDownloadContainer";
import FileViewContainer from "../FileDownload/FileViewContainer";

const DocumentsComponent = props => {
  var {
    id,
    //author,
    documentStateInLithuanian,
    documentTypeTitleInLithuanian,
    title,
    description
    //attachments
    //creationDate,
    //submissionDate,
    //confirmationDate,
    //rejectionDate,
    //reviewer,
    //rejectionReason,
    //path
  } = props.documentDetails;

  const linkToDOcumentDetails = "/docs/" + id;

  return (
    <div className="row users-padding-bottom">
      <div className="col-1 documents-table-size">{props.index}</div>
      <div className="col-2 documents-table-size">
        <Link to={linkToDOcumentDetails}>{title}</Link>
      </div>
      <div className="col-2 documents-table-size">
        {documentTypeTitleInLithuanian}
      </div>
      <div className="col-2 documents-table-size">
        {documentStateInLithuanian}
      </div>
      <div className="col-2 documents-table-size">{description}</div>
      <div className="col-1 documents-table-size">
        <FileViewContainer documentId={id} />
      </div>
      <div className="col-2 documents-table-size">
        <FileDownloadConatainer documentId={id} />
      </div>
    </div>
  );
};

export default DocumentsComponent;
