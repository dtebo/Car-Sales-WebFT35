import React from 'react';
import { /*connect*/ useDispatch } from 'react-redux';
import { /*removeFeature,*/ REMOVE_FEATURE } from '../actions/CarActions';

const AddedFeature = props => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => /*props.removeFeature(props.feature)*/ dispatch({type: REMOVE_FEATURE, payload: props.feature})}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     features: state.car.features
//   };
// };

export default /*connect(mapStateToProps, { removeFeature })(*/AddedFeature/*);*/
