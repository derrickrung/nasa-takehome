const handleTelemetryChange = (id) => (evt) => {
  evt.target.classList.toggle('selected');

  $state.telemetryIds = toggleValue($state.telemetryIds, id);

  const hasRemovedId = !$state.telemetryIds.includes(id);

  hasRemovedId
    ? socket.send(`unsubscribe ${id}`)
    : socket.send(`subscribe ${id}`);
};

const handleSortChange = (evt) => {
  $state.sort = $state.sort === 'asc' ? 'desc' : 'asc';
};

document
  .querySelector('button.pwr-v')
  .addEventListener('click', handleTelemetryChange('pwr.v'));

document
  .querySelector('button.pwr-c')
  .addEventListener('click', handleTelemetryChange('pwr.c'));

document
  .querySelector('th.timestamp')
  .addEventListener('click', handleSortChange);
