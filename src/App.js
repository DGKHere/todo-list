import './App.css';
import Filter from "./components/Filter";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
import Pagination from "./components/Pagination";
import {useEffect, useRef, useState} from "react";
import {convertAndGetTime} from "./library/library";

export const ALL = 'all'
export const DONE = 'done'
export const UNDONE = 'undone'

function App() {

    const [toDoListItems, setToDoListItems] = useState([
        {id: 1, value: "Do something 1", date: "11/06/2020", completed: false},
        {id: 2, value: "Do something 2", date: "12/02/2020", completed: false},
        {id: 3, value: "Do something 3", date: "10/03/2020", completed: true},
        {id: 4, value: "Do something 4", date: "10/05/2020", completed: false},
        {id: 5, value: "Do something 3", date: "10/03/2020", completed: true},
        {id: 6, value: "Do something 4", date: "10/05/2020", completed: false},
        {id: 7, value: "Do something 4", date: "10/05/2020", completed: false},
        {id: 8, value: "Do something 1", date: "11/06/2020", completed: false},
        {id: 9, value: "Do something 2", date: "12/02/2020", completed: false},
        {id: 10, value: "Do something 3", date: "10/03/2020", completed: true},
        {id: 11, value: "Do something 4", date: "10/05/2020", completed: false},
        {id: 12, value: "Do something 3", date: "10/03/2020", completed: true},
        {id: 13, value: "Do something 4", date: "10/05/2020", completed: false},
        {id: 14, value: "Do something 4", date: "10/05/2020", completed: false},

    ])

    const showToDoListItems = useRef([])

    const [filter, setFilter] = useState({
        sortDirection: true,
        filterType: ALL,
    })

    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 5
    })

    useEffect(() => {

        if (filter.sortDirection){
            setToDoListItems(state => {
                return [...state].sort((a, b) => convertAndGetTime(b.date) - convertAndGetTime(a.date))
            })
        }else {
            setToDoListItems(state => {
                return [...state].sort((a, b) => convertAndGetTime(a.date) - convertAndGetTime(b.date))
            })
        }

    }, [filter])



    useEffect(() => {

        switch (filter.filterType) {
            case DONE:
                showToDoListItems.current = [...toDoListItems.filter(item => item.completed)]
                break

            case UNDONE:
                showToDoListItems.current = [...toDoListItems.filter(item => !item.completed)]
                break

            default: //ALL
                showToDoListItems.current = [...toDoListItems]
                break
        }

    }, [toDoListItems, filter, paginate])



    return (
        <div className="App">
            <div className="container">
                <div className="todo">
                    <h1>ToDo</h1>
                    <Input addItem={setToDoListItems}/>
                    <Filter setFilter={setFilter}/>
                    <ToDoList showToDoListItems={showToDoListItems.current.slice((paginate.page - 1) * paginate.limit, (paginate.page - 1) * paginate.limit + paginate.limit)} setToDoListItems={setToDoListItems} />
                    <Pagination paginate={paginate} setPaginate={setPaginate} showToDoListItemsLength={showToDoListItems.current.length}/>
                </div>
            </div>

        </div>
    );
}

export default App;
