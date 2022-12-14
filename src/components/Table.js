import React from 'react'

function Table({list, colNames, height='auto'}) {
  return (
    <div style={{width: "70%", boxShadow: "3px 4px 3px #ccc"}}>{list.length>0 && (
      <table cellSpacing="0" style = {{width: "100%", height:height, padding: '3vh 10px'}}>
        <thead style={{backgroundColor:"black", color: "white"}}>
          <tr>
            {colNames.map((headerItem, index) => (
              <th key = {index}>
                {headerItem.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(list).map((obj, index) => (
            <tr key={index}>
              {Object.values(obj).map((value, index2) => (
                <td key={index2}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
      
      </div>
  )
}

export default Table