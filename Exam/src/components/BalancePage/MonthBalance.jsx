import React, { Component } from 'react';
import Input from '../common/Input';
import { withRouter } from 'react-router-dom';
import { getMontlyBalance,postIncomeBudget } from '../../api/remote';
import { Link } from 'react-router-dom';
import toastr from 'toastr';


class MonthBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            income:"",
            budget:""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
        
      
    }
    async onSubmitHandler(e) {
        e.preventDefault();
        const year=Number(this.props.match.params.year);
        const month=Number(this.props.match.params.month);
        let incomeVal=Number(this.state.income);
        let budgetVal=Number(this.state.budget);
            const res = await postIncomeBudget(year,month,incomeVal,budgetVal)
            toastr.success('Updated planner')
        
        
      

        
    };
    componentDidMount() {
        this.getData();
        toastr.success('LoadDate successfully!')

        console.log(Number(this.props.match.params.year))
        console.log(Number(this.props.match.params.month))
    }
    async getData() {
        let year=Number(this.props.match.params.year);
        let month=Number(this.props.match.params.month)
        const res = await getMontlyBalance(Number(this.props.match.params.year),Number(this.props.match.params.month));
        this.setState({ income:res.income,budget:res.budget});


    }
    render() {
        
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row space-top">
                            <div className="col-md-12">
                                <h1>Welcome to Budget Planner</h1>
                            </div>
                        </div>
                        <div className="row space-top ">
                            <div className="col-md-12 ">
                                <div className="card bg-secondary">
                                    <div className="card-body">
                                        <blockquote className="card-blockquote">
                                            <h2 id="month">{this.props.match.params.month} Month {this.props.match.params.year}</h2>
                                            <div className="row">
                                                <div className="col-md-3 space-top">
                                                    <h4>Planner</h4>
                                                    <form onSubmit={this.onSubmitHandler}>
                                                        {/* <div className="form-group">
                                                            <label className="form-control-label" htmlFor="income">Income:</label>
                                                            <input className="form-control" label="Income" onChange={this.onChangeHandler} name="income" value={this.state.month.income} type="number" />
                                                        </div> */}
                                                        <Input
                                                            name="income"
                                                            type="number"
                                                            value={Number(this.state.income)}
                                                            onChange={this.onChangeHandler}
                                                            label="Income"
                                                        />
                                                        {/* <div className="form-group">
                                                            <label className="form-control-label" htmlFor="budget">Budget:</label>
                                                            <input className="form-control" label="Budget" onChange={this.onChangeHandler} name="budget" value={this.state.month.budget} type="number" />
                                                        </div> */}
                                                        <Input
                                                            name="budget"
                                                            type="number"
                                                            value={Number(this.state.budget)}
                                                            onChange={this.onChangeHandler}
                                                            label="budget"
                                                        />
                                                        <input type="submit" className="btn btn-secondary" defaultValue="Save" />
                                                    </form>
                                                </div>
                                                <div className="col-md-8 space-top">
                                                    <div className="row">
                                                        <h4 className="col-md-9">Expenses</h4>
                                                        <a href="expenses.html" className="btn btn-secondary ml-2 mb-2">Add expenses</a>
                                                    </div>
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Category</th>
                                                                <th>Cost</th>
                                                                <th>Payment Date</th>
                                                                <th />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Snacks</td>
                                                                <td>Non-essential</td>
                                                                <td>15.00</td>
                                                                <td>30-11-2017</td>
                                                                <td>
                                                                    <a href="#" className="btn btn-secondary">Delete</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rent</td>
                                                                <td>Fixed</td>
                                                                <td>330.00</td>
                                                                <td>15-11-2017</td>
                                                                <td>
                                                                    <a href="#" className="btn btn-secondary">Delete</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Gasoline</td>
                                                                <td>Variable</td>
                                                                <td>50.00</td>
                                                                <td>-</td>
                                                                <td>
                                                                    <a href="#" className="btn btn-secondary">Delete</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="container modal-footer">
                        <p>Budget Planner © SoftUni 2017</p>
                    </div>
                </footer>
            </div>
        )
    }
}
export default withRouter(MonthBalance)