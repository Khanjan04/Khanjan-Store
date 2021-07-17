import React from 'react';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <BrowserRouter>
            <div className="grid-container">
            <Helmet>
                <title>Khanjan Store | Home</title>
            </Helmet>
                <header>
                    <Navbar></Navbar>
                    <nav id="nav-main">
                        <div className="nav_cat">
                            <ul>
                                <li>
                                    <div className="category" href="/">Shopping Categories :- </div>
                                </li>
                                <li>
                                    <a href="/">Pant</a>
                                </li>
                                <li>
                                    <a href="/">Shirt</a>
                                </li>
                                <li>
                                    <a href="/">Frock</a>
                                </li>
                                <li>
                                    <a href="/">T-Shirt</a>
                                </li>
                                <li>
                                    <a href="/">Blazzer</a>
                                </li>
                                <li>
                                    <a href="/">Capri</a>
                                </li>
                                <li>
                                    <a href="/">Hoodie</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <main className="main">
                    <div className="content">
                        <Route path="/products" component={ProductsScreen} />
                        <Route path="/shipping" component={ShippingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route path="/placeorder" component={PlaceOrderScreen} />
                        <Route path="/signin" component={SigninScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                    </div>
                </main>
                <footer>
                    <div className="middle-footer">
                        <div className="connect" href="/">Connect with Us :-  </div>
                        <li>
                            <a href="https://github.com/Khanjan04" target="_blank" without rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/khanjan-varma-5b3394183/" target="_blank" without rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://www.codechef.com/users/khan_0411" target="_blank" without rel="noopener noreferrer">CodeChef</a>
                        </li>
                    </div>
                    <hr class="solid"></hr>
                    <div className="main-footer">
                        All rights are reserved. Made by Khanjan Varma.
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}
export default App;
