function exportCode(ibcm) {
  var codeLines = [];
  var maxLength = 0;
  var lastHalt = ibcm.length;

  for (var i = ibcm.length - 1; i >= 0; i--) {
    if (
      !(
        ibcm[i].opcode === '0' &&
        ibcm[i].body === '000' &&
        ibcm[i].body === '' &&
        ibcm[i].description === ''
      ) &&
      lastHalt === ibcm.length
    ) {
      lastHalt = i + 2;
    }

    let line = `${ibcm[i].opcode + ibcm[i].body}\t${i
      .toString(16)
      .padStart(3, '0')}\t${ibcm[i].description}`;

    if (line.length > maxLength) maxLength = line.length;

    codeLines.unshift(line.trimRight());
  }

  var outputStr = '';
  for (var j = 0; j < lastHalt; j++) {
    let line = codeLines[j].padEnd(maxLength, ' ') + '\t' + ibcm[j].comments;
    outputStr += line + '\n';
  }

  const element = document.createElement('a');
  const file = new Blob([outputStr], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'file.ibcm';
  document.body.appendChild(element);
  element.click();
}

export default exportCode;
