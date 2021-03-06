const BASE_URL = '/api/menu';

export function getAll() {
  return fetch(BASE_URL, {
    method: "GET",
    headers: { 'content-type': 'application/json' },
  }).then(res => res.json());
}

export function create(item) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item)
  }).then(res => res.json());
}

export function update(item) {
  return fetch(`${BASE_URL}/${item._id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item)
  }).then((res) => {
    return res.json()
  });
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

