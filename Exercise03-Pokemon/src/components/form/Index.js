import React, { Component } from 'react'
import PokemonField from './formFields/PokemonField'
import Input from './formFields/Input'

class Index extends Component {
    constructor() {
        super()

        this.state = {
            pokemonName: '',
            pokemonImage: '', //pokemonImg
            pokemonInfo: '',
            data: { pokemonColection: [] }
        }

    }
    createPokemon(e) {
        e.preventDefault()
        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImage: this.state.pokemonImage,
            pokemonInfo: this.state.pokemonInfo
        }
        this.createPokemonToServer(payload)
    }
    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.state.data.pokemonColection=data.pokemonColection
                //this.setState({ data: data.pokemonColection })
            })
    }

    createPokemonToServer(payload) {
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                return res.json()
            })
            .then(d => {
                
            })
    }

    render() {
        let validName = this.state.pokemonName !== ''
        let validImg = this.state.pokemonImage.startsWith('http')
        let validContent = this.state.pokemonInfo.length > 3
            && this.state.pokemonInfo.length < 50


        return (
            <div>
                <form onSubmit={this.createPokemon.bind(this)}>
                    <fieldset className='App'>
                        <Input
                            data='pokeName'
                            name='Pokemon Name'
                            func={e => {
                                this.setState({ pokemonName: e.target.value })
                            }}
                            valid={validName}
                        />

                        <Input
                            data='pokeImage'
                            name='Pokemon Image'
                            func={e => {
                                this.setState({ pokemonImage: e.target.value })
                            }}
                            valid={validImg}
                        />
                        <Input
                            data='pokeBio'
                            name='Pokemon Info'
                            func={e => {
                                this.setState({ pokemonInfo: e.target.value })
                            }}
                            valid={validContent}
                        />


                        <input style={({ "display": (validName && validImg && validContent) === true ? '' : 'none' })}
                            type='submit'
                            value='Create Pokemon'
                        />
                    </fieldset>
                </form>
                <div style={({display:'inline-block' })}>
                {
                  this.state.data.pokemonColection.map((p,i)=>{
                      return <PokemonField key={i} data={p}/>
                  })
                }
                </div>
            </div>
        )
    }
}
export default Index