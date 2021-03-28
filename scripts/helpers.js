const formatTime = (date) => new Date(date).toISOString();

const sortAsc = (a, b) => new Date(a.timestamp) - new Date(b.timestamp);

const sortDesc = (a, b) => new Date(b.timestamp) - new Date(a.timestamp);

const sortData = (data, sort) => {
  const sortFn = sort === 'asc' ? sortAsc : sortDesc;

  return data.sort(sortFn);
};

const toggleValue = (list, value) => {
  return !list.includes(value)
    ? [...list, value]
    : list.filter((val) => val !== value);
};
