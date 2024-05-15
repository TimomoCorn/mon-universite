import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'


class Routes extends Component {
    render () {
        return (
            <Router history={history}>
                <div>
                    <header className="header container">
                        <nav className="navbar">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">DNGGITGN</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"
                    >
                        <Route exact path="/" component={Home} />
                        <Route path="/p/1" component={One} />
                        <Route path="/p/2" component={Two} />
                        <Route path="*" component={NotFound} />
                    </AnimatedSwitch>
                    {/*<Switch>*/}
                        {/*<Route exact path="/" component={Home} />*/}
                        {/*<Route path="/p/1" component={One} />*/}
                        {/*<Route path="/p/2" component={Two} />*/}
                        {/*<Route path="*" component={NotFound} />*/}
                    {/*</Switch>*/}
                </div>
            </Router>
        )
    }
}

export default Routes