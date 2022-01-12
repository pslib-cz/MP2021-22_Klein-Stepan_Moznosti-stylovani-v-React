import {createContext, useReducer, useEffect} from "react";

const LOCAL_STORAGE_ID = "sandwichCnt2E0A";

export const ADD_BEER = "ADD_BEER";
export const ADD_SEAT = "ADD_SEAT";
export const REMOVE_SEAT = "REMOVE_SEAT";
export const ADD_TABLE = "ADD_TABLE";
export const REMOVE_TABLE = "REMOVE_TABLE";
export const REMOVE_SPECIFIC_TABLE = "REMOVE_SPECIFIC_TABLE";
export const CLEAR = "CLEAR";
export const RESET = "RESET";

const copyMultidimensionalArray = arr => JSON.parse(JSON.stringify(arr));

const initialState = {name: "U poníka", tables: [[0,0,0,1],[0,0,2],[1,2]]};

let storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID));

const itemsReducer = (state, action) => {
    switch (action.type) {
        case ADD_BEER: {
            let newTables = copyMultidimensionalArray(state.tables);
            newTables[action.table][action.seat] += 1;
            return {...state, tables: newTables, total: state.total + 1};
        }
        case ADD_TABLE: {
            let newTables = copyMultidimensionalArray(state.tables);
            newTables.push([]);
            return {...state, tables: newTables};
        }
        case REMOVE_TABLE: {
            let newTables = copyMultidimensionalArray(state.tables);
            newTables.pop();
            return {...state, tables: newTables};
        }
        case REMOVE_SPECIFIC_TABLE: {
            let newTables = copyMultidimensionalArray(state.tables);
            newTables.splice(action.table, 1);
            return {...state, tables: newTables};
        }
        case ADD_SEAT: {
            let newTables = copyMultidimensionalArray(state.tables);
           
            if(newTables[action.table].length < 14){
                newTables[action.table].push(0);
                return {...state, tables: newTables};
            }
            else{
                return state;
            }
        }
        case REMOVE_SEAT: {
            let newTables = copyMultidimensionalArray(state.tables);
            newTables[action.table].pop();
            return {...state, tables: newTables};
        }
        case CLEAR: {
            let newTables = copyMultidimensionalArray(state.tables);
            newTables = newTables.map(arr => arr.fill(0));
            return {...state, tables: newTables};
        }
        case RESET: {
            return  initialState;
        }
        default: {
            return state;
        }
    }
}

export const SFContext = createContext();

export const SFProvider = ({children, ...rest}) => {
    const [store, dispatch] = useReducer(itemsReducer, storedData || initialState);
    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(store));
    },[store])
    return (
        <SFContext.Provider value={[store, dispatch]}>
            {children}
        </SFContext.Provider>
    );
}