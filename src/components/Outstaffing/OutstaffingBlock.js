import style from './Outstaffing.module.css';

const OutstaffingBlock = ({ text, image, data, onTest }) => {
  return (
    <div className={style.outstaffing__box}>
      <img src={image} alt="img" />
      <p>{text}</p>
      <ul className={style.items}>
        {data.map((item, index) => (
          <li key={index.toString()} onClick={() => onTest(index)}>
            {index} {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutstaffingBlock;
