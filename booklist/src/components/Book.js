import React, { Component } from 'react'


class Book extends Component {
    constructor() {
        super()
        this.state = {

            title: '',
            author: '',
            src: '',
        }

    }


    render() {

        return (

            <div className='book'>
                <div id='bookCover'>
                    <p><img src={this.props.img} onClick={() => { this.props.shelfPush(this.props.index) }} alt='a book is here' /></p>
                </div>
                <p>{this.props.title} by {this.props.author}</p>
            </div>
        )

    }
}

export default Book