import { Slider } from "antd";
import { connect } from "react-redux";
import { AppDispatch, AppState, getPrice } from "../../../../store";

interface StateProps {
  price: number[];
}
interface DispatchProps {
  getPrice: (price: number[]) => Promise<void>;
}

type PriceComponentProps = StateProps & DispatchProps;

const PriceComponent: React.FC<PriceComponentProps> = (props) => {
  const { price, getPrice } = props;
  return (
    <>
      <span className="filter-title">диапазон цены</span>
      <Slider
        min={0}
        max={100000}
        step={1000}
        range
        defaultValue={[price[0], price[1]]}
        onChange={(value) => {
          getPrice(value);
        }}
      />
      <div className="count-ranges">
        <div>{price[0]} ₽</div>
        <div>{price[1]} ₽</div>
      </div>
      <span className="filter-details">
        Стоимость за сутки пребывания в номере
      </span>
    </>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  price: state.filtersData.price,
});
const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getPrice: (price) => dispatch(getPrice(price)),
});

export const Price = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceComponent);
