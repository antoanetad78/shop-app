import React, {Component} from 'react'

export default class ListAds extends Component {

    render(){
        console.log('this.props.ads',this.props.ads);
        
        if(this.props.ads === []) {
            return <p>Loading .... </p>
        }
        return(
            <div>
                <ul>
                    {this.props.ads.map((ad) => {
                      return (<li>
                            <p>{ad.title}</p>
                            <p>{ad.price}</p></li>)
                        })}
                </ul>
            </div>
        )
    }

}
