import React, { Component } from "react";
import PropTypes from "prop-types";
import DocumentTypesContainer from "../FileUpload/DocumetTypesContainer";
import { Link } from "react-router-dom";

import logo from "../../images/home.png";

const CreateUserGroupsComponent = props => {
  return (
    <div>
      <div className="container-fluid m-2">
        <h6 className="display-6 normal-padding">
          Naujos vartotojų grupės kūrimas
        </h6>

        <h5 className="display-6 normal-padding gray-collor ">
          <Link to={"/"}>
            <img src={logo} width="20" height="10" />
          </Link>
          &ensp;/ &ensp;
          <Link to={"/admin"} className="explorer">
            Administratoriaus rolė
          </Link>
          &ensp;/ &ensp;
          <Link to={"/admin/usergroups"} className="explorer">
            Vartotojų grupės
          </Link>
          &ensp;/ &ensp;
          <Link to={"/admin/usergroups/new"} className="explorer">
            Naujos vartotojų grupės kūrimas
          </Link>
        </h5>

        <h3 className="display-6 ">Naujos vartotojų grupės kūrimas</h3>
        <h5>Vartotojų grupės pavadinimas</h5>
        <input
          onChange={props.onTitleChange}
          className="form-control col-4"
          type="text"
          placeholder="Įveskite vartotojų grupės pavadinimą"
        />
        <h6>Pasirinkite pateikti leidžiamų dokumentų tipus</h6>
        <DocumentTypesContainer
          documentTypes={props.documentTypes}
          onDocumentTypeChange={props.onSubmitTypesChange}
        />
        <span className="italic-style-small">
          Pasirinkti pateikti leidžiami tipai:{" "}
          {props.selectedSubmissionTypesTitles}
        </span>
        <h6>Pasirinkite peržiūrėti leidžiamų dokumentų tipus</h6>
        <DocumentTypesContainer
          documentTypes={props.documentTypes}
          onDocumentTypeChange={props.onReviewTypesChange}
        />
        <span className="italic-style-small">
          Pasirinkti leidžiami peržiūrėti tipai:{" "}
          {props.selectedReviewTypesTitles}
        </span>
        <br />
        <button
          onClick={props.onSubmit}
          className="btn btn-outline-success m-2"
        >
          Kurti
        </button>
      </div>
      <div className="container">{props.launchAlert}</div>
    </div>
  );
};

export default CreateUserGroupsComponent;
