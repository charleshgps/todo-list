import { useState } from 'react';
import * as C from "./App.styles"
import { Item } from './types/item'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar Pão", done: false },
    { id: 2, name: "Comprar Bolo", done: false }
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefas </C.Header>

        {/* Area de adicionar a tarefa */}

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}
export default App;