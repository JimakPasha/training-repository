import './enterBlock.scss';

const enterBlock = (text) => {
  return `
    <div class="enter">
      <h3 class="enter__title">Enter ${text}</h3>
      <input class="enter__input" type="text" />
      <button class="enter__btn">Ok</button>
    </div>
    <div class="information-number"></div>
  `;
};

export default enterBlock;
