import React, { Component } from "react";

import reviewIcon from "../../images/review-icon.png";

class FileViewContainer extends Component {
  state = {
    documentId: null,
    response: "",
    file: "",
    fileURL: ""
  };

  componentDidMount() {
    this.setState({ documentId: this.props.documentId });
  }

  viewFile = () => {
    console.log("download method happened");

    // axios({
    //   url: "http://localhost:8081/files/view",
    //   method: "GET",
    //   params: {
    //     documentId: this.state.documentId
    //   },
    //   responseType: "blob" // important
    // })
    //   .then(response => {
    //     this.setState({ response });
    //     const file = new Blob([response.data], { type: "" });
    //     this.setState({ file });
    //     // const fileName = response.headers["content-disposition"].substring(
    //     //   200,
    //     //   22
    //     // );

    //     console.log("--------------- response >>>>>>>>> ", response);

    //     // const url = window.URL.createObjectURL(
    //     //   new Blob([response.data], { type: "application/octet-stream" }) //it works withoud a type as well
    //     // );
    //     // const link = document.createElement("a");
    //     // link.href = url;
    //     // link.setAttribute("download", fileName); //or any other extension
    //     // document.body.appendChild(link);
    //     // link.click();
    //     // link.remove();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // const testUrl = URL.createObjectURL("Labas");

    // const obj = this.state.file;
    // window.open("testing");
    const link = document.createElement("a");
    link.href =
      "http://localhost:8081/files/view?documentId=" + this.props.documentId;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // var funkcija = (response, status, xhr) => {
  //   var filename = "";
  //   var disposition = xhr.getResponseHeader("Content-Disposition");
  //   if (disposition && disposition.indexOf("attachment") !== -1) {
  //     var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  //     var matches = filenameRegex.exec(disposition);
  //     if (matches != null && matches[1]) {
  //       filename = matches[1].replace(/['"]/g, "");
  //     }
  //   }
  //   return filename;
  // };

  render() {
    // console.log("file ---------- ", this.state.file);

    return (
      <div style={{ display: "inline" }}>
        {/* <object data={this.state.response} type="application/pdf" /> */}
        <button
          // style={{ display: "inline" }}
          onClick={this.viewFile}
          className="btn btn-outline-success button-info "
        >
          <img
            src={reviewIcon}
            width="20"
            height="20"
            alt="review icon"
            // style={{ display: "inline" }}
          />
          <span className="tooltiptext">Peržiūrėti</span>
        </button>
        {/* <img src={this.state.fileURL} /> */}

        {/* <RenderResponse responseToRender={this.state.response} /> */}
      </div>
    );
  }
}

export default FileViewContainer;
