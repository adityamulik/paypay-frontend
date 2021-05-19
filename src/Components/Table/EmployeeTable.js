import { forwardRef } from 'react';
import React, { useState, useEffect }  from 'react';
import MaterialTable from 'material-table';
import { Link, useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RateReviewIcon from '@material-ui/icons/RateReview';
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
import Tooltip from '@material-ui/core/Tooltip';
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

const EmployeeTable = () => {

  const [data, setData] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('/api/employees')
      .then(res => {      
        setData(res.data);
      })
      .catch(error=>{
        setErrorMessages(["Cannot load user data"])
        setIserror(true)
      })
    
  },[])

  const newData = data.map(item => ({
    ...item,
    feedback_count: item.feedback.length
  }))

  
  return (
    <div>
      <MaterialTable
        icons={tableIcons}
        columns = {[
          { title: 'Emp ID', field: 'employee_id', editable: 'never'},
          { title: 'Name', field: 'name'},
          { title: 'Email', field: 'email'},
          { title: 'Role', field: 'role'},
          { title: 'Performance Review', field: 'performance_review'},
          { title: 'Feedback Count', field: 'feedback_count'}
        ]}
        data = {newData}
        title = "Employee Table"
        options={{
          search: false,
          actionsColumnIndex: -1
        }}
        actions={[
          {
            icon: () => <Tooltip title="View" aria-label="add"><RateReviewIcon /></Tooltip>,
            // onClick: (event, rowData) => window.location.href=`/employee/${rowData.employee_id}`
            onClick: (event, rowData) => history.push(`/employee/${rowData.employee_id}`, {datas: rowData})
          }
        ]}
      />
    </div>
  )
};

export default EmployeeTable;