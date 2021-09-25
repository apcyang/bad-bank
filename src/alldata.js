import React from "react";
import { UserContext } from "./context";
import Table from "react-bootstrap/Table";

export default function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Venda</td>
            <td>venda.wen@icloud.com</td>
            <td>Password</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
