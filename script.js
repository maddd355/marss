function message() {
  let message = document.getElementById("message").value;
  let name = document.getElementById("name").value;
  const webhook = https://discord.com/api/webhooks/1215890729117814814/F4mKSuHvvf__3oSvteF4-rmDoFwTlWiPea6F039-IiCc_m2E9KkzrPuCRBwmGv-nPc67;
  const contents = `Name: ${name}\nMessage: ${message}`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}
