const API = "http://localhost:3000/api/v1/players";

export function get(path) {
  return fetch(API + path, {
   
  }).then((result) => result.json());
}