export function checkJWT() {
  const localdb = localStorage.getItem('moov');
  return localdb;
}
