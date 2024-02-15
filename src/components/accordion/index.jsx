import { useState } from "react";
import data from "./data";
import './styles.css';
// single selection
// multi selection


export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [multiSelectionEnabled, setMultiSelectionEnabled] = useState(false);
    const [multipleSelected, setMultipleSelected] = useState([]);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultiSelection(currentId) {
        let multipleSelectedCopy = [...multipleSelected];
        const findIndexOfCurrentId = multipleSelectedCopy.indexOf(currentId)
        if (findIndexOfCurrentId === -1) {
            multipleSelectedCopy.push(currentId);
            setMultipleSelected(multipleSelectedCopy);
        } else {
            multipleSelectedCopy.splice(findIndexOfCurrentId, 1);
        }
        setMultipleSelected(multipleSelectedCopy);
    }

    return (
        <div className="wrapper">
            <label for="multiselectionenabled">
                <input type="checkbox" checked={multiSelectionEnabled} onChange={() => setMultiSelectionEnabled(!multiSelectionEnabled)} />
                Enable multi-selection
            </label>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        (data.map(dataItem =>
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={(multiSelectionEnabled) ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                                    className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    (selected === dataItem.id || multipleSelected.indexOf(dataItem.id) !== -1
                                        ? (<div className="content">
                                            {dataItem.answer}
                                        </div>)
                                        : null)
                                }
                            </div>
                        ))
                        : <div>No data found</div>
                }
            </div>
        </div>);
};