export default function Header(){

    return(
        <div className="header-container">
            <header>
                <h1>Compare pixels</h1>
                <h2>See the difference between design mockups and the live website</h2>
            </header>
            <style jsx>{`
                .header-container{
                    height: 5vh;
                    width: 100vw;
                    text-align: center;
                }
                h1{
                    color: #222222;
                }
                h2{
                    color: #888888;
                }
            `}</style>
        </div>
    )
}