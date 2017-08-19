/*
  app inventory.
  takes a list of applications and places them in a database, and shows them.

  applications have many configuration items
  configuration items have a type


 */
new Vue({
  el: '#app',
  data: {
    message: 'Greg says Vue.js! right@!!!!'

  }
})

app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on FOOOOO ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
