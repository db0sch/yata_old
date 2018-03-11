export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
// export const UPDATE_ITEM_POSITION = 'UPDATE_ITEM_POSITION';

const ROOT_URL = '/api/v1/items';

export function fetchItems(date) {
  const promise = fetch(`${ROOT_URL}?date=${date}`, { credentials: 'same-origin' })
    .then(response => response.json());
  return {
    type: FETCH_ITEMS,
    payload: promise
  };
}

export function updateItem(id, item) {
  const promise = fetch(`${ROOT_URL}/${id}`, {
    credentials: 'same-origin',
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ item })
  })
    .then(response => response.json());
  return {
    type: UPDATE_ITEM,
    payload: promise
  };
}

export function updateItemPosition({ id, position, dayPart }) {
  console.log(id, position, dayPart);
  const promise = fetch(`${ROOT_URL}/${id}`, {
    credentials: 'same-origin',
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      position,
      day_part: dayPart
    })
  })
    .then(response => response.json());
  console.log("hello")
  return {
    type: UPDATE_ITEM,
    payload: promise
  };
}
