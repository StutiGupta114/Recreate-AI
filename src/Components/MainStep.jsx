import React from 'react';
import '../Style/MainStep.css';
import Story from './Story';
import Media from './Media';
import Music from './Music';
import Slide from './Slide';

class MainStep extends React.Component {
    state = {
        type: 'Story',
        slideCount : 1,
        taskDestination : 'Slide'
    }

    getDisplayData = (event) => {
        this.setState({ type: event.target.id });
    }

    getDisplayDetails = () => {
        if (this.state.type === 'Story') {
            return <Story />
        }
        if (this.state.type === 'Media') {
            return <Media onDragStart = {this.onDragStart}/>
        }
        if (this.state.type === 'Music') {
            return <Music />
        }
    }

    displaySlide = () => {
        this.setState({slideCount : this.state.slideCount + 1});
    }

    displaySlideBoxes = () => {
        var renderedList = [];
        for(var i=0; i<this.state.slideCount; i++){
            console.log(i);
            renderedList.push(<Slide key = {i} onDragOver = {this.onDragOver} displaySlide = {this.displaySlide}
                onDrop = {this.onDrop}/>)
        }
        return renderedList;
    }

    onDragOver = (event) =>{
        event.preventDefault();
    }

    onDragStart = (event, id) => {
        console.log('dragstart: ', id);
        event.dataTransfer.setData("id", id);
    }

    onDrop = (event, status) => {
        let id = event.dataTransfer.getData("id");
        console.log(id);
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    <div className='container-left'>
                        <div id='Story' onClick={this.getDisplayData}>Story</div>
                        <div id='Media' onClick={this.getDisplayData}>Media</div>
                        <div id='Music' onClick={this.getDisplayData}>Music</div>
                    </div>
                    <div>{this.getDisplayDetails()}</div>
                </div>
                <div className='container-right'>
                    {this.displaySlideBoxes()}
                </div>
            </div>
        );

    }
}

export default MainStep;