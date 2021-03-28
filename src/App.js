import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.components";
import Header from "./components/header/header.component";
import {checkUserSession} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";


class App extends React.Component {
    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact={true} path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact={true} path="/checkout" component={CheckoutPage}/>
                    <Route exact={true} path="/signin"
                           render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
