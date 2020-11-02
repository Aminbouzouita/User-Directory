export async function getUsers() {
    const promise = fetch(`https://randomuser.me/api/?results=200`)
      .then(response => {
        if(response.status >= 400) {
          return `Response invalid ( ${response.status} )`;
        }
        return response.json();
      })
      .then(({results}) => {
        return results;
      })
      .catch(error => {
        console.log(error);
      });
  
    return promise;
  }