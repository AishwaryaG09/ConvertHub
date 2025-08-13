import { useState, useEffect } from "react";
import styled from "styled-components";
import ConfirmModal from "./ConfirmModal";

const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${(props) => (props.hasError ? "#dc3545" : "#ccc")};
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const ListSection = styled.div`
  margin-top: 20px;
`;

const ListTitle = styled.h3`
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TaskText = styled.span`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const EditButton = styled.button`
  background: #ffc107;
  color: black;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
`;

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [doneList, setDoneList] = useState(() => {
    const saved = localStorage.getItem("doneList");
    return saved ? JSON.parse(saved) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("doneList", JSON.stringify(doneList));
  }, [doneList]);

  const [editingTask, setEditingTask] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [deleteFromList, setDeleteFromList] = useState("");

  const requestDelete = (task, fromList) => {
    setTaskToDelete(task);
    setDeleteFromList(fromList);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (deleteFromList === "todo") {
      setTodoList(todoList.filter((t) => t !== taskToDelete));
    } else {
      setDoneList(doneList.filter((t) => t !== taskToDelete));
    }
    setShowModal(false);
    setTaskToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setTaskToDelete(null);
  };

  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) return;

    const isDuplicate =
      todoList.includes(trimmedTask) || doneList.includes(trimmedTask);

    if (isDuplicate) {
      setError("Same record is already Present");
    } else {
      setTodoList([...todoList, trimmedTask]);
      setTask("");
      setError("");
    }
  };

  const moveToDone = (task) => {
    setTodoList(todoList.filter((t) => t !== task));
    setDoneList([...doneList, task]);
  };

  const moveToTodo = (task) => {
    setDoneList(doneList.filter((t) => t !== task));
    setTodoList([...todoList, task]);
  };

  const deleteTask = (task, fromList) => {
    if (fromList === "todo") {
      setTodoList(todoList.filter((t) => t !== task));
    } else {
      setDoneList(doneList.filter((t) => t !== task));
    }
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setEditedText(task);
  };

  const saveEdit = (fromList) => {
    const trimmed = editedText.trim();
    if (!trimmed || todoList.includes(trimmed) || doneList.includes(trimmed)) {
      return;
    }

    if (fromList === "todo") {
      setTodoList(todoList.map((t) => (t === editingTask ? trimmed : t)));
    } else {
      setDoneList(doneList.map((t) => (t === editingTask ? trimmed : t)));
    }

    setEditingTask(null);
    setEditedText("");
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditedText("");
  };

  const renderTask = (task, fromList) => {
    const isEditing = editingTask === task;

    return (
      <ListItem key={task}>
        <Left>
          <Checkbox
            type="checkbox"
            checked={fromList === "done"}
            onChange={() =>
              fromList === "todo" ? moveToDone(task) : moveToTodo(task)
            }
          />
          {isEditing ? (
            <Input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              style={{ flex: "none", width: "200px" }}
            />
          ) : (
            <TaskText>{task}</TaskText>
          )}
        </Left>
        <div>
          {isEditing ? (
            <>
              <EditButton onClick={() => saveEdit(fromList)}>Save</EditButton>
              <EditButton onClick={cancelEdit}>Cancel</EditButton>
            </>
          ) : (
            <EditButton onClick={() => startEditing(task)}>Edit</EditButton>
          )}
          <DeleteButton onClick={() => requestDelete(task, fromList)}>
            Delete
          </DeleteButton>
        </div>
      </ListItem>
    );
  };

  return (
    <Container>
      <Title>📝 To-Do List</Title>
      <InputSection>
        <Input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError("");
          }}
          hasError={!!error}
        />
        <Button onClick={handleAddTask}>Add</Button>
      </InputSection>
      {error && <p style={{ color: "#dc3545", marginTop: "-10px" }}>{error}</p>}

      <ListSection>
        <ListTitle>To-Do</ListTitle>
        {todoList.length === 0 && <p>No tasks yet.</p>}
        {todoList.map((item) => renderTask(item, "todo"))}
      </ListSection>

      <ListSection>
        <ListTitle>✅ Done</ListTitle>
        {doneList.length === 0 && <p>No completed tasks.</p>}
        {doneList.map((item) => renderTask(item, "done"))}
      </ListSection>
      <ConfirmModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </Container>
  );
}
