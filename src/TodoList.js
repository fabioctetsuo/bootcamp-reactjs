import React, { Fragment } from 'react';
import { connect } from 'react-redux'; // conecta o componente com alguma informação do estado do redux
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

// import { Container } from './styles';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      { todos.map(todo => (
        <li key={todo.id}>
          { todo.text }
          <button type="submit" onClick={() => removeTodo(todo.id)}>Remover</button>
        </li>
      )) }
    </ul>
    <button onClick={() => addTodo('Novo todo')}>Adicionar tarefa</button>
  </Fragment>
);

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
