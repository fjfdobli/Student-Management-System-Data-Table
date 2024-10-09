import React from 'react';
import "../css/style.css"

const Filter = ({ searchTerm, setSearchTerm, minDate, setMinDate, maxDate, setMaxDate, students, setFilteredStudents }) => {
  
  const handleFilter = () => {
    const filtered = students.filter((student) => {
      const matchesSearchTerm =
        student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.age.toString().includes(searchTerm)

      const studentDate = new Date(student.birthdate).toISOString().split("T")[0]
      const matchesDateRange =
        (!minDate || studentDate >= minDate) &&
        (!maxDate || studentDate <= maxDate)

      return matchesSearchTerm && matchesDateRange
    })

    setFilteredStudents(filtered)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    handleFilter()
  }

  const handleMinDateChange = (e) => {
    setMinDate(e.target.value)
    handleFilter()
  }

  const handleMaxDateChange = (e) => {
    setMaxDate(e.target.value)
    handleFilter()
  }

  return (
    <div className="filter-container">
      <div className="filter-row">
        <label htmlFor="filter" className="filter-label">Filter:</label>
        <input
          type="text"
          id="filter"
          className="textbox"
          placeholder="Last Name, First Name, Age, or Course"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="date-filters">
        <div className="date-filter">
          <label htmlFor="minDate">Min Date:</label>
          <input type="date" id="minDate" value={minDate} onChange={handleMinDateChange} />
        </div>
        <div className="date-filter">
          <label htmlFor="maxDate">Max Date:</label>
          <input type="date" id="maxDate" value={maxDate} onChange={handleMaxDateChange} />
        </div>
      </div>
    </div>
  )
}

export default Filter
