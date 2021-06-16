import React from 'react'
import '../Styles/quote.css';

const Quote = () => {
    return (
        <>
            <div className="quote">
                <div className="quote_icon">
                    <i class="fa fa-quote-left fa-2x" aria-hidden="true"></i>
                </div>
                <blockquote>
                    <p><i>Scribd is overall the best and most convenient deal for online reading.</i></p>
                    <footer>
                        <cite>Business Insider</cite>
                    </footer>
                </blockquote>
            </div>
        </>
    )
}

export default Quote
