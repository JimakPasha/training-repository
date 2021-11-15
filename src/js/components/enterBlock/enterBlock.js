import './enterBlock.scss';

const enterBlock = () => {
  return `
    <div class="enter">
      <h3 class="enter__title">Enter date</h3>
      <input class="enter__input" type="text" />
      <button class="enter__btn">Ok</button>
    </div>
    <div class="information-number"></div>
  `;
};

export default enterBlock;
