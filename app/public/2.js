var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText).msg, 'aaa')
  }
}
// xhr.withCredentials = true
xhr.open('GET', 'http://x.stuq.com:7001/cros')
xhr.send(null)