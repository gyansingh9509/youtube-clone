import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtubeapi';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component{
  state={
    videos:[],
    selectvideo:"",
  }

  componentDidMount(){
    this.onTermSubmit("Gyan Technical edtech")
  }
  onSelectvideo=(video)=>{
    this.setState({selectvideo:video})
  }

  onTermSubmit=async (term)=>{
    const res = await youtube.get('/search',{
      params:{
        q:term
      },
    });
    this.setState({videos:res.data.items,selectvideo:res.data.items[0]});
  };

  render(){
    return (
      <>
      <div className="container">
        <div className="row yt">
          <h1 className="text-center col-md-12"> <i class="fa-brands fa-square-youtube"></i>  &nbsp; Video Search Engine</h1>
        </div>
        <div className="row my-2">
          <div className="col-md-8">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectvideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos} onSelectvideo={this.onSelectvideo}/>
          </div>
        </div>
      </div>
      </>
    );
    }
}

export default App;
