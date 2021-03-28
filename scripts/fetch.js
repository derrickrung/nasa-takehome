const API_BASE = 'http://localhost:8080';

const getFetchUrl = (id, start, end) =>
  `${API_BASE}/history/${id}?start=${start}&end=${end}`;

const fetchTelemetry = (id) => {
  if (!id) return [];

  const msPerMin = 60000;
  const fifteenMinAgo = Date.now() - 15 * msPerMin;

  const url = getFetchUrl(id, fifteenMinAgo, Date.now());

  return fetch(url).then((res) => res.json());
};

const initData = async () => {
  const { telemetryIds } = $state;

  const data = await Promise.all(telemetryIds.map(fetchTelemetry));

  $state.data = sortData(
    data.reduce((acc, curr) => [...acc, ...curr], []),
    $state.sort,
  );
};
