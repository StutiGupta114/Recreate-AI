import React from 'react';
import faker from 'faker';
import '../Style/MainStep.css';

class Story extends React.Component {

    getStoryData = () => {
        var data = faker.lorem.paragraphs();
        for(var i = 1; i<10; i++)
            data = data.concat(faker.lorem.paragraphs());
        //console.log(data);
        return data;
    }

    render() {
        return (
            <div className='content-box'>
                {this.getStoryData()}
            </div>
        );
    }
}

export default Story;