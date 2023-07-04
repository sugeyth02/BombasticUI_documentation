import { LibraryComponentsList } from './Components';

export const data = [
    {
        title: 'Overview',
        elements: ['Introduction', 'Getting started'],
    },
    {
        title: 'Components',
        elements: LibraryComponentsList.map((element)=>element.id).sort(),
    },
];
