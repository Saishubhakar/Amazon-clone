import React from 'react'
import { useState } from 'react'

const Amazon = (props) => {

    const [Color, setColor] = useState({
        color: "#000000",
    })


    const darkmode = () => {

        let imgcontainer = document.getElementById("imgcontainer");
        imgcontainer.classList.toggle("bodyvisible")
        // These are the heading

        if (Color.color === "#000000") {
            setColor({
                color: "white"
            })

        }
        else {
            setColor({
                color: "#000000"
            })
        }

    }

    return (
        <div>
            <div className='imgcontainer' id='imgcontainer'>


                <div className='outermini'>

                    <header className='mininav'>
                        <ul className='miniul'>


                            <li className='minili' id='toggle'>

                                <div className='options' id='options'>

                                    <div className="form-check form-switch" id='darkmode'>
                                        <input className="form-check-input" onClick={darkmode} type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Click here to enable the Darkmode</label>
                                    </div>

                                </div>

                            </li>

                        </ul>
                    </header>
                </div>



                <div className='outest'>
                    <div className='amazon'>
                        <div id="carouselExampleCaptions" className="carousel slide headslider" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <a href='https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=W1K0MYA9AYZAG18H9AHV&pf_rd_p=5d1979c4-26e6-453f-8020-c55e2744810c&pd_rd_r=8cef7b76-7d27-4241-8d90-5d83c1f9ccc2&pd_rd_w=QR0Ho&pd_rd_wg=S06QR&ref_=pd_gw_unk' target={"_blank"} className="carousel-item active slide1">
                                    <img src="" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </a>

                                <a href='https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=W1K0MYA9AYZAG18H9AHV&pf_rd_p=5d1979c4-26e6-453f-8020-c55e2744810c&pd_rd_r=8cef7b76-7d27-4241-8d90-5d83c1f9ccc2&pd_rd_w=QR0Ho&pd_rd_wg=S06QR&ref_=pd_gw_unk' target={"_blank"} className="carousel-item slide2">
                                    <img src="" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </a>

                                <a href='https://www.amazon.com/b/?_encoding=UTF8&node=16225015011&pf_rd_r=W1K0MYA9AYZAG18H9AHV&pf_rd_p=babef740-5109-4f42-9432-791e50a12de8&pd_rd_r=8cef7b76-7d27-4241-8d90-5d83c1f9ccc2&pd_rd_w=0CBYj&pd_rd_wg=S06QR&ref_=pd_gw_unk' target={"_blank"} className="carousel-item slide3">
                                    <img src="" className="d-block w-100" />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </a>

                            </div>
                            <button id='prev' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button id='next' className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <h1 className='heading' id='heading1' style={Color}>Join the Sports Fun</h1>
                    <div className='container1 jojo'>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    +3 colors/patterns
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=22e4c3b8-a3bf-4f93-b914-9e6dd3b793cc,2" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Gilbert-Training-Rugby-Ball-Size/dp/B00CONENMW/ref=sr_1_3?keywords=rugby+ball&qid=1658649486&sprefix=rugby%2Caps%2C280&sr=8-3" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='rugby' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" style={Color}>Rugby Ball</h4>

                                <div className='detail1' style={Color}>
                                    <p className="card-text" id='card-text'>Gilbert</p>
                                    <p className="card-text" id='card-text'>20% off</p>
                                    <p className="card-text" id='card-text'>36$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Limited Stock
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=e8329508-441a-44b8-82ae-d5d3afef7d65,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/adidas-Performance-Tango-Glider-Soccer/dp/B01F1UBP5W/ref=sr_1_8?crid=31LWQJH9PPM2X&keywords=soccer+ball&nav_sdd=aps&qid=1658649578&refinements=p_n_feature_seventeen_browse-bin%3A5744252011&rnid=5744249011&s=team-sports&sprefix=soccer&sr=1-8" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='football' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle2" style={Color}>Soccer Ball</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Adidas</p>
                                    <p className="card-text">43% off</p>
                                    <p className="card-text">25.99$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Best seller
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=Cadfdaffb-e2ba-4b65-9b35-c883ba9735d7,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Rawlings-Official-Recreational-Baseballs-OLB3BBOX3/dp/B00AWVNPMM/ref=sr_1_3?crid=39X4ZX9671RJH&keywords=baseball&qid=1658649839&sprefix=baseball%2Caps%2C296&sr=8-3" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='baseball' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle3" style={Color}>Base Ball</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Rawlings</p>
                                    <p className="card-text">22% off</p>
                                    <p className="card-text">17.99$</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />

                    <h1 className='heading' id='heading2' style={Color}>Electronic Accessories</h1>
                    <div className='container2 jojo'>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    HD display
                                    <span className="visually-visible"></span>
                                </span>
                            </div>


                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=93bfba29-42c3-4da2-8331-892ec8766041,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Dell-Inspiron-3510-Processor-Bluetooth/dp/B09SJZDPY6/ref=sr_1_4?crid=FO2NKU7IRU2E&keywords=dell+laptop&qid=1658649958&sprefix=dell+lapto%2Caps%2C294&sr=8-4" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='laptop' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle4" style={Color}>Laptop</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Dell</p>
                                    <p className="card-text">28% off</p>
                                    <p className="card-text">630$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    12GB Ram
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/Apple-iPhone-XR-64GB-White/dp/B08BGD4G36/ref=sr_1_1?crid=3IT4X6WNATXMW&keywords=iphone+x&qid=1658650031&sprefix=iphone+x%2Caps%2C322&sr=8-1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Apple-iPhone-XR-64GB-White/dp/B08BGD4G36/ref=sr_1_1?crid=3IT4X6WNATXMW&keywords=iphone+x&qid=1658650031&sprefix=iphone+x%2Caps%2C322&sr=8-1" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='phone' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle5" style={Color}>iPhone XR</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Apple</p>
                                    <p className="card-text">20% off</p>
                                    <p className="card-text">600$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    +3 shades/patterns
                                    <span className="visually-visible"></span>
                                </span>
                            </div>


                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=2d9788c0-f517-4e56-96c8-bed784774721,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Philips-Audio-Performance-PH802BK-Headphones/dp/B07ZDM5H9T/ref=sr_1_2_sspa?crid=1R2GQMBQLFV2&keywords=boat+headphones&qid=1658650189&sprefix=boat+headphon%2Caps%2C295&sr=8-2-spons&psc=1&smid=A6EGA15UEFYEQ&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyR1A5VEtNWFc2WE1ZJmVuY3J5cHRlZElkPUEwMzQ3MDkzWU5JU0xJU05MWjBCJmVuY3J5cHRlZEFkSWQ9QTA4MzMyOTMzQTFDN0pEQ1NWME9CJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='headphones' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle6" style={Color}>Headphones</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Philips</p>
                                    <p className="card-text">12% off</p>
                                    <p className="card-text">260$</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />

                    <h1 className='heading' id='heading3' style={Color}>Back To School Offers</h1>
                    <div className='container3 jojo'>



                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    3 left - order soon
                                    <span className="visually-visible"></span>
                                </span>
                            </div>
                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=Ceb6c8a7f-025d-4716-af37-13cf05da185a,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Travel-Laptop-Backpack-Charging-Laptops/dp/B07V4R4Z77/ref=sr_1_1_sspa?keywords=f+gear+backpack&qid=1658650293&sprefix=f-gear+ba%2Caps%2C305&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVEhCM0s0SjA3MjdEJmVuY3J5cHRlZElkPUEwODI5MTYyMUNOWEwwWTFCSUY0NyZlbmNyeXB0ZWRBZElkPUEwNTc0Mjg2MkgyMVIwMURZQVFORCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='bag' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle7" style={Color}>School Bag</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">F-Gear</p>
                                    <p className="card-text">56% off</p>
                                    <p className="card-text">60$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Sharpie love
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=399605c9-a539-4fad-9432-616d5a405a36,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Dual-Ended-Creative-Highlighter-Assorted-Stand-up/dp/B09TRZ5W89/ref=sr_1_2_sspa?keywords=sharpies&qid=1658650372&sprefix=sharpies%2Caps%2C334&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTFRKMUhaUVE1MFdOJmVuY3J5cHRlZElkPUEwNjYwODU4RzBaQks5REJMV0FKJmVuY3J5cHRlZEFkSWQ9QTAwMzIxMzkxQ0xGNlI3QTNQRjY3JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='sharpie' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle8" style={Color}>Sharpies</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">S-Note</p>
                                    <p className="card-text">4% off</p>
                                    <p className="card-text">20$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    108 colors
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=C7fbe4475-c247-4024-8a86-2b71c62f53fb,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Crayola-Twistables-Colored-Exclusive-Stocking/dp/B07D4RN9NH/ref=sr_1_6?crid=2TEGZN0EIQXZT&keywords=crayon+pencils&qid=1658650467&sprefix=crayon+pencil%2Caps%2C301&sr=8-6" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='crayon' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle9" style={Color}>Crayon pencils</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Camlin</p>
                                    <p className="card-text">13% off</p>
                                    <p className="card-text">40$</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h1 className='heading' id='heading4' style={Color}>Grooming Men's Accessories</h1>
                    <div className='container4 jojo'>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Limited edition
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=03fe1378-54da-4b99-aa15-e46edcdef63e,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/NIKE-Force-Shoes-White-315122-111/dp/B01HK4Y3KG/ref=sr_1_1?keywords=white+forces+for+men&qid=1658650538&sprefix=white+force%2Caps%2C288&sr=8-1" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='shoes' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle10" style={Color}>White-Force 3</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Nike</p>
                                    <p className="card-text">22% off</p>
                                    <p className="card-text">260$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Golden edition
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=7197ccad-fbaa-4fcc-903d-7b13a89b4976,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Tissot-Mens-Tradition-T0634093601800-White/dp/B07DWFSG8S/ref=sr_1_2?keywords=tissot+watches+for+men&qid=1658650598&sprefix=tissot+wa%2Caps%2C290&sr=8-2" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='watch' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle11" style={Color}>Dial Analog Watch</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Tissot</p>
                                    <p className="card-text">27% off</p>
                                    <p className="card-text">280$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    OG Blue
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=ff790ba9-4102-4a07-87e4-63e9a095a9e2,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/QBSM-Solid-Color-Formal-Neckties/dp/B00UHSLEQY/ref=sr_1_1_sspa?keywords=navy+tie&qid=1658650687&sprefix=navyTie%2Caps%2C288&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRTUMwS0IyQzhRTkEmZW5jcnlwdGVkSWQ9QTA1NDkzMDc1OU5aNzI0UUIyUzImZW5jcnlwdGVkQWRJZD1BMDQ4OTQ1ODFBQVhZV0taQUVYSEEmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='tie' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle12" style={Color}>Navy-Tie</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">QBSM</p>
                                    <p className="card-text">14% off</p>
                                    <p className="card-text">60$</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h1 className='heading' id='heading5' style={Color}>Exercise Equipments at Home</h1>
                    <div className='container5 jojo'>

                        <div className="card" style={{ width: "18rem" }}>
                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    At Best Prices
                                    <span className="visually-visible"></span>
                                </span>
                            </div>
                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/NordicTrack-NTL17915-6-5-Treadmill/dp/B0193V3DJ6/ref=sr_1_1?crid=3K4F37B2RUXOJ&keywords=adidas+treadmill&qid=1658650859&sprefix=adida+treadmill%2Caps%2C284&sr=8-1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/NordicTrack-NTL17915-6-5-Treadmill/dp/B0193V3DJ6/ref=sr_1_1?crid=3K4F37B2RUXOJ&keywords=adidas+treadmill&qid=1658650859&sprefix=adida+treadmill%2Caps%2C284&sr=8-1" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='treadmill' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle13" style={Color}>TreadMill</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">NordicTrack</p>
                                    <p className="card-text">60% off</p>
                                    <p className="card-text">560$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Belly twister
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=f7c8e665-6898-4bcc-b591-c327b4e28e2d,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/Figure-Trimmer-Exercise-Acupressure-Strengthening/dp/B003DW6O7A/ref=sr_1_1?crid=30I1AM96D33XC&keywords=Belly+twister&qid=1658650938&sprefix=belly+twiste%2Caps%2C291&sr=8-1" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='twister' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle14" style={Color}>Tummy Twister</h4>
                                <div className='detail1' style={Color}>
                                    <p className="card-text">Sachdev</p>
                                    <p className="card-text">40% off</p>
                                    <p className="card-text">120$</p>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>

                            <div className='badges'>
                                <span className="position-absolute badge rounded-pill bg-danger">
                                    Matty
                                    <span className="visually-visible"></span>
                                </span>
                            </div>

                            <div className='buttonshover'>
                                <div className='buybutton'>
                                    <a href="https://www.amazon.com/cart/smart-wagon?newItems=8ed4431f-0b6a-4851-9c7e-ed2f7ac8fad5,1" target={"_blank"} className="shopbutton btn btn-primary">Shop Now</a>
                                </div>
                                <div className='detailsbutton'>
                                    <a href="https://www.amazon.com/adidas-Yoga-Mat-8-mm/dp/B07DXB5QXP/ref=sr_1_4?crid=2IK8Y9KG856D1&keywords=adidas+yoga+mat&qid=1658651041&sprefix=adida+yoga+mat%2Caps%2C273&sr=8-4" target={"_blank"} className="detailbutton btn btn-primary">More details</a>
                                </div>
                            </div>
                            <img src="..." id='yogamat' className="card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title" id="cardtitle15" style={Color}>Yoga Mat</h4>
                                <div className='detail1' style={Color}>
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
