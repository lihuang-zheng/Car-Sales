import React from 'react';

// import components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// import connect
import { connect } from "react-redux"

// import actions
import { removeFeature, buyItem } from "./actions/index"

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} additionalPrice={props.additionalPrice} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} additionalPrice={props.additionalPrice} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  { removeFeature, buyItem }
)(App);
