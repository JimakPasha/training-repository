import homeBtn from '../homeBtn/homeBtn';
import './informationNumber.scss';

const informationNumber = (data) => {
  return `
    <p class="information-number__data">${data}</p>
    ${homeBtn()}
    `;
};

export default informationNumber;
