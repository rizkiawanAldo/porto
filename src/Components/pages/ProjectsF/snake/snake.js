import React, { Component } from 'react';
import SnakeComp from './snakecomp';
import ReactDOM from 'react-dom';
import { Slider } from '@material-ui/core';

class snake extends Component {
    intervalID=0;
    state = {
        snakepot: [
            [0, 0],
            [2, 0]
        ],
        direction: 'KANAN',
        started: false,
        speed:500
    }
    componentDidMount() {

        document.onkeydown = this.onKeyDown;
        //setInterval(this.movesnek, this.state.speed)



    }
    onrefresh=()=>{
       clearInterval(this.intervalID);
       this.intervalID= setInterval(this.movesnek, this.state.speed)
    }
    onStart = () => {      
        this.setState({
            started: !this.state.started
        });  
        this.onrefresh()   
    }
    onKeyDown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 87:
            case 38:
                if (this.state.direction !== 'BAWAH')
                    this.setState({ direction: 'ATAS' });
                break;
            case 83:
            case 40:
                if (this.state.direction !== 'ATAS')
                    this.setState({ direction: 'BAWAH' });
                break;
            case 68:
            case 39:
                if (this.state.direction !== 'KIRI')
                    this.setState({ direction: 'KANAN' });
                break;
            case 65:
            case 37:
                if (this.state.direction !== 'KANAN')
                    this.setState({ direction: 'KIRI' });
                break;
            default:
                console.log('key not valid');
                break;
        }

    }

    movesnek = () => {
        if (this.state.started) {
            let dots = [...this.state.snakepot];
            let head = dots[dots.length - 1];

            switch (this.state.direction) {
                case 'KANAN':
                    head = [head[0] + 2, head[1]];
                    break;
                case 'KIRI':
                    head = [head[0] - 2, head[1]];
                    break;
                case 'ATAS':
                    head = [head[0], head[1] - 2];
                    break;
                case 'BAWAH':
                    head = [head[0], head[1] + 2];
                    break;
            }
            dots.push(head);
            dots.shift();
            this.setState({
                snakepot: dots
            })
        }
    }
    speedchange=(event, newValue)=>{
        this.setState({
            speed:newValue
        })      
        this.onrefresh()
    }

    render() {
        return (
            <div >
                <div className='sneksettings'>
                    <button onClick={this.onStart} className="btn btn-success">
                        start
                    </button>

                    <Slider
                        value={this.state.speed}
                        onChange={this.speedchange}
                        aria-labelledby="continuous-slider"
                        step={50}
                        min={10}
                        max={500}
                        valueLabelDisplay="auto"
                    />

                </div>
                <div className="snake-area">
                    <SnakeComp snakePot={this.state.snakepot} />

                </div>

            </div>
        )
    }
}

export default snake
