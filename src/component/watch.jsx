import React, {Component} from "react";
import {deleteWatch, getWatches} from "../dataService/watches";
import {getModels} from "../dataService/models";
import {getBrands} from "../dataService/brands";

class Watch extends Component{
    state = {
        watches : getWatches(),
        brands: getBrands(),
        models: getModels()
    }


    handleDelete = (watch)=>{
        const originalWatches = this.state.watches;
        const watches = originalWatches.filter(w => w.id !== watch.id);
        this.setState({watches});
        deleteWatch(watch.id);
    }

    render() {
        const {watches} = this.state;
        return(
            <div>
                <p>Showing {watches.length} watches in the database: </p>
                <table className='table'>
                    <thead>
                    <tr>
                        <th scope='col'>Serial</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Color</th>
                        <th scope='col'>Size</th>
                        <th scope='col'>Number In Stock</th>
                        <th scope='col'>Model</th>
                        <th scope='col'>Brand</th>
                    </tr>
                    </thead>
                    <tbody>
                    {watches.map(item => (
                        <tr key={item.id}>
                            <td>{item.serial}</td>
                            <td>{item.year}</td>
                            <td>{item.color}</td>
                            <td>{item.size}</td>
                            <td>{item.stockNumber}</td>
                            <td>{item.model.name}</td>
                            <td>{item.model.brand.name}</td>
                            <td><button onClick={()=> this.handleDelete(item)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );

    }

}

export default Watch;