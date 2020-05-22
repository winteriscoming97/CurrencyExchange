const checkStatus = function (response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request was either a 404 or 500');
}



export default checkStatus;
