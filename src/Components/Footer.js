import React from 'react'
import '../Styles/footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <footer>
                    <div className="footer_content">
                        <div>
                            <p style={{ padding: "20px" }}><b>About</b></p>
                            <p>About Kredey</p>
                            <p>press</p>
                            <p>Our Blog</p>
                            <p>Join our Team</p>
                            <p>Contact Us</p>
                            <p>Invite Friends</p>
                            <p>Gifts</p>
                            <p>Kredey for Enterprise</p>

                        </div>
                        <div>
                            <p style={{ padding: "20px" }}><b>Support</b></p>
                            <p>Help/FAQ</p>
                            <p>Accessibility</p>
                            <p>Purchase Help</p>
                            <p>Accessibility</p>
                            <p>AdChoices</p>
                            <p>Publishers</p>
                        </div>
                        <div>
                            <p style={{ padding: "20px" }}><b>Legal</b></p>
                            <p>Terms</p>
                            <p>Privacy</p>
                            <p>Copyright</p>

                        </div>
                        <div>
                            <p style={{ padding: "20px" }}><b>social </b></p>
                            <p><span><i class="fa fa-instagram" aria-hidden="true"></i></span>Instagram</p>
                            <p><span><i class="fa fa-twitter" aria-hidden="true"></i></span>Twitter</p>
                            <p><span><i class="fa fa-facebook" aria-hidden="true"></i></span>Facebook</p>
                            <p><span><i class="fa fa-pinterest-p" aria-hidden="true"></i></span>Pinterest</p>
                        </div>

                    </div>
                    <hr style={{ width: "80vw", margin: "auto" }} />

                </footer>
                <div className="footer_end">
                    <div className="footer_endleft">
                        <ul className="footer_endlist">
                            <li>Books</li>
                            <li>Audiobooks</li>
                            <li>Magazines</li>
                            <li>Podcasts</li>
                            <li>Sheetmusic</li>
                            <li>Documents</li>
                            <li>Snapshots</li>
                            <li>Directory</li>
                        </ul>
                    </div>
                    <div className="footer_endright">
                        <label for="cars">Language:</label>

                        <select id="lang">
                            <option label="Eng">English</option>
                            <option label="Hin">Hindi</option>
                            <option label="Tamil">Tamil</option>
                            <option label="Mar">Marathi</option>
                        </select>

                        <span>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> Kredey Inc.</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer
