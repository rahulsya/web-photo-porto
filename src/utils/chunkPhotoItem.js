export default (data, size) => {
  let chunkSize = Math.ceil(data.length / size);
  let tempData = [];

  for (let index = 0; index < data.length; index += chunkSize) {
    let chunkArray = data.slice(index, index + chunkSize);
    tempData.push(chunkArray);
  }

  return tempData;
};
