import React from 'react';

import Repository from './repository';

export default class RepositoryList extends React.Component {
    constructor(props) {
        super(props);
        this.addRepository = this.addRepository.bind(this);
    }

    addRepository() {
        const repositoryName = this.repositoryNameInput.value;
        // TODO: Add the repository to the state
    }

    render() {
        const repositories = this.props.repositories.map(repository => {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref={ref => this.repositoryNameInput = ref} />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
}