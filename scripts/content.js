chrome?.runtime?.onMessage.addListener(function (req) {
  alert(req);
})