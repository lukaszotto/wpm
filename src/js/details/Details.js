import React from 'react';
import { unsplash } from '../config'
import { toJson } from 'unsplash-js';

import PhotoDetails from './PhotoDetails';
import PhotoTags from './PhotoTags';
import PhotoAuthor from './PhotoAuthor';
import PhotoShare from './PhotoShare';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            details: null
        }
    }
    componentDidMount() {
        unsplash.photos.getPhoto(this.state.id)
            .then(toJson)
            .then(response => {
                this.setState({ details: response });
            });
    }


    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col s12 m6">
                        {this.state.details && <img className="responsive-img" alt={this.state.details.alt_description} src={this.state.details.urls.regular}></img>}
                        {this.state.details && <PhotoShare link={this.state.details.links} />}
                    </div>
                    <div className="col s12 m6">
                        {this.state.details && <PhotoDetails details={this.state.details} />}
                        {this.state.details && <PhotoAuthor user={this.state.details.user} />}
                        {this.state.details && <PhotoTags tags={this.state.details.tags} />}
                    </div>
                </div>
            </section>
        );
    }
}
export default Details;