import React from 'react';
import {convertAndGetTime} from "../library/library";
import {ALL, DONE, UNDONE} from "../App";

const Filter = ({setFilter}) => {

    return (
        <div className="filter-panel">
            <div className="filter-panel__buttons">
                <button
                    onClick={() => setFilter(state => ({...state, filterType: ALL}))}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter(state => ({...state, filterType: DONE}))}
                >
                    Done
                </button>
                <button
                    onClick={() => setFilter(state => ({...state, filterType: UNDONE}))}
                >
                    Undone
                </button>
            </div>
            <div className="filter-panel__sort">
                <span>Sort by Date</span>
                <button
                    onClick={() => setFilter(state => ({...state, sortDirection: true}))}
                    className="icon-button"
                >
                    <i className="fas fa-arrow-up"/>
                </button>
                <button
                    onClick={() => setFilter(state => ({...state, sortDirection: false}))}
                    className="icon-button"
                >
                    <i className="fas fa-arrow-down"/>
                </button>
            </div>
        </div>
    );
};

export default Filter;