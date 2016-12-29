import superagent from 'superagent'
import Request from 'superagent'

var searchFourSquare = (query) => {
  var url = `https://api.foursquare.com/v2/venues/search?near=${query}&limit=10&query=tacos&client_id=U4BVKAV0XON43Z2ADZMXK4ERXYWA0P10ATASRIWZZJZXBJAJ&client_secret=3GXHLB4140JZ25TGJF410E2B4Q5VE2YBQIISGWPUWHV1O4CK&v=20161229`
  console.log('working')
  Request.get(url).then( (response) => {
    var venues = response.body.response.venues
    this.setState({
      venues: venues
    })
  })
}

export default searchFourSquare;