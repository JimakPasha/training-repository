import informationNumber from '../components/informationNumber/informationNumber';
import errorRequest from '../components/errorRequest/errorRequest';

const getDataUsers = async (number, typeNumber) => {
  const response = await fetch(`http://numbersapi.com/${number}/${typeNumber}`);
  const data = await response.text();
  return data;
};

function renderDataRequest(number, typeNumber) {
  const blockInformation = document.querySelector('.information-number');
  blockInformation.innerHTML = ``;
  getDataUsers(number, typeNumber)
    .then((data) => {
      blockInformation.innerHTML = informationNumber(data);
    })
    .catch(() => {
      blockInformation.innerHTML = errorRequest();
    });
}

export default renderDataRequest;
