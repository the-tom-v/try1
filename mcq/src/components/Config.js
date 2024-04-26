/**
 import React from 'react'

const Config = () => {
  return (
    <div>
        <h1>Add Course </h1>
    <div>
        <label>Course</label>
        <input type="text" name="course" id="course"></input>
        <button>Add Course</button>
        </div>
    <div>
    <label>Test Series</label>
        <input type="text" name="course" id="course"></input>
        <button>Add Course</button>
    </div>
        
    </div>
  )
}

export default Config

*/

import React, { useState } from 'react';
import axios from 'axios';

const Config = () => {
  const [courseName, setCourseName] = useState('');
  const [testSeriesName, setTestSeriesName] = useState('');

  const handleAddCourse = () => {
    // Check if courseName is not empty
    if (courseName.trim() !== '') {
      // Send a POST request to add the new course
      axios.post('http://localhost:5000/courses', { name: courseName })
        .then(response => {
          console.log('Course added successfully:', response.data);
          // Reset the input field
          setCourseName('');
        })
        .catch(error => {
          console.error('Error adding course:', error);
        });
    } else {
      console.error('Course name cannot be empty!');
    }
  };

  const handleAddTestSeries = () => {
    // Check if testSeriesName is not empty
    if (testSeriesName.trim() !== '') {
      // Send a POST request to add the new test series
      axios.post('http://localhost:5000/testSeries', { name: testSeriesName })
        .then(response => {
          console.log('Test series added successfully:', response.data);
          // Reset the input field
          setTestSeriesName('');
        })
        .catch(error => {
          console.error('Error adding test series:', error);
        });
    } else {
      console.error('Test series name cannot be empty!');
    }
  };

  return (
    <div>
      <h1>Add Course</h1>
      <div>
        <label>Course</label>
        <input
          type="text"
          name="course"
          id="course"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button onClick={handleAddCourse}>Add Course</button>
      </div>
      <h1>Add Test Series</h1>
      <div>
        <label>Test Series</label>
        <input
          type="text"
          name="testSeries"
          id="testSeries"
          value={testSeriesName}
          onChange={(e) => setTestSeriesName(e.target.value)}
        />
        <button onClick={handleAddTestSeries}>Add Test Series</button>
      </div>
    </div>
  );
};

export default Config;
