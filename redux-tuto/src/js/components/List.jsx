
import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSpecificArticle} from "../actions";



function mapStateToProps ( state ){
    return {
        articles: state.articles
    }
};

function mapDispatchToProps(dispatch) {
    return {

        removeSpecificArticle: (idtToDelete) => dispatch(removeSpecificArticle(idtToDelete))
    }
};





    class ConnectedList extends Component {

        handleDelete(el){
          console.log('remove '+ el.target.id)
            const idToDelete =  el.target.id;
            this.props.removeSpecificArticle({ idToDelete });
        }
        constructor() {
            super();
            this.handleDelete = this.handleDelete.bind(this);
        }



    render(){

        return(
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    <button  type="button" className="btn  btn-lg-4 buttonContainer buttonRight" value={el.id} id={el.id} onClick={this.handleDelete}>
                    X
                    </button>
                    </li>
                ))}
            </ul>
        );
    }

}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;