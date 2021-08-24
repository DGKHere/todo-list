import React from 'react';

const Pagination = ({paginate, setPaginate, showToDoListItemsLength}) => {

    const lastPage = Math.ceil(showToDoListItemsLength / paginate.limit) + 1

    console.log('lastPage', lastPage)
    console.log('showToDoListItemsLength', showToDoListItemsLength)


    const nextPage = () => {
        setPaginate(state => ({...state, page: state.page++}))
    }

    const previousPage = () => {
        setPaginate(state => ({...state, page: state.page--}))
    }

    return (
        <div className="pagination">
            {paginate.page > 1 &&
                <button onClick={previousPage}>
                    <i className="fas fa-arrow-left"/>
                </button>
            }


            {paginate.page < lastPage &&
                <button onClick={nextPage}>
                    <i className="fas fa-arrow-right"/>
                </button>
            }
        </div>
    );
};

export default Pagination;