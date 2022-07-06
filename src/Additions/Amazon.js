import React from 'react'

const Amazon = (props) => {



    return (
        <div>
            <div className='imgcontainer' id='imgcontainer'>


                <div className='outermini'>

                    <header className='mininav'>
                        <ul className='miniul'>

                            <li className='minili'>Home</li>
                            <li className='minili'>Home</li>

                            <li className='minili' id='toggle'>

                                <div className='options' id='options'>

                                    <div className="form-check form-switch" id='darkmode'>
                                        <input class="form-check-input" onClick={props.background} type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
                                    </div>

                                </div>

                            </li>

                            <li className='minili'>Home</li>
                            <li className='minili'>Home</li>
                        </ul>
                    </header>
                </div>



                <div className='outest'>
                    <div className='amazon'>
                        <div id="carouselExampleCaptions" class="carousel slide headmaster" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active slide1">
                                    <img src="" class="d-block w-100" alt="" />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>

                                <div class="carousel-item slide2">
                                    <img src="" class="d-block w-100" alt="" />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div class="carousel-item slide3">
                                    <img src="" class="d-block w-100" />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>

                            </div>
                            <button id='prev' class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button id='next' class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <h1 className='heading' id='heading1'>Join the Sports Fun</h1>
                    <div className='container1 jojo'>

                        <div className="card" id='card1' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    +3 colors/patterns
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='rugby' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle1">Rugby Ball</h4>
                                <div className='detail1'>
                                    <p className="card-text" id='card-text'>Gilbert</p>
                                    <p className="card-text" id='card-text'>20% off</p>
                                    <p className="card-text" id='card-text'>36$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card2' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Limited Stock
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='football' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle2">Soccer Ball</h4>
                                <div className='detail1'>
                                    <p className="card-text">Adidas</p>
                                    <p className="card-text">43% off</p>
                                    <p className="card-text">25.99$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card3' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Best seller
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='baseball' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle3">Base Ball</h4>
                                <div className='detail1'>
                                    <p className="card-text">Rawlings</p>
                                    <p className="card-text">22% off</p>
                                    <p className="card-text">17.99$</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />

                    <h1 className='heading' id='heading2'>Electronic Accessories</h1>
                    <div className='container2 jojo'>

                        <div className="card" id='card4' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    HD display
                                    <span className="visually-visible"></span>
                                </span>
                            </div>


                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='laptop' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle4">Laptop</h4>
                                <div className='detail1'>
                                    <p className="card-text">Dell</p>
                                    <p className="card-text">28% off</p>
                                    <p className="card-text">630$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card5' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    12GB Ram
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='phone' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle5">iPhone X</h4>
                                <div className='detail1'>
                                    <p className="card-text">Apple</p>
                                    <p className="card-text">20% off</p>
                                    <p className="card-text">600$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card6' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    +3 shades/patterns
                                    <span className="visually-visible"></span>
                                </span>
                            </div>


                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='headphones' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle6">Headphones</h4>
                                <div className='detail1'>
                                    <p className="card-text">Philips</p>
                                    <p className="card-text">12% off</p>
                                    <p className="card-text">260$</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />

                    <h1 className='heading' id='heading3'>Back To School Offers</h1>
                    <div className='container3 jojo'>



                        <div className="card" id='card7' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    3 left - order soon
                                    <span className="visually-visible"></span>
                                </span>
                            </div>
                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='bag' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle7">School Bag</h4>
                                <div className='detail1'>
                                    <p className="card-text">F-Gear</p>
                                    <p className="card-text">56% off</p>
                                    <p className="card-text">60$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card8' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Sharpie love
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='sharpie' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle8">Sharpies</h4>
                                <div className='detail1'>
                                    <p className="card-text">S-Note</p>
                                    <p className="card-text">4% off</p>
                                    <p className="card-text">20$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card9' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    108 colors
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='crayon' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle9">Crayon pencils</h4>
                                <div className='detail1'>
                                    <p className="card-text">Camlin</p>
                                    <p className="card-text">13% off</p>
                                    <p className="card-text">40$</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h1 className='heading' id='heading4'>Grooming Men's Accessories</h1>
                    <div className='container4 jojo'>

                        <div className="card" id='card10' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Limited edition
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='shoes' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle10">White-Force 3</h4>
                                <div className='detail1'>
                                    <p className="card-text">Nike</p>
                                    <p className="card-text">22% off</p>
                                    <p className="card-text">260$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card11' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Golden edition
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='watch' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle11">Dial Analog Watch</h4>
                                <div className='detail1'>
                                    <p className="card-text">Tissot</p>
                                    <p className="card-text">27% off</p>
                                    <p className="card-text">280$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card12' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    OG Blue
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='tie' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle12">Navy-Tie</h4>
                                <div className='detail1'>
                                    <p className="card-text">BlackBerry</p>
                                    <p className="card-text">14% off</p>
                                    <p className="card-text">60$</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h1 className='heading' id='heading5'>Exercise Equipments at Home</h1>
                    <div className='container5 jojo'>

                        <div className="card" id='card13' style={{ width: "18rem" }}>
                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    At Best Prices 
                                    <span className="visually-visible"></span>
                                </span>
                            </div>
                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='treadmill' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle13">TreadMill</h4>
                                <div className='detail1'>
                                    <p className="card-text">Adidas</p>
                                    <p className="card-text">60% off</p>
                                    <p className="card-text">560$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card14' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Belly twister
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='twister' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle14">Tummy Twister</h4>
                                <div className='detail1'>
                                    <p className="card-text">Sachdev</p>
                                    <p className="card-text">40% off</p>
                                    <p className="card-text">120$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" id='card15' style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Matty
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="#" className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="#" className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='yogamat' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle15">Rugby Ball</h4>
                                <div className='detail1'>
                                    <p className="card-text">Adidas</p>
                                    <p className="card-text">54% off</p>
                                    <p className="card-text">198$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Amazon
