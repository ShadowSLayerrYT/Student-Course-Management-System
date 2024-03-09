import React from 'react';
import {errorResponse, getSession } from './main';
import Axios from 'axios';
import './myprofile.css'; // Import CSS file

export function profileInfo() {
    var url = "http://localhost:5000/myprofile/info";
    Axios.post(url, {emailid : getSession("sid")})
        .then(res => loadInfo(res))
        .catch(err => errorResponse(err));
}

export function loadInfo(res) {
    var data = res.data;
    var L1 = document.getElementById('L1');
    var L2 = document.getElementById('L2');
    var L3 = document.getElementById('L3');
    var L4 = document.getElementById('L4');
    L1.innerHTML = `<b style='color:red'>${data[0].firstname}</b>`;
    L2.innerText = data[0].lastname;
    L3.innerText = data[0].contactno;
    L4.innerText = data[0].emailid;
}

class MyProfile extends React.Component {
    constructor() {
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");
        profileInfo();
    }

    render() {
        return (
            <div className='my-profile'> {/* Apply CSS class */}
                <h3>My Profile</h3>
                <table className='profile-table'> {/* Apply CSS class */}
                    <tbody> {/* Wrap table rows in tbody */}
                        <tr>
                            <th className='firstcolumn'>First Name</th> {/* Apply CSS class */}
                            <td><label className='profile-label' id='L1'></label></td> {/* Apply CSS class */}
                        </tr>
                        <tr>
                            <th className='firstcolumn'>Last Name</th> {/* Apply CSS class */}
                            <td><label className='profile-label' id='L2'></label></td> {/* Apply CSS class */}
                        </tr>
                        <tr>
                            <th className='firstcolumn'>Contact No.</th> {/* Apply CSS class */}
                            <td><label className='profile-label' id='L3'></label></td> {/* Apply CSS class */}
                        </tr>
                        <tr>
                            <th className='firstcolumn'>Email Id</th> {/* Apply CSS class */}
                            <td><label className='profile-label' id='L4'></label></td> {/* Apply CSS class */}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyProfile;
