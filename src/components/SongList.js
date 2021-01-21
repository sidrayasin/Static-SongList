import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
 
class SongList extends React.Component {
    
    renderList(){
        return this.props.songs.map((song) =>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }
    
    render(){
        return(
            <div className="ui divided list">{this.renderList()}</div>
        );
    };
};

//state is all data in redux store
const mapStateToProps = (state) => {
    return { songs: state.songs }; // returning this object allows it to be a prop in SongList fn
}

//function within function return 
export default connect(mapStateToProps, {
    selectSong: selectSong // can reduce to just selectSong from actions 
    //does the concept of dispatch 
})(SongList);