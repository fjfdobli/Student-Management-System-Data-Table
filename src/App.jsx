import React, { useState } from "react";
import Filter from "./components/Filter"
import DataTable from "./components/StudentTable"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [minDate, setMinDate] = useState("")
  const [maxDate, setMaxDate] = useState("")

  const studentsData = [
    { lastName: "Dobli", firstName: "Ferdinand John", course: "BSIT", birthdate: "2003-06-23" },
    { lastName: "User1", firstName: "User1", course: "BSIS", birthdate: "2002-08-20" },
    { lastName: "User2", firstName: "User2", course: "BSCS", birthdate: "2004-03-10" },
    { lastName: "User3", firstName: "User3", course: "BSDS", birthdate: "2001-07-25" },
  ]

  return (
    <div>
      <h1>Student Data Table</h1>
      <Filter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate}
      />
      <DataTable 
        students={studentsData}
        searchTerm={searchTerm} 
        minDate={minDate} 
        maxDate={maxDate} 
      />
    </div>
  )
}

export default App
