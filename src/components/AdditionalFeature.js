import React from 'react';
import { /*connect*/ useDispatch } from 'react-redux';

import { /*addFeature,*/ ADD_FEATURE } from '../actions/CarActions';

const AdditionalFeature = props => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={() => /*props.addFeature(props.feature)*/ dispatch({ type: ADD_FEATURE, payload: props.feature})}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     name: state.car.features.name,
//     price: state.car.features.price
//   };
// };

export default /*connect(mapStateToProps, { addFeature })(*/AdditionalFeature/*);*/
