import React, { Component } from 'react';
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from "./components/Palette";

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
    id = 3; //이미 0,1,2 존재

    state = {
        input: '',
        todos: [
            // {id : 0, text: '연습', checked: false},
            // {id : 1, text: '체크박스', checked: true},
            // {id : 2, text: '잘 되니', checked: false},
        ],
        color: '#343a40',
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value // input의 다음 바뀔값
        });
    }

    handleCreate = () => {
        const { input, todos, color} = this.state;
        this.setState({
            input : '', //인풋을 비우고
            // concat을 사용해 배열추가
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color
            })

        })
    }

    handleKeyPress = (e) => {
        //눌려진 키가 Enter면 handleCreate 호출
        if(e.key === 'Enter'){
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const {todos} = this.state;

        //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; //선택한 객체

        const nextTodos = [...todos]; //배열복사

        //기존값들 복사하고, checked 값 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        })
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    handleSelectColor = (color) => {
        this.setState({
            color
        })
    }

    render() {
        const { input, todos, color} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSelectColor,

        } = this;
        return(
            <TodoListTemplate form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    color={color}
                  />
                )}
                    palette={(
                        <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
                    )}>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </TodoListTemplate>
        );
    }
}

export default App;
