import {Component} from "react";
import {AddButton, Button, List, ListItem} from "./TaskList.styled.jsx";

export default class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Купити молоко" },
    { id: 2, text: "Прибрати кімнату" },
    { id: 3, text: "Написати код" },
  ];

  handleDelete = (id) => {
    TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
    this.forceUpdate()
  };

  handleAdd = () => {
    const text = prompt("Введіть назву завдання:")
    if (text && text.trim()) {
      TaskList.tasks.push({ id: Date.now(), text })
      this.forceUpdate()
    }
  }

  render() {
    return (
      <div>
        <List>
          {TaskList.tasks.map(task => (
            <ListItem key={task.id}>
              <span>{task.text}</span>
              <Button onClick={() => this.handleDelete(task.id)}>Видалити</Button>
            </ListItem>
          ))}
        </List>
        <AddButton onClick={this.handleAdd}>Додати завдання</AddButton>
      </div>
    )
  }
}