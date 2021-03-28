const initialState = {
  data: [],
  sort: 'asc',
  telemetryIds: ['pwr.v', 'pwr.c'],
};

const handleSideEffects = (prop) => {
  switch (prop) {
    case 'data': {
      return renderTableData();
    }

    case 'sort': {
      document.getElementById('caret').classList.toggle('desc');
      $state.data = sortData([...$state.data], $state.sort);
      return;
    }

    case 'telemetryIds': {
      return initData();
    }

    default:
      return;
  }
};

const stateHandler = {
  get: (obj, prop) => obj[prop],

  set: (obj, prop, value) => {
    obj[prop] = value;

    handleSideEffects(prop);

    return true;
  },
};

const $state = new Proxy(initialState, stateHandler);
