import React, { Component } from 'react';
import Input from '../common/Input';
import { withRouter,Link } from 'react-router-dom';
import { getYearlyBalance } from '../../api/remote';

class YearBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: {
                "1": {
                  "budget": 0,
                  "balance": 0
                },
                "2": {
                  "budget": 0,
                  "balance": 0
                },
                "3": {
                    "budget": 0,
                    "balance": 0
                  },
                  "4": {
                    "budget": 0,
                    "balance": 0
                  },
                  "5": {
                    "budget": 0,
                    "balance": 0
                  },
                  "6": {
                    "budget": 0,
                    "balance": 0
                  },
                  "7": {
                    "budget": 0,
                    "balance": 0
                  },
                  "8": {
                    "budget": 10,
                    "balance": 200
                  },
                  "9": {
                    "budget": 0,
                    "balance": 0
                  },
                  "10": {
                    "budget": 5,
                    "balance": 0
                  },
                  "11": {
                    "budget": 20,
                    "balance": 0
                  },
                  "12": {
                    "budget": 0,
                    "balance": 5
                  }
                
              }
              
        };
    }




componentDidMount() {
    this.getData();
     this.detailsData()

}
async getData() {
    const year = await getYearlyBalance(Number(this.props.match.params.year));
    this.setState({ year});
    
    
}
detailsData(){
    // for (const key of Object.keys(this.state.year)) {
    //     const val =this.state.year[key];
    //     console.log(val)
    // }
}

render(){
    
    //  console.log(Object.keys(this.state.year))
    return (
        <div className="container">
            <div className="row space-top">
                <div className="col-md-12">
                    <h1>Yearly Balance</h1>
                </div>
            </div>
            <div className="row space-top col-md-12">
              <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>January</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[1])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[1])[1]}  disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(1)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>February</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[2])[0]}disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[2])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(2)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row space-top col-md-12">
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>March</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[3])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance"  value={Object.values(this.state.year[3])[1]}disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(3)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>April</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[4])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[4])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(4)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>May</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[5])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[5])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(5)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>June</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget"value={Object.values(this.state.year[6])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[6])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number()}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row space-top col-md-12">
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>July</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[7])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[7])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(7)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>August</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget"  value={Object.values(this.state.year[8])[0]}disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance"  value={Object.values(this.state.year[8])[1]}disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(8)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>September</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[9])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[9])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(9)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>October</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[10])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[10])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(10)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>November </h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value value={Object.values(this.state.year[11])[0]} disabled />
                                <label htmlFor="balance">Balance:</label>
                                <input className="col-md-9" name="balance"  value={Object.values(this.state.year[11])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(11)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-secondary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <h2>December</h2>
                                <h4>Year {this.props.match.params.year}</h4>
                                <label htmlFor="budget">Budget:</label>
                                <input className="col-md-9" name="budget" value={Object.values(this.state.year[12])[0]} disabled />
                                <label htmlFor="balance">Balance: </label>
                                <input className="col-md-9" name="balance" value={Object.values(this.state.year[12])[1]} disabled />
                                <div className="space-top">
                                <Link to={`/plan/${Number(this.props.match.params.year)}/${Number(12)}`} className="btn btn-secondary">Details</Link>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default withRouter(YearBalance)