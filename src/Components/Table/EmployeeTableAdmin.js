import { forwardRef } from 'react';
import React, { useState, useEffect }  from 'react';
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const EmployeeTableAdmin = (employees) => {

  const [data, setData] = useState([]);
  const [iserror, setIserror] = useState(false);
const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/employees')
      .then(res => {
        setData(res.data)
      })
      .catch(error=>{
        setErrorMessages(["Cannot load user data"])
        setIserror(true)
      })
  },[])

  const handleRowDelete = (oldData, resolve) => {
    axios.delete(`/api/admin/employee/${oldData.employee_id}/remove/`)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    let errorList = []

    if(newData.name === undefined){
      errorList.push("Please enter name")
    }
    if(newData.email === undefined){
      errorList.push("Please enter email")
    }
    if(newData.role === undefined){
      errorList.push("Please enter a valid email")
    }

    if(errorList.length < 1){
      axios.put(`/api/admin/employee/${newData.employee_id}/update/`, newData)
        .then(res => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }
  
  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        columns = {[
          { title: 'Emp ID', field: 'employee_id', editable: 'never'},
          { title: 'Name', field: 'name'},
          { title: 'Email', field: 'email'},
          { title: 'Role', field: 'role'},
          { title: 'Performance Review', field: 'performance_review', editComponent: props => {
            return (
              <TextField 
                value={props.value}
                inputProps={{ maxLength: 242 }}
                onChange={(event) => {props.onChange(event.target.value)}}
              />
            )
          }}
        ]}
        data = {data}
        title = "Employee Table (For Admin)"
        options={{
          search: false
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              handleRowUpdate(newData, oldData, resolve)
            }),
          onRowDelete: oldData =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            })
            
        }}
      />
    </div>
  )
};

export default EmployeeTableAdmin;