import React from 'react';

class SearchBar extends React.Component{
    state={
        term:"",
    };

    onInputchange=(event)=>{
        
        this.setState({term:event.target.vlue});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        // callback form parent
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return (
            <>
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input 
                    type="search"
                    className='form-control'
                    placeholder='Search Anything here!!'
                    value={this.state.term}
                    onChange={this.onInputchange}
                     />
                </div>
            </form>
            </>
        )
    }
}

export  default SearchBar
