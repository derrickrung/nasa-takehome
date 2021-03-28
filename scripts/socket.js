let socket;

const initSocket = () => {
  socket = new WebSocket('ws://localhost:8080/realtime');

  socket.onopen = function (event) {
    $state.telemetryIds.forEach((id) => socket.send(`subscribe ${id}`));
  };

  socket.onmessage = function (event) {
    const parsedMsg = JSON.parse(event.data);

    const { sort } = $state;

    $state.data =
      sort === 'asc'
        ? [...$state.data, parsedMsg]
        : [parsedMsg, ...$state.data];
  };
};
