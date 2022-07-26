import './App.css';
import BackendAPI from './components/BackendApi';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>YtSUM</h1>
				<h2>YouTube video summarizer...</h2>
				<pre><div class="line"></div></pre>
				<BackendAPI />
			</header>
			<div className='footer_div'>
		 <footer className="footer">
			 By:  Jeevan,  Adil,  Akarsh,  Anfas 
			</footer> 
			</div>
		</div>
	);
}

export default App;
