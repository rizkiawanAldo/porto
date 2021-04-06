import React, { Component } from 'react';
import SnakeComp from './snakecomp';
import Food from'./food';
import { Slider } from '@material-ui/core';

class snake extends Component {
    componentDidMount() {
        document.onkeydown = this.onKeyDown;
    }
    constructor(props){
        super(props);
        this.state = {
            snakepot: [
                [0, 0],
                [2, 0]
            ],
            direction: 'KANAN',
            started: false,
            speed:3,
            foodloc:this.spawnFood(),
            score:0,
            highscore:0
        }
    }
  
    intervalID=0;
    
    spawnFood=()=>{
        let min=0
        let max=100;
        let randx= Math.floor(Math.random()*((max-min)/2))*2+min;
        let randy= Math.floor(Math.random()*((max-min)/2))*2+min;
        let loc=[randx, randy];
        return loc;
    }
   
    onrefresh=()=>{
       clearInterval(this.intervalID);
       this.intervalID= setInterval(this.movesnek, 400/this.state.speed)
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
            case 18:
                this.onStart();
                break;
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
                default:
                     
            }
            dots.push(head);
            if(head[0]===this.state.foodloc[0] && head[1]===this.state.foodloc[1]){   
                this.setState({
                    foodloc:this.spawnFood(),
                    score:this.state.score+1
                }) 
                
            }
            else if(head[0]>=100|| head[1] >= 100 ||head[0]<0|| head[1] < 0 ){
                this.onStart(); 
                if(this.state.score>this.state.highscore){
                    this.setState({
                        highscore:this.state.score
                    })
                }
                this.setState({
                    snakepot: [
                        [0, 0],
                        [2, 0]
                    ],
                    direction:"KANAN",
                    score:0
                });
                 
                alert("Game over boi")
               return;
            }
            else{
                dots.shift();
            }
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
                    <button  onClick={this.onStart} className="btn btn-success">
                        Start
                    </button>
                    <label>Speed</label>
                    <Slider
                        tabIndex="-1"
                        value={this.state.speed}
                        onChange={this.speedchange}
                        aria-labelledby="continuous-slider"
                        step={1}
                        min={1}
                        max={10}
                        valueLabelDisplay="off"
                    />

                </div>
                Score= {this.state.score}
                Highscore={this.state.highscore}
                <div className="snake-area">
                    <SnakeComp snakePot={this.state.snakepot} />
                    <Food loc={this.state.foodloc} started={this.state.started} />
                   
                </div>

            </div>
        )
    }
}

export default snake
