// You can live edit this code below the import statements
import React from 'react';
import Slide from 'react-reveal/Slide';
import { useScroll, useWheel } from 'react-use-gesture'

export default function AnimatedTest(props) {
    /*constructor(props) {
        super(props);
        this.state = { show: false };
        this.handleClick = this.handleClick.bind(this);
    }*/
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(true)
    }

    /*const bind = useScroll(state => {
        setShow(true)
        console.log("wheeling", state);
    })*/

    /*const wheel = useWheel(state => {
        setShow(true)
        console.log("wheeling", state.wheeling);
    });*/

    const scroll = useScroll(state => {
        console.log("scrolling", state)

        if (state.offset[1] > 600) {// || state.offset[1] < 800) {
            setShow(true)
        } else if (state.offset[1] > 800){
            setShow(false)
        } else {
            setShow(false)
        }

        console.log("scrolling", show)
    }, {
        domTarget: window,
    });

    React.useEffect(scroll, [scroll]);


        return (
            <div >
            {/*<div {...wheel()}>*/}
                <Slide left opposite big cascade>{/*// when={show} >*/}
                    <div>
                        <h2>React Reveal</h2>
                        <h2>React Reveal</h2>
                        <h2>React Reveal</h2>
                    </div>
                </Slide>
                <button
                    className="btn btn-success my-5"
                    type="button"
                    onClick={handleClick}
                >
                    { show ? 'Hide' : 'Show' } Message
                </button>
            </div>
        );

}
/*

export default AnimatedTest;
*/
