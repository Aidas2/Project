import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import UserGroupsContainer from "./components/UserGroups/UserGroupsContainer";
import AdministrationContainer from "./components/Administration/AdministrationContainer";
//import LandingPage from "./components/LandingPage";
import App from "./App";
import CreateUserGroupsContainer from "./components/UserGroups/CreateUserGroupsContainer";
import FileUploadContainer from "./components/FileUpload/FileUploadContainer";
import DocumentTypesContainer from "./components/DocumentTypes/DocumentTypesContainer";
import CreateDocumentTypeConatainer from "./components/Forms/DocumentType/CreateDocumentTypeContainer";
import CreateUserContainer from "./components/Forms/User/CreateUserContainer";
import UsersContainer from "./components/Users/UsersContainer";
import StatisticsContainer from "./components/Statistics/StatisticsContainer";
import FileDownloadConatainer from "./components/FileDownload/FileDownloadContainer";
//import LandingPageContainer from "./components/LandingPageContainer";
import DocumentsContainer from "./components/Documents/DocumentsContainer";
import UserDetailsContainer from "./components/Users/UserDetailsContainer";
import UserGroupDetailsContainer from "./components/UserGroups/UserGroupDetailsContainer";
import "./styles.css";
import DocumentDetailsContainer from "./components/Documents/DocumentDetailsContainer";
import UpdateUserContainer from "./components/Forms/User/UpdateUserContainer";
import LoginContainer from "./components/login/LoginContainer";
import LogoutContainer from "./components/login/LogoutContainer";
import UpdateUserGroupContainer from "./components/Forms/UserGroups/UpdateUserGroupContainer";
//import ServicesContext from "./components/context/ServicesContext";
import "axios";
import DocsByUserContainer from "./components/Documents/DocsByUserContainer";
import DocsForReviewContainer from "./components/Documents/DocsForReviewContainer";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/usergroups" component={UserGroupsContainer} />
        <Route exact path="/usergroups/:id" />
        <Route exact path="/admin" component={AdministrationContainer} />
        <Route exact path="/upload" component={FileUploadContainer} />
        <Route exact path="/download" component={FileDownloadConatainer} />
        <Route
          exact
          path="/admin/newdoctype"
          component={CreateDocumentTypeConatainer}
        />
        <Route
          exact
          path="/admin/doctypes"
          component={DocumentTypesContainer}
        />{" "}
        <Route exact path="/admin/newuser" component={CreateUserContainer} />
        <Route exact path="/admin/users" component={UsersContainer} />
        <Route exact path="/statistics" component={StatisticsContainer} />
        <Route
          exact
          path="/admin/updateuser/:username"
          component={UpdateUserContainer}
        />
        <Route
          exact
          path="/admin/updategroup/:title"
          component={UpdateUserGroupContainer}
        />
        <Route exact path="/docs" component={DocsByUserContainer} />
        <Route exact path="/admin/docs" component={DocumentsContainer} />
        <Route exact path="/docsforreview" component={DocsForReviewContainer} />
        {/* <Route
          exact
          path="/docs"
          render={props => (
            <DocumentsContainer {...props} requestUrl={urlToGetDocsByUser} />
          )}
        /> */}
        {/* <Route
          exact
          path="/admin/docs/:id"
          component={DocumentDetailsContainer}
        /> */}
        <Route
          exact
          path="/docs/:id"
          render={props => (
            <DocumentDetailsContainer {...props} onlySubmit={true} />
          )}
        />{" "}
        <Route
          exact
          path="/admin/docs/:id"
          render={props => (
            <DocumentDetailsContainer {...props} onlySubmit={false} />
          )}
        />
        <Route exact path="/admin/usergroups" component={UserGroupsContainer} />
        <Route
          exact
          path="/admin/usergroups/:title"
          component={UserGroupDetailsContainer}
        />
        <Route
          exact
          path="/admin/users/:username"
          component={UserDetailsContainer}
        />
        <Route
          exact
          path="/admin/newusergroup"
          component={CreateUserGroupsContainer}
        />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
