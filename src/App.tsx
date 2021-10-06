// import {FC} from 'react'
import {Column} from './Column'
import {Card} from './Card'
import {AppContainer} from './styles';
import { AddNewItem } from './AddNewItem';

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate App Scaffold"/>
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript"/>
      </Column>
      <Column text="Done">
        <Card text="Begin Using Static Typing"/>
      </Column>
      <AddNewItem toggleButtonText="+ Add a new Item" onAdd={console.log}/>
    </AppContainer>
  );
}

export default App;
