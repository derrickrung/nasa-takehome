const renderTableData = () => {
  const body = $state.data.reduce((bodyString, { id, timestamp, value }) => {
    bodyString += `
      <tr>
        <td>${id}</td>
        <td>${formatTime(timestamp)}</td>
        <td>${value}</td>
      </tr>
    `;

    return bodyString;
  }, '');

  document.getElementById('table-body').innerHTML = body;
};
