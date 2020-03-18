function exportCode(ibcm) {
  var outputStr = '';
  for (var i = 0; i < ibcm.length; i++) {
    var line =
      ibcm[i].opcode +
      ibcm[i].body +
      '\t' +
      i.toString(16).padStart(3, '0') +
      '\t' +
      ibcm[i].description +
      '\t' +
      ibcm[i].comments;
    outputStr += line.trimRight() + '\n';
  }

  const element = document.createElement('a');
  const file = new Blob([outputStr], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'file.ibcm';
  document.body.appendChild(element);
  element.click();
}
export default exportCode;
