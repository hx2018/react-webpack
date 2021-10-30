import React, { useState } from "react";
import { connect } from "react-redux";
import { increment } from "../../../../src/redux/action";

function Counter(props) {
  const { count, add, caption } = props;

  return (
    <div>
      <input
        type="button"
        value={`${caption} +`}
        onClick={(e) => {
          add(caption);
        }}
        // value="+"
      />
      <p>Counter: {count}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  // ownProps就是除state以外获取的props，这里是caption
  return { count: state[ownProps.caption] };
};

const mapActionToProps = (dispatch) => ({
  add: (caption) => dispatch(increment(caption)),
});

export default connect(mapStateToProps, mapActionToProps)(Counter);
