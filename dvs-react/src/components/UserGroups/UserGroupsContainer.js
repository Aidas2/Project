import React, { Component } from "react";

import UserGroupsComponent from "./UserGroupsComponent";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../images/home.png";
import infoIcon from "../../images/info-icon.png";

class DocumentTypesContainer extends Component {
  state = { userGroups: [] };

  componentDidMount() {
    axios
      .get("http://localhost:8081/api/groups")
      .then(response => {
        this.setState({ userGroups: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    console.log(
      "ComponentDidMount inside DocumentTYpesCOntainer >>>>>>>>>> this.state.userGroups>>>>.",
      this.state.userGroups
    );
  }

  render() {
    var userGroupsArrayToRenderId = this.state.userGroups.map(oneGroupObj => {
      return (
        <UserGroupsComponent
          key={oneGroupObj.title}
          groupId={oneGroupObj.title}
        />
      );
    });

    var userGroupsArrayToRenderTitle = this.state.userGroups.map(
      oneGroupObj => {
        return (
          <UserGroupsComponent
            key={oneGroupObj.title}
            groupTitle={oneGroupObj.title}
          />
        );
      }
    );

    return (
      <div>
        <div className="container-fluid m-2 ">
          <h2 className="display-6 normal-padding">
            Vartotojų grupės
            <div className="logo-info">
              <img src={infoIcon} className="info-icon-style" alt="info icon" />
              <span className="tooltiptext">
                Šiame meniu galima kurti ir peržiūrėti vartotojų grupes.
              </span>
            </div>
          </h2>

          <h5 className="display-6 normal-padding second-navigation-style ">
            <Link to={"/"}>
              <img src={logo} width="20" height="10" alt="logo icon" />
            </Link>
            &ensp;/ &ensp;
            <Link to={"/admin"} className="second-navigation">
              Administratoriaus rolė
            </Link>
            &ensp;/ &ensp;
            <Link to={"/admin/usergroups"} className="second-navigation">
              Vartotojų grupės
            </Link>
          </h5>

          <Link
            to={"/admin/newusergroup"}
            className="btn btn-outline-success m-2"
          >
            Kurti naują vartotojų grupę
          </Link>
          <p />
          <input type="checkbox" id="Document-type-box" />
          <label id="Document-type-container" htmlFor="Document-type-box">
            <div id="button " className="collapsed-style">
              Paspauskite ant šio teksto, tam kad būtų galima peržiūrėti/
              paslėpti sukurtas vartotojų grupes:
              <ul id="Document-type-bar-appear" className="navbar-nav mr-auto">
                <table className="table table-active table-style-rounded">
                  <tbody>
                    <tr>
                      <th className="col-1 Table-number-style">#</th>
                      <th className="col-11 Table-action-style">
                        Dokumento tipo pavadinimas
                      </th>
                    </tr>

                    <tr>
                      <td className="table-action-size">
                        {userGroupsArrayToRenderId}
                      </td>
                      <td className="table-action-size">
                        {userGroupsArrayToRenderTitle}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ul>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default DocumentTypesContainer;
