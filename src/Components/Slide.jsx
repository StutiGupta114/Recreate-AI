import React from 'react';

class Slide extends React.Component {
    render() {
        return (
            <div>
                <div onDragOver={e => { this.props.onDragOver(e) }}
                    onDrop={(e) => { this.props.onDrop(e, 'Slide') }}
                    className="slide">Slide </div>
                <div style={{ textAlign: "center" }}>
                    <button style={{ display: 'inline-block' }} onClick={this.props.displaySlide}><i className="plus circle icon"></i></button>
                </div>
            </div>
        );
    }
}
export default Slide;