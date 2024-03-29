import styles from '../styles';

const ProductSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      data-type="product"
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D] interactable`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default ProductSteps;
