import {reactive} from '@vue/composition-api';

export const itemData=(context)=>{
    const cards= reactive([
        {
            title:'1',
            className:'box',
        },
        {
            title:'2',
            className:'box',
        },
    ]);
    return {
        cards,
    };
};