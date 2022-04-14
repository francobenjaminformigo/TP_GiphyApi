import { Component } from 'react';

import Gif from './Gif';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class App extends Component {

    constructor() {
      super()
      this.state= {
        gifs: []
      }
    }

    async randomGif() {
        try { 
            let request = await fetch(`https://api.giphy.com/v1/gifs/search?q=simpson&api_key=XBMgIm6dRevg70PAN4GRQzqB3hjG4coY&offset=${getRandomArbitrary(1, 4000)}`);
            let gif = await request.json() 
            return gif
        } catch (error) {
            console.error(error);
        }
    }

    async añadirGif() {
        let nuevoGif = await this.randomGif()
        const newRandom = getRandomArbitrary(1, 50)
        this.setState({
            gifs: [
                ...this.state.gifs,
                {
                    title: nuevoGif.data[newRandom].title,
                    image_original_url: nuevoGif.data[newRandom].images.downsized_medium.url,
                    username: nuevoGif.data[newRandom].username
                }
            ]
        })
    }



    async componentDidMount() {
        let primerGif = await this.randomGif();
        const primerRandom = getRandomArbitrary(1, 50)
        this.setState({
            gifs: [
                {
                    title: primerGif.data[primerRandom].title,
                    image_original_url: primerGif.data[primerRandom].images.downsized_medium.url,
                    username: primerGif.data[primerRandom].username
                }
            ]
        })
    }


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/#">GIPHY SIMPSONS APP</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav ml-auto">
                            <li className="nav-item">
                                <button onClick={() => this.añadirGif()} className="btn btn-success">Cargar random</button>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="container mt-3">


                    <div className="row text-center">

                        {
                            this.state.gifs.map((gif, index) => {
                                return <Gif key={gif.title + index} title={gif.title} image_original_url={gif.image_original_url}/>
                            })
                        }

                    </div>


                </div>
            </>
        );
    }
    
}



export default App;
