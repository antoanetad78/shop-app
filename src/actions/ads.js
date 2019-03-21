import request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const LOAD_ADS = 'LOAD_ADS'

export const adsLoaded = ads => ({
    type:LOAD_ADS,
    payload:ads
})

//action creators need redux thunk, for getState to work as well as the action creator to dispatch, it needs to be used as this:
//actionCreator = () => (dispatch, getState) => {} -> thunk is a function that returns a function that's why
export const loadAds = () => (dispatch, getState) => {
    console.log('getState test:', getState)
    console.log('dispatch test: ', dispatch);
    
    // if(getState().ads !==[]) return;
    
    
    
    request
        .get(baseUrl)
        .then(response => {
            console.log('response body: ',response.body)
            return dispatch(adsLoaded(response.body))
        })
        .catch(console.error)
}



