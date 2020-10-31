import {connect} from 'react-redux'
import Home from '../components/Home';
import {addToCart, removeFromCart} from '../services/actions/action'

const mapStateToProps=state=>({
    cartData: state.cartItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler : data=>dispatch(addToCart(data)),
    removeFromCartHandler : data=>dispatch(removeFromCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home;