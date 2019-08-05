import React, {Component} from "react";
import  { connect } from 'react-redux';
import { loadJoke } from '../store/actions/app';

class App extends Component {
	constructor(props) {
		super(props);
    }
    render () {
        let jokeList = this.props.app;
        return (
            <section className="feed">
                <a onClick={ e=> this.addNewJoke() }> MORE!!! </a>
                {
                    jokeList.map( joke => {
                        return (
                            <article key={joke.id}> 
                                {joke.value}
                            </article>
                        );
                    } )
                }
            </section>
        );
    }

    addNewJoke() {
        this.props.loadJoke();
    }
}

export default connect (
    state => (state),
    { loadJoke }
)(App);