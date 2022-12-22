import * as C from './style';
import { Item } from '../../types/item';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    return (
        <C.Container>
            <input type="checkbox" />
            <label>{item.name}</label>
        </C.Container>
    );
}