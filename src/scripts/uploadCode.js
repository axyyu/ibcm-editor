const blankIbcm = {
  opcode: '0',
  body: '000',
  comments: '',
  description: 'halt',
  userEdit: false
};

async function uploadCode(file) {
  let content = await readFileContent(file);
  content = content.split('\n');
  let ibcm = content.map(item => {
    let components = item.split('\t');
    if (components.length <= 2) {
      return blankIbcm;
    }
    return {
      opcode: components[0].substring(0, 1),
      body: components[0].substring(1, 4),
      comments: components.length >= 4 ? components[3].trimRight() : '',
      description: components.length >= 3 ? components[2].trimRight() : '',
      userEdit: false
    };
  });

  return ibcm;
}

function readFileContent(file) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result);
    reader.onerror = error => reject(error);
    reader.readAsText(file);
  });
}

export default uploadCode;
