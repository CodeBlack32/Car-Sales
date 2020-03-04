import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addFeature, removeFeatureAction } from "./actions";

const App = props => {
  const { car, additionalFeatures, additionalPrice } = props;

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeatureAction(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log(item);
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures onRemove={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          onBuy={buyItem}
          additionalFeatures={additionalFeatures}
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.carReducer.car,
    additionalPrice: state.carReducer.additionalPrice,
    additionalFeatures: state.carReducer.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature, removeFeatureAction })(
  App
);
