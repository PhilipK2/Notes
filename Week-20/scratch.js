import { BrowswerRouter as Router, Route } from "react-router-dom";
//"as router" makes below possible or it would be <BroswerRouter></BrowserRouter>

const Route = (props) => {
    if (props.component == Home){
        render Home component
        update url to props.path
    } else if {

    }
}



<Router>
    {/* can only put one element within this apparently. */}
    <div>
        <Navpills />
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/blog" component = {Blog} />
        <Route path ="/contact" component = {Contact} />
    </div>
</Router>


<li className={window.location.pathname === "/about" ? "active" : ""}>
<Link to="/about">About</Link>
</li>