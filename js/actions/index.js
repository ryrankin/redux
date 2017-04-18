export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export const addRepository = repository => ({
    type: ADD_REPOSITORY,
    repository
});

export const RATE_REPOSITORY = 'RATE_REPOSITORY';
export const rateRepository = (repository, rating) => ({
    type: RATE_REPOSITORY,
    repository,
    rating
});

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repository, description) => ({
    type: FETCH_DESCRIPTION_SUCCESS,
    repository,
    description
});

export const FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (repository, error) => ({
    type: FETCH_DESCRIPTION_ERROR,
    repository,
    error
});
