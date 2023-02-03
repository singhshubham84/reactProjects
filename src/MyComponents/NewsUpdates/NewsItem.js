import React, { Component } from 'react';

export class NewsItem extends Component {
    
    render() {
        let { title, description ,imageUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://img.lemde.fr/2021/06/18/0/248/1619/1078/1440/960/60/0/62a732b_192023398-924ff76-15084-db9835-du2pn.png":imageUrl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
