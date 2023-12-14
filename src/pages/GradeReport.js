
import React, { useState } from 'react';

const GradeReport = () => {
  const academicYears = [
    { year: 2022, semesters: ['First', 'Second'] },
    { year: 2023, semesters: ['First', 'Second'] },
  ];

  const coursesData = {
    2022: {
      First: [
        { course: 'DCIT 101', grade: 'A' },
        { course: 'DCIT 103', grade: 'B' },
        { course: 'DCIT 105', grade: 'A' },
        { course: 'STAT 101', grade: 'B' },
        { course: 'ECONS 101', grade: 'A' },
        { course: 'UGRC 110', grade: 'B' },
      ],
      Second: [
        { course: 'DCIT 102', grade: 'A' },
        { course: 'DCIT 104', grade: 'B' },
        { course: 'DCIT 106', grade: 'A' },
        { course: 'STAT 112', grade: 'B' },
        { course: 'ECONS 112', grade: 'A' },
        { course: 'UGRC 150', grade: 'B' },
      ],
    },
    2023: {
      First: [
        { course: 'DCIT 201', grade: 'A' },
        { course: 'DCIT 203', grade: 'B' },
        { course: 'DCIT 205', grade: 'A' },
        { course: 'DCIT 207', grade: 'B' },
        { course: 'DCIT 209', grade: 'A' },
        { course: 'CBAS 210', grade: 'B' },
      ],
      Second: [
        { course: 'DCIT 202', grade: 'A' },
        { course: 'DCIT 204', grade: 'B' },
        { course: 'DCIT 206', grade: 'A' },
        { course: 'DCIT 208', grade: 'B' },
        { course: 'DCIT 210', grade: 'A' },
        { course: 'CBAS 250', grade: 'B' },
      ],
    },
  };

  const [selectedYear, setSelectedYear] = useState(academicYears[0].year);
  const [selectedSemester, setSelectedSemester] = useState(academicYears[0].semesters[0]);

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const filteredCourses = coursesData[selectedYear][selectedSemester];

  return (
    <div>
      <h2>Grade Report</h2>

      <div>
        <label>
          Select Year:
          <select value={selectedYear} onChange={handleYearChange}>
            {academicYears.map((year) => (
              <option key={year.year} value={year.year}>
                {year.year}
              </option>
            ))}
          </select>
        </label>

        <label>
          Select Semester:
          <select value={selectedSemester} onChange={handleSemesterChange}>
            {academicYears.find((year) => year.year === selectedYear)?.semesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <h3>Grades for {selectedSemester} {selectedYear}</h3>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.course}>
                <td>{course.course}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeReport;
