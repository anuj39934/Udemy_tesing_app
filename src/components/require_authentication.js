import React , {Component} from 'react';
import { connect }  from 'react-redux';

export default function (ComposedComponent){

	class Authentication extends Component{
		static contextTypes = {
			router : React.PropTypes.object
		}
		componentWillMount(){
			debugger;
			if(!this.props.authenticated){
				this.context.router.push('/');	
			}
		}
		componentWillUpdate(nextProps){
			debugger;
			if(!nextProps.authenticated){
				this.context.router.push('/');
			}
		}

		render(){
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStatetoProps(state){
		return {authenticated : state.authenticated};
	}

	return connect(mapStatetoProps)(Authentication);
}