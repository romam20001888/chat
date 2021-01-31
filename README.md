# chat
Чат на react native

var url = 'http://mobile.twcompany.ru/test.php'

axios.post(url)
  .then(res => { 
    console.log(res.data);
  }) 
  .catch(err => { 
    if (err.response) {
      console.log("client received an error response (5xx, 4xx)"); 
      console.log(err.response);
    } else if (err.request) { 
      console.log("client never received a response, or request never left "); 
      console.log(err.request);
    } else { 
      console.log("anything error");
      console.log(err);
    } 
  })



  dataBase

user:b21599_test
  password: Q02021999q
  db:b21599_test
