import React from 'react'
import { connect } from 'react-redux'
import { loadAds } from '../actions/ads';
import ListAds from './ListAds'

class AdsListContainer extends React.Component {

    componentDidMount() {
        this.props.loadAds()
    }

    render() {
        console.log('this props ads: ',this.props.ads);
        
        return(
            <ListAds ads={this.props.ads} />
        )
    }
}

const mapStateToProps = state => {
    console.log('state',state);
    
    return state
}

export default connect(mapStateToProps, {loadAds})(AdsListContainer)
