import { useState, useEffect } from 'react';

const useEmployeeRecords = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadEmployees = async () => {
      setIsLoading(true);
      const response = await fetch('/api/employees');
      const employees = await response.json();
      setEmployees(employees);
      setIsLoading(false);
    }

    loadEmployees();
  }, []);

  return { isLoading, employees, setEmployees };
};

export default useEmployeeRecords;