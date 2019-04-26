// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle,removeArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        removeArticle: (article) => dispatch(removeArticle(article))
    }
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }

    handleDelete(){

        this.props.removeArticle();
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div >
                <button type="submit" className="btn btn-success btn-lg-4 buttonContainer">
                    SAVE
                </button>
                <button  type="button" className="btn  btn-lg-4 buttonContainer" onClick={this.handleDelete}>
                    DELETE
                </button>
                </div>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;