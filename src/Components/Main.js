import React from 'react'
import "../Styles/Main.css";
const Main = () => {
    return (
        <>
            <div className="pic_div">
                <div className="pic_text">
                    <h2>Endless Entertainment and knowledge</h2>
                    <div className="text_contain">
                        Read or listen anytime,anywhere
                    </div >
                    <div className="text_contain"><button>Read free for 30 Days</button></div >
                    <div className="text_contain">Only ₹299/month after. Cancel anytime.</div>
                </div>
            </div>

            <div className="items">
                <h2>All in one simple subscription</h2>
                <div className="item_list">

                    <div>
                        <span><i class="fa fa-book" aria-hidden="true"></i></span>
                        <h3>Books</h3>
                    </div>
                    <div>
                        <span><i class="fa fa-headphones" aria-hidden="true"></i></span>
                        <h3>AudioBooks</h3>
                    </div>
                    <div>
                        <span><i class="fa fa-address-book-o" aria-hidden="true"></i></span>
                        <h3>Magazines</h3>
                    </div>
                    <div>
                        <span><i class="fa fa-podcast" aria-hidden="true"></i></span>
                        <h3>Podcasts</h3>
                    </div>
                    <div>
                        <span><i class="fa fa-music" aria-hidden="true"></i></span>
                        <h3>Sheet Music</h3>
                    </div>
                    <div>
                        <span><i class="fa fa-file-text" aria-hidden="true"></i></span>
                        <h3>Documents</h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main
