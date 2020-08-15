export default function Header(){

    return(
        <div className="header-container">
            <header>
                <h1>Compare pixels</h1>
                <h2>See the difference between design mockups and the live website.</h2>
            </header>
            <style jsx>{`
                .header-container{
                    margin-top: 180px;
                    text-align: center;
                    width: 1024px;
                    border: 1px solid red;
                }
                h1{
                    color: #222222;
                    font-weight: 700;
                    font-size: 2.6rem;
                    margin-bottom: 0px;
                }
                h2{
                    color: #888888;
                    font-weight: 400;
                    font-size: 1.6rem;
                    margin-top: 17px;
                    padding: 0px 292px;
                }
            `}</style>
        </div>
    )
}