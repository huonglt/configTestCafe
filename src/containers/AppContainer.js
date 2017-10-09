import { connect } from 'react-redux';
import App from '../components/App/App';
import { loadAction } from '../reducers/actions';

const mapStateToProps = (state) => {
    return { ...state };
}


const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(loadAction())
        }    
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;