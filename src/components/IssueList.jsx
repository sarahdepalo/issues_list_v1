import React from 'react';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this._fetchIssues();
    }

    _fetchIssues =  () => {
        this.setState({
            isLoading: true
        }, async () => {
            const response =  await fetch ('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(response => response.json());
            console.log(response.labels)
            this.setState({
                issues: response,
                isLoading: false
            })
        })
    }

    render() {
        const { issues } = this.state
        return(
            <>
            <div>{issues.map((issue) =>  
            <div className="IssueDiv">
            <h3><a href={issue.html_url}>{issue.title}</a></h3>
            <p className="IssueText">{issue.body}</p>
            <p className="lightText">#{issue.number} opened by {issue.user.login}</p>
            </div>
            )}</div>
           </>
        )
    }
}


export default IssueList;