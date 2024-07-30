import React,{ useState } from 'react';
import { Link} from 'react-router-dom';
function Cgpa() {
  const [sem, setSem] = useState({
    sem1: 0,
    sem2: 0,
    sem3: 0,
    sem4: 0,
    sem5: 0,
    sem6: 0,
    sem7: 0,
    sem8: 0
  });

  const [cgpa, setCgpa] = useState(null);

  const handleData = (data, value) => {
    if(value==null){
      value=0;
    }
    if (value<5||value>10){
      window.alert("Please Enter correct value");
    }
    setSem(prevSem => ({
      ...prevSem,
      [data]: parseFloat(value) || 0 
    }));
  };

  const calculate = () => {
    let totalSubjects = 0;
    let totalSum =0;
    let incorrect=1;
    Object.keys(sem).forEach(key => {
      if (sem[key] !== 0 && sem[key]>5 && sem[key]<=10) {
        totalSubjects++;
        totalSum += sem[key];
      }else{
        if(sem[key]!==0){
        incorrect=0;}
        return;
      }
    });

    if (totalSubjects === 0||incorrect===0) {
      window.alert("Please Check Your Values");
      setCgpa(null);
      return;
    }

    const calculatedCgpa = totalSum / totalSubjects;
    setCgpa(calculatedCgpa.toFixed(2)); 
  };

  return (
    <><Link to='/' className="home"><h3>Go Back</h3></Link>
    <table className="container" id="cgpa-container">
      <tr>
        <th><label htmlFor="sem1">Semester 1</label></th>
        <td><input type="number" id="sem1" className="input" placeholder='Enter Sem1 Sgpa' onChange={(e) => handleData("sem1", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem2">Semester 2</label></th>
        <td><input type="number" id="sem2" className="input"  placeholder='Enter Sem2 Sgpa' onChange={(e) => handleData("sem2", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem3">Semester 3</label></th>
        <td><input type="number" id="sem3"  className="input"  placeholder='Enter Sem3 Sgpa' onChange={(e) => handleData("sem3", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem4">Semester 4</label></th>
        <td><input type="number" id="sem4"  className="input"  placeholder='Enter Sem4 Sgpa' onChange={(e) => handleData("sem4", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem5">Semester 5</label></th>
        <td><input type="number" id="sem5" className="input"  placeholder='Enter Sem5 Sgpa' onChange={(e) => handleData("sem5", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem6">Semester 6</label></th>
        <td><input type="number" id="sem6" className="input"  placeholder='Enter Sem6 Sgpa' onChange={(e) => handleData("sem6", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem7">Semester 7</label></th>
        <td><input type="number" id="sem7" className="input"  placeholder='Enter Sem7 Sgpa' onChange={(e) => handleData("sem7", e.target.value)} /></td>
      </tr>
      <tr>
        <th><label htmlFor="sem8">Semester 8</label></th>
        <td><input type="number" id="sem8" className="input"  placeholder='Enter Sem8 Sgpa' onChange={(e) => handleData("sem8", e.target.value)} /></td>
      </tr>
      <tr>
        <th colSpan={2}><button className="button1" onClick={calculate}>Calculate</button>
      {cgpa !== null && (
        <div className="result">
          <h1>Calculated CGPA: <div style={{color:"green"}}>{cgpa}</div></h1>

        <h4>We Apologize if there are any mistakes</h4>
        </div>
      )}
      </th>
      </tr>
    </table>
    </>
  );
}

export default Cgpa;
