const getDataNumber = async (number, typeNumber) => {
  const response = await fetch(`http://numbersapi.com/${number}/${typeNumber}`);
  const data = await response.text();
  return data;
};

export default getDataNumber;
