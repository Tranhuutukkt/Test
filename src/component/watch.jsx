import React, {Component} from "react";
import {deleteWatch, getWatches} from "../dataService/watches";
import {getModels} from "../dataService/models";
import {getBrands} from "../dataService/brands";

class Watch extends Component{
    state = {
        watches : getWatches(),
        brands: getBrands(),
        models: getModels(),
        searchQuery: '',
        data: {}
    }


    handleDelete = (watch)=>{
        const originalWatches = this.state.watches;
        const watches = originalWatches.filter(w => w.id !== watch.id);
        this.setState({watches});
        deleteWatch(watch.id);
    }

    handleRate = (watch)=>{
        let point = 0;
        let number = 0;
        watch.rate.map(r => (
                point += r.id * r.value,
                number += r.value
            )
        );
        return (point/number).toFixed(2);
    }

    handleSearch = (query) =>{
        this.setState({searchQuery: query});
    }

    getData = ()=>{
        const {watches: data, searchQuery} = this.state;
        let watches = data;
        if (searchQuery)
            watches = data.filter(
                w => w.model.name.toLowerCase().match(searchQuery.toLowerCase()) ||
                    w.model.brand.name.toLowerCase().match(searchQuery.toLowerCase())
            );
        return {length: watches.length, watches: watches}
    }

    render() {
        const {searchQuery} = this.state;
        const {length, watches} = this.getData();

        return(
            <div>
                <p>Showing {length} watches in the database: </p>
                <input
                    type='text'
                    className='form-control my-3'
                    placeholder='Search ...'
                    value={searchQuery}
                    onChange={e => this.handleSearch(e.currentTarget.value)}
                />
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
                        <th scope='col'>Rate</th>
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
                            <td>{this.handleRate(item)}</td>
                            <td><button onClick={()=> this.handleDelete(item)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p>Add watch</p>
                <div className='mb-3'>
                    <label> Serial</label>
                    <input
                        type='text'
                        value={this.state.data['serial']}
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label> Year</label>
                    <input
                        type='number'
                        value={this.state.data['year']}
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label> Color</label>
                    <input
                        type='text'
                        value={this.state.data['color']}
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label> Size</label>
                    <input
                        type='text'
                        value={this.state.data['size']}
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label> Number in stock</label>
                    <input
                        type='number'
                        value={this.state.data['stockNumber']}
                        className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label> Model</label>
                    <select
                        type='text'
                        value={this.state.data['modelId']}
                        className='form-control'>
                        <option value=''>Choose a model</option>
                        {this.state.models.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label> Brand</label>
                    <select
                        type='text'
                        value={this.state.data['brandId']}
                        className='form-control'>
                        <option value=''>Choose a brand</option>
                        {this.state.brands.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        );

    }

}

export default Watch;