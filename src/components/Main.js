import React from "react";
import Sidebar from "./Sidebar";
import Output from "./Output";
const Main = () => {
    return (

        <div>

            <div className="article">
                <h1>Digital Clock with React JS</h1>
                <p>The main logic of how the clock should work goes here. Initially defining a constructor that will set the current state to a Date Object. Here we will define the component lifecycle, component which will render the clock information on the DOM.</p>
                <p>componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). setState will trigger the rendering and will happen before the browser updates the screen.</p>
                <p>componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. The code will do the necessary cleanup in this method.</p>
                <p>The render() function does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.</p>
                <p>And finally, we return the Clock component so it can be imported and used in rendering the DOM.</p>
                <h3 className="one">A sample program to display digital clock.</h3>
                <h3>Program</h3>
                <div className="program">
                    <table border="2px"><tr><td>
                        <pre>{`
class ClockFunction extends React.Component {
    constructor() {
        super();
        this.state = { time: new Date() }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; 

        return (<div>
            <h1>Digital Clock</h1>
            <h2>
                {time.toLocaleTimeString()}
            </h2>
        </div>);
    }
}
export default ClockFunction;
        
        `}</pre></td></tr></table>
                </div>
                <h3>Output</h3>
                <Output />
            </div>

            <Sidebar />
            <br></br>
        </div>
    )
};

export default Main;