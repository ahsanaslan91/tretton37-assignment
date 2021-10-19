import React from "react";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                <div className="container"><a className="navbar-brand" href="#" style={{ color: 'var(--light)' }}><strong>tretton37</strong></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav ml-auto" style={{ color: 'var(--light)' }}>
                            <li className="nav-item"><a className="nav-link active" href="#">Who we are</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">what we do</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">knowledge sharing</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Join</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Inquire</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
