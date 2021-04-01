import { useState } from 'react';
import './App.css';
import NewLink from './components/NewLink/NewLink';
import {useDispatch, useSelector} from "react-redux";
import {postData} from "./store/actions/action";

const App = () => {
  const dispatch = useDispatch();
  const [urls, setUrls] = useState({originalUrl:''});
  const store = useSelector(state=>state['data']);

  const onChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setUrls({
      [name]:value
    });
  };

  const submitHandler = async e =>{
    e.preventDefault();
    await dispatch(postData(urls));
  };

  return (
    <div className="App">
      <h2>Shorten your Link!</h2>
      <div>
        <form className='form' onSubmit={submitHandler}>
          <input placeholder='input url' 
          className='inputUrl'
          name='originalUrl'
          required 
          onChange={onChangeHandler}/>
          <button type='submit' className='submitBtn'>
            Shorten
          </button>
        </form>
      </div>
      <div style={{display:store.shortUrl ? 'block' : 'none'}}>
        <NewLink 
        originalUrl={store.originalUrl}
        shortUrl={store.shortUrl}/>
      </div>
    </div>
  );
};

export default App;