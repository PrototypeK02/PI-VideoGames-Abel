import {PRE_FILTER,GET_ALL_GAMES,GET_VIDEOGAME_NAME,GET_VIDEOGAME_DETAIL, NOT_FOUND, FILTER_BY_GENRES,SORT_BY_NAMEAZ,FILTER_BY_PLATFORM, RESET, CHANGE_NEXT_PAGE,CLEAR_NAME_DETAIL, CHANGE_BACK_PAGE, CHANGE_PAGE,SET_PAGE_STATE, RESET_DETAILS, SORT_BY_RATING15, NEED_BACKUP } from "../actiontypes/actiontypes"

const initialState = {
    allVideoGames: [],
    videoGameId: [],
    genres: [],
    paginationPages: 1,
    paginationToShow: [],
    videoGameName: [],
    backUpState: [],
    filteredState: [],
    notfoundErr: ""
}

export default function reducer(state = initialState,{type,payload}) {
    switch(type) {
        case GET_ALL_GAMES:
            return{ ...state, allVideoGames: payload}

        case RESET:
            return { ...state, allVideoGames: []}

        case CHANGE_NEXT_PAGE:
            return { ...state, paginationPages: state.paginationPages+=1}

        case CHANGE_BACK_PAGE:
            return {...state, paginationPages: state.paginationPages-=1}

        case GET_VIDEOGAME_NAME:
            return {...state, videoGameName: payload }

        case CHANGE_PAGE:
            return { ...state, paginationPages: payload}

        case GET_VIDEOGAME_DETAIL:
            return {...state, videoGameId: payload}

        case SET_PAGE_STATE:
            return {...state, paginationToShow: payload}

        case SORT_BY_NAMEAZ:
            return {...state, allVideoGames: payload}

        case RESET_DETAILS:
            return {...state, videoGameId: []}

        case CLEAR_NAME_DETAIL:
            return {...state, videoGameName: []}

        case SORT_BY_RATING15:
            return {...state, allVideoGames: payload}

        case NEED_BACKUP:
            return {...state, backUpState: payload}

        case PRE_FILTER:
            return {...state, filteredState: state.filteredState.concat(payload)}

        case NOT_FOUND:
            return {...state, notfoundErr: payload}

            default:
                return state
    }
}