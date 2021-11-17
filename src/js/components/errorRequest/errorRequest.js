import homeBtn from '../homeBtn/homeBtn';
import './errorRequest.scss';

const errorRequest = () => {
  return `
    <div class="information-number__error">
      <p class="information-number__error-text">Error, please enter another number or reboot app</p>
      ${homeBtn()}
    </div>
  `;
};

export default errorRequest;
