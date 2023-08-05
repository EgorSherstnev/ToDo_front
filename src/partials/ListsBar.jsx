import React from "react";
//import { getAllLists } from "../http/taskAPI";
import { useDispatch } from "react-redux";
import { fetchGetLists } from "../actions";

const ListBar = () => {

    const dispatch = useDispatch()

    const click = async(e) => {
        e.preventDefault();
        try {
            //let data = await getAllLists()
            dispatch(fetchGetLists())
            //console.log(data);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="">
            
            <form  className="">
                <div className="">
                    <label>Добавить список задач</label>
                    <input 
                        className="listbar__input input"
                        type="text"
                        //value={list}
                        //onChange={onInputChange}
                    />
                    <button 
                        value="clickme"
                        //onClick={onAddTask }
                    >
                        Добавить
                    </button>
                    <button 
                        className="button"
                        onClick={click}
                    >
                        Обновить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ListBar;