import React, { useState } from 'react';
import Sgpa1 from './Sgpa1';
import { ds1, ds2, ds3, ds4, ds5, ds6,ds7 } from '../Data/CSD1'; 
import {cs1,cs2,cs3,cs4,cs5,cs6,cs7} from '../Data/CSE1';
import {co1,co2,co3,co4,co5,co6,co7} from '../Data/CSO1';
import {cm1,cm2,cm3,cm4,cm5} from '../Data/CSM1';
import { ce1, ce2, ce3, ce4, ce5, ce6, ce7 } from '../Data/CE1';
import  { che1, che2, che3, che4, che5, che6 ,che7} from '../Data/CHE1'
import { ec1, ec2, ec3, ec4, ec5, ec6, ec7 } from '../Data/ECE1'
import { me1, me2, me3, me4, me5, me6, me7 } from '../Data/MEC1'
import { ee1, ee2, ee3, ee4, ee5, ee6, ee7 } from '../Data/EEE1'
import {Link } from 'react-router-dom';
function Sgpa() {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('1');
  const [show, setShow] = useState(true);

  const branchDatasets = {
    'CSD': [ds1, ds2, ds3, ds4, ds5, ds6,ds7],
    'CSE':[cs1,cs2,cs3,cs4,cs5,cs6,cs7],
    'CSO':[co1,co2,co3,co4,co5,co6,co7],
    'CSM':[cm1,cm2,cm3,cm4,cm5],
    'CE':[ce1, ce2, ce3, ce4, ce5, ce6, ce7],
    'CHE':[ che1, che2, che3, che4, che5, che6,che7],
    'MEC':[me1, me2, me3, me4, me5, me6, me7 ],
    'ECE':[ec1, ec2, ec3, ec4, ec5, ec6, ec7],
    'EEE':[ee1, ee2, ee3, ee4, ee5, ee6, ee7 ]
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  }

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  }
  
  const handleContinue = () => {
    setShow(!show);
  }

  let courses = [];
  if (branch && semester) {
    courses = branchDatasets[branch][semester - 1] || [];
  }

  return (
    <div>
      {show && (<><Link to='/' className="home"><h3>Go Back</h3></Link>
          <table className="container" id="branch-sem">
          <tr>
          <th><label htmlFor="branch">Branch:</label></th>
          <td>
          <select className="input" name="branch" value={branch} onChange={handleBranchChange}>
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science Engineering (CSE)</option>
            <option value="CSM">CSM (AI & ML)</option>
            <option value="CSD">CSD (Data Science)</option>
            <option value="CSO">CSO (Internet Of Things)</option>
            <option value="CHE">CHE (Chemical Eng)</option>
            <option value="ECE">ECE (Electronics and Communication Eng)</option>
            <option value="MEC">MEC (Mechanical ENg)</option>
            <option value="CE"> CIV (CIVIL Eng)</option>
            <option value="EEE">EEE(Electrical and Electronic Eng)</option>
          </select>
          </td>
          </tr>
          <tr>
            <th><label htmlFor="semester">Semester:</label></th>
            <td>
          <select className="input" name="semester" value={semester} onChange={handleSemesterChange}>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>

          </select>
          </td>
          </tr>
          <tr>
          <td colSpan={2}>
          <button className="button1" onClick={handleContinue}>Continue</button>
          </td>
          </tr>
        </table></>
      )}
      
      {!show && <><div className="home"><h3 onClick={handleContinue}> Go back</h3></div><Sgpa1 data={courses} /></>}
    </div>
  );
}

export default Sgpa;
