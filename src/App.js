import IssueList from './components/IssueList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="repoTitle">
        <svg class="octicon octicon-repo color-text-secondary mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
        <h1><a href="https://github.com/facebook/create-react-app/issues">facebook/create-react-app</a></h1>
      </div>
      <div className="Contribute">
        <h2>👋Want to contribute to facebook/create-react-app?</h2>
        <p>If you have a bug or an idea, read the <a href="https://github.com/facebook/create-react-app/blob/bbd5a6015561c6ff8a18d99b4f852c9b10e55198/CONTRIBUTING.md">contributing guidelines</a> before opening an issue.
        <br/>
        If you're ready to tackle some open issues, <a href="https://github.com/facebook/create-react-app/contribute">we've collected some good first issues for you</a>.</p>
      </div>
      <IssueList />
    </div>
  );
}

export default App;
