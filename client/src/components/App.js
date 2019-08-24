import {combineActionCreators, bindActionCreators} from 'redux';
import {connect} from 'redux-redux';
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

function mapStateToProps(state){
  return{
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps , mapDispatchToProps )(Main);
export default App;
