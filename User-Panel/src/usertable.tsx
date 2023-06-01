import _users from "./users.json"
import { User } from "./store/UserType";
import { Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(
    name: string,
    email: string,
    phone: string,
  ) {
    return { name, email, phone };
  }

const users = _users as User[];
const renderUsers = users.map((item) =><div>{item.name}</div>);
const renderEmail = users.map((item) =><div>{item.email}</div>);
const renderPhone = users.map((item) =><div>{item.phone}</div>);
const rows = [
    createData(users[0].name, users[0].email, users[0].phone),
  ];
function UserTable(){
    return(
        <div>
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{renderUsers}</TableCell>
              <TableCell align="right">{renderEmail}</TableCell>
              <TableCell align="right">{renderPhone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <Pagination count={10} />
        </div>
    )
};

export default UserTable;