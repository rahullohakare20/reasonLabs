
import { style } from "../task_2/task_2.style";

export function InformationTable({ phoneBookData, handleDelete }) {
  return phoneBookData && phoneBookData.length > 0 ?
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
          <th style={style.tableCell}>Action</th>
        </tr>
      </thead>
      <tbody>
        {phoneBookData.map((data) =>
          <tr key={`${data.userFirstname}-${data.userLastname}`}>
            <td style={style.tableCell}>{data.userFirstname}</td>
            <td style={style.tableCell}>{data.userLastname}</td>
            <td style={style.tableCell}>{data.userPhone}</td>
            <td
              style={style.tableCellDelete}
              onClick={() => handleDelete(data.userFirstname, data.userLastname)}
            >
               &#10060;
            </td>
          </tr>
        )}
      </tbody>
    </table> :
    <div style={style.noRecord}>No Records Found</div>
}
