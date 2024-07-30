import React, { useState, useEffect } from 'react';
import '../App.css';

function Sgpa1(props) {
    const { data } = props;
    const [sgpa, setSgpa] = useState(0);
    const [courses, setCourses] = useState({});
    const [data1, setData1] = useState({});
    const [totalCredits, setTotalCredits] = useState(0);

    useEffect(() => {
        let tempCourses = {};
        let tempData1 = {};
        let credits = 0;

        data.forEach(course => {
            tempCourses[course.name] = course.credits;
            tempData1[course.name] = 10;
            credits += course.credits;
        });

        setCourses(tempCourses);
        setData1(tempData1);
        setTotalCredits(credits);
    }, [data]);

    function handleData(name, target) {
        setData1(prevData1 => ({
            ...prevData1,
            [name]: parseInt(target.value)
        }));
    }

    function getResult() {
        let tempGainCredits = 0;

        Object.keys(data1).forEach(key => {
            tempGainCredits += data1[key] * courses[key];
        });

        const newSgpa = tempGainCredits / totalCredits;
        setSgpa(newSgpa);
    }

    return (
        <div className="container">
            <h2>Course List</h2>
            <table>
                {data.map((course, index) => (
                    <tr className="course-item" key={index}>
                        <th><label>{course.name}</label></th>
                        <td>
                            <select
                                className="select"
                                onChange={(e) => handleData(course.name, e.target)}
                                value={data1[course.name]}
                            >
                                <option value="10">A+</option>
                                <option value="9">A</option>
                                <option value="8">B</option>
                                <option value="7">C</option>
                                <option value="6">D</option>
                                <option value="5">E</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </table>

            <button className="button1" onClick={getResult}>Get SGPA</button>
            <div className="result">
                <h1>Calculated SGPA
                    <div style={{ color: "green", fontSize: '20px' }}>{sgpa.toFixed(2)}</div>
                </h1>
            </div>
            <h4>We apologize if there are any mistakes</h4>
        </div>
    );
}

export default Sgpa1;
