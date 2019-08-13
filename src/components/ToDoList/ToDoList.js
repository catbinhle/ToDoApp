import React, { PureComponent } from 'react'
import {
    FlatList
} from 'react-native'
import ToDoCell from '../ToDoCell/ToDoCell'

export default class ToDoList extends PureComponent {

    render() {
        const { data } = this.props
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
            />
        )
    }

    _renderItem = ({item}) => (
        <ToDoCell 
            item={item}
            onUpdate={(item) => this._onUpdate(item)}
            onRemove={(id) => this._onRemove(id)}
        />
    )

    _onUpdate = (item) => {
        this.props.onUpdate(item)
    }

    _onRemove = (id) => {
        this.props.onRemove(id)
    }
}