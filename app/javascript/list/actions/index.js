export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
const ROOT_URL = '/api/v1/items';

export function fetchItems() {
  const promise = fetch(`${ROOT_URL}`, { credentials: 'same-origin' })
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
